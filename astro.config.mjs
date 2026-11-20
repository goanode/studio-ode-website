// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Set this to the live domain once it's known (used for canonical URLs).
  // site: "https://www.example.com",
  build: {
    // Output /concept.html instead of /concept/index.html, matching the old Webflow URLs.
    format: "file",
    // small page-specific stylesheets go straight into the page (one less file to wait for); the big shared one stays cached
    inlineStylesheets: "auto",
  },
  vite: { build: { assetsInlineLimit: 16384 } },
});
