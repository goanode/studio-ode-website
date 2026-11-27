# Studio Ode — website

The Ode pole dance studio website, rebuilt in [Astro](https://astro.build) from the original Webflow export.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Local dev server at http://localhost:4321     |
| `npm run build`   | Build the production site into `dist/`        |
| `npm run preview` | Preview the production build locally          |

## Structure

```
src/
  layouts/BaseLayout.astro    page shell: <head>, fonts, nav, footer, scripts
  components/Nav.astro        top banner, desktop + mobile navigation
  components/Footer.astro     footer
  components/WaitlistModal.astro  "Join the waitlist" side panel + form
worker/index.js               Cloudflare Worker: static site + /api/waitlist (→ Brevo)
email/                        confirmation e-mail templates (paste into Brevo)
  pages/index.astro           home  →  /
  pages/concept.astro         concept  →  /concept
  pages/404.astro             not-found page
  styles/                     Webflow + Lumos CSS (bundled and minified by Astro)
public/
  images/  fonts/             site assets
  vendor/                     self-hosted libraries (GSAP, Lenis, Ukiyo, Swiper,
                              SplitType, three.js, Fluted Glass, jQuery, webflow.js)
```

## Notes

- **Animations** still run on `public/vendor/webflow.js` (Webflow's interaction engine) together with GSAP.
  Each page passes its original Webflow page id (`wfPage`) to the layout so webflow.js can find that page's interactions.
- **Hosting**: Cloudflare Workers (static assets), configured in `wrangler.jsonc`. Build command `npm run build`, deploy command `npx wrangler deploy`.
  Staging URL: https://studio-ode-website.goanrobert.workers.dev/
- **Waitlist form** posts to `/api/waitlist` (`worker/index.js`), which adds each sign-up to a [Brevo](https://www.brevo.com) list
  with her first name. A Brevo automation ("contact added to list") sends the confirmation e-mail (templates in `email/`).
  Settings are the `vars` in `wrangler.jsonc` (list ID, first-name attribute, optional "Nouvelle fondatrice" notification);
  the Brevo API key is a secret, `BREVO_API_KEY`, set in Cloudflare (Workers → studio-ode-website → Settings → Variables and secrets).
- **Staging mode**: `public/_headers` and `public/robots.txt` tell search engines not to index the site.
  Remove/relax both on launch day.
- **Fonts**: PP Mori is self-hosted. Instrument Sans and the other Google fonts load from Google.
  *freight-big-pro* comes from the Adobe Fonts kit `xbu1shi`. Add the new domain to that kit's allowed domains in Adobe Fonts,
  or the serif headings will fall back to a default font.
- Set `site` in `astro.config.mjs` to the live domain once it's known (it enables canonical URLs).

