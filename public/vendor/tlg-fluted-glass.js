import * as THREE from 'three';

// Ode change: pick a texture size that fits the (half-resolution) canvas instead of always the full-size photo
const __odePick = (img, cssWidth) => {
  const need = cssWidth * Math.max(0.75, Math.min(window.devicePixelRatio || 1, 2) * 0.5);
  const set = (img.getAttribute("srcset") || "").split(",").map((p) => p.trim().split(/\s+/)).filter((p) => p[0] && /w$/.test(p[1] || "")).map(([u, w]) => [u, parseInt(w)]).sort((a, b) => a[1] - b[1]);
  const hit = set.find(([, w]) => w >= need) || set[set.length - 1];
  return hit ? new URL(hit[0], location.href).href : (img.currentSrc || img.src);
};
// Ode change: also start when this file is loaded after the page is ready (it is imported after "load")
const __odeStart = (fn) => (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fn) : fn());
__odeStart(function() {
  var vertex = `
varying vec2 vUv;
void main() {
vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;

  var fragment = `
precision mediump float;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;
uniform float uImageAspect;
uniform vec3 uOverlayColor;
uniform vec3 uOverlayColorWhite;
uniform float uMotionValue;
uniform float uRotation;
uniform float uSegments;
uniform float uOverlayOpacity;

void main() {
    float canvasAspect = resolution.x / resolution.y;
    float numSlices = uSegments;
    float rotationRadians = uRotation * (3.14159265 / 180.0); // Convert rotation to radians

    // Adjust the UV coordinates for aspect ratio
    vec2 scaledUV = vUv;
    if (uImageAspect > canvasAspect) {
        float scale = canvasAspect / uImageAspect;
        scaledUV.x = (vUv.x - 0.5) * scale + 0.5;
    } else {
        float scale = uImageAspect / canvasAspect;
        scaledUV.y = (vUv.y - 0.5) * scale + 0.5;
    }

    // Rotate the texture to align it with the warping axis
    vec2 rotatedUV = vec2(
        cos(rotationRadians) * (scaledUV.x - 0.5) - sin(rotationRadians) * (scaledUV.y - 0.5) + 0.5,
        sin(rotationRadians) * (scaledUV.x - 0.5) + cos(rotationRadians) * (scaledUV.y - 0.5) + 0.5
    );

    // Apply the warping effect along the aligned axis (now horizontal after rotation)
    float sliceProgress = fract(rotatedUV.x * numSlices + uMotionValue);
    float amplitude = 0.015; // The amplitude of the sine wave
    rotatedUV.x += amplitude * sin(sliceProgress * 3.14159265 * 2.0) * (1.0 - 0.5 * abs(sliceProgress - 0.5));

    // Rotate the UVs back to the original orientation
    vec2 finalUV = vec2(
        cos(-rotationRadians) * (rotatedUV.x - 0.5) - sin(-rotationRadians) * (rotatedUV.y - 0.5) + 0.5,
        sin(-rotationRadians) * (rotatedUV.x - 0.5) + cos(-rotationRadians) * (rotatedUV.y - 0.5) + 0.5
    );

    // Tile texture on edges using the final UVs
    vec2 tileIndex = floor(finalUV);
    vec2 oddTile = mod(tileIndex, 2.0);
    vec2 mirroredUV = mix(fract(finalUV), 1.0 - fract(finalUV), oddTile);
    vec4 color = texture2D(uTexture, mirroredUV);

    if (uOverlayOpacity > 0.0) {
        // Apply overlays with the specified opacity
        float blackOverlayAlpha = 0.05 * (1.0 - abs(sin(sliceProgress * 3.14159265 * 0.5 + 1.57))) * (uOverlayOpacity / 100.0);
        color.rgb *= (1.0 - blackOverlayAlpha);

        float whiteOverlayAlpha = 0.15 * (1.0 - abs(sin(sliceProgress * 3.14159265 * 0.7 - 0.7))) * (uOverlayOpacity / 100.0);
        color.rgb = mix(color.rgb, uOverlayColorWhite, whiteOverlayAlpha);
    }

    gl_FragColor = color;
}
`;


  class Sketch {
    constructor(options) {
      this.scene = new THREE.Scene();

      this.container = options.dom;
      const position = getComputedStyle(this.container).position;
      if (position !== 'relative' && position !== 'absolute' && position !== 'fixed' && position !== 'sticky') {
        this.container.style.position = 'relative';
      }

      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      // Ode change (performance): draw at half the screen's sharpness (never below 0.75) - behind the ribbed glass
      // the difference can't be seen, but phones draw roughly a quarter of the pixels they did before.
      this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
      this.renderer.setPixelRatio(Math.max(0.75, Math.min(window.devicePixelRatio || 1, 2) * 0.5));
      this.renderer.setSize(this.width, this.height);
      this.renderer.setClearColor(0xeeeeee, 1);

      const modeAttr = this.container.getAttribute('tlg-fluted-glass-mode');
      this.mode = ['static', 'mouse', 'scroll'].includes(modeAttr) ? modeAttr : 'static';
      const motionAttr = this.container.getAttribute('tlg-fluted-glass-motion');
      this.motionFactor = -50 * parseFloat(motionAttr) || -50;

      this.container.appendChild(this.renderer.domElement);

      var frustumSize = 1;
      this.camera = new THREE.OrthographicCamera(
        frustumSize / -2,
        frustumSize / 2,
        frustumSize / 2,
        frustumSize / -2,
        -1000,
        1000
      );
      this.camera.position.set(0, 0, 2);

      this.isPlaying = true;
      // pause while off screen
      new IntersectionObserver((entries) => {
        this.isPlaying = entries[0].isIntersecting;
        if (this.isPlaying) this.render();
      }).observe(this.container);
      this.addObjects();
      this.resize();
      this.render();
      this.setupResize();

      if (this.mode === 'mouse') {
        this.mouseEvents();
      }
      if (this.mode === 'scroll') {
        this.setupScroll();
      }
    }

    mouseEvents() {
      this.container.addEventListener('mousemove', (event) => {
        this.onMouseMove(event);
      });
    }

    setupScroll() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
      const rect = this.container.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      // Check if the element is in the viewport
      const isInViewport = elemTop < window.innerHeight && elemBottom >= 0;

      if (isInViewport) {
        const totalHeight = window.innerHeight + this.container.offsetHeight;
        const scrolled = window.innerHeight - elemTop;
        const progress = scrolled / totalHeight;
        const maxMovement = 0.2; // Full rotation
        if (this.material) {
          this.material.uniforms.uMotionValue.value = progress * maxMovement * this.motionFactor;
          this.render();
        }
      }
    }

    onMouseMove(event) {
      this.mouse.x = event.clientX / window.innerWidth;
      this.mouse.y = 1.0 - event.clientY / window.innerHeight;
      if (this.material) {
        this.material.uniforms.uMotionValue.value = 0.5 + this.mouse.x * this.motionFactor * 0.1;
        this.render();
      }
    }

    setupResize() {
      window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height;

      if (this.material) {
        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
      }
      this.camera.updateProjectionMatrix();
      this.render();
    }

    addObjects() {
      // Get all child image textures
      const imageElements = this.container.querySelectorAll("[tlg-fluted-glass-image]");
      const randomImageElement = imageElements[Math.floor(Math.random() * imageElements.length)];

      // Set rotation angle
      const rotationAttribute = this.container.getAttribute("tlg-fluted-glass-rotation");
      this.rotationAngle = parseFloat(rotationAttribute, 10) || 0; // Default to 0

      // Set number of segments
      const segmentsAttribute = this.container.getAttribute("tlg-fluted-glass-segments");
      this.segments = parseInt(segmentsAttribute, 10) || 80; // Default to 80

      // Get overlay opacity value from attribute
      const overlaysAttr = this.container.getAttribute("tlg-fluted-glass-overlay");
      this.overlayOpacity = Math.max(0, Math.min(100, parseFloat(overlaysAttr, 10) || 0)); // Clamp between 0 and 100

      // Create a new Image object to load the texture
      const image = new Image();
      image.onload = () => {
        // Calculate the aspect ratio automatically
        this.imageAspect = image.naturalWidth / image.naturalHeight;
        // Once the image is loaded and the aspect ratio is calculated, set up the material and geometry
        this.setupMaterialAndGeometry(image.src);
      };
      // Set the image source to start loading
      image.src = __odePick(randomImageElement, Math.max(this.container.offsetWidth, this.container.offsetHeight));
    }


    setupMaterialAndGeometry(imageSrc) {
      const rendererElement = this.renderer.domElement;
      // Set styles for generated canvas
      rendererElement.style.position = 'absolute';
      rendererElement.style.top = '0';
      rendererElement.style.left = '0';

      // Append the renderer element to the container
      this.container.appendChild(rendererElement);

      rendererElement.style.opacity = '0';
      rendererElement.style.transition = 'opacity .6s ease';
      let texture = new THREE.TextureLoader().load(imageSrc, () => { this.render(); requestAnimationFrame(() => requestAnimationFrame(() => { rendererElement.style.opacity = '1'; })); });
      texture.minFilter = THREE.LinearFilter;

      this.mouse = new THREE.Vector2(0.5, 0.5);

      this.material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable"
        },
        side: THREE.DoubleSide,
        uniforms: {
          resolution: {
            value: new THREE.Vector4()
          },
          uTexture: {
            value: texture
          },
          uMotionValue: {
            value: 0.5
          },
          uRotation: {
            value: this.rotationAngle
          },
          uSegments: {
            value: this.segments
          },
          uOverlayColor: {
            value: new THREE.Vector3(0.0, 0.0, 0.0)
          },
          uOverlayColorWhite: {
            value: new THREE.Vector3(1.0, 1.0, 1.0)
          },
          uImageAspect: {
            value: this.imageAspect
          },
          uOverlayOpacity: {
            value: this.overlayOpacity
          }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
      });

      this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);

      this.resize();
      this.handleScroll();
    }

    // Ode change (performance): draw only when something changes (scroll, mouse, resize, texture loaded)
    // and only while the canvas is on screen, instead of redrawing every frame forever.
    render() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = 0;
        if (this.isPlaying) this.renderer.render(this.scene, this.camera);
      });
    }
  }

  // Create each canvas
  document.querySelectorAll("[tlg-fluted-glass-canvas]").forEach((element) => {
    if (element.querySelector("[tlg-fluted-glass-image]")) {
      new Sketch({
        dom: element
      });
    } else {
      console.error("No [tlg-fluted-glass-image] child found within [tlg-fluted-glass-canvas] element.");
    }
  });
});
