# Zenlingo marketing site

Static Astro site (English only). Built to `dist/` and suitable for any static host, such as GitHub Pages (see "Deployment").

## Requirements

- Node.js 22.22 or newer (Astro 7.3.8 requires it). Check with `node -v`.

## Commands

Run these from the `site/` folder:

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that build locally.

## Changing the domain

Change `siteUrl` in `site.config.mjs` and `public/CNAME`; canonical URLs, the sitemap, robots.txt and Open Graph URLs read from `siteUrl`.

## Pending placeholders

- Required postal contact address for the operator (Privacy Policy and Terms).
- Legal text in the Privacy Policy and Terms of Use, marked "draft, pending legal review".
- Audio provider and analytics status in the Privacy Policy.
- App Store link (`appStoreUrl` in `site.config.mjs`); the Home page shows "Coming soon" until it is set.

## Design

Design I tokens from `docs/DESIGN_SYSTEM.md` are defined at the top of `src/styles/global.css`. Fonts are self-hosted through `@fontsource`, so the site makes no third-party font requests. There is no analytics, tracking, cookie banner, form or client-side framework.

## Deployment (GitHub Pages)

`.github/workflows/site-pages.yml` builds `site/` and publishes it on every push to `main` that touches `site/`. `public/CNAME` sets the custom domain `zenlingoapp.com`.

One-time setup (GitHub, not in code):

1. Repo Settings → Pages → Source: GitHub Actions.
2. Custom domain: `zenlingoapp.com`, then enable Enforce HTTPS once the certificate is issued.
3. DNS at the registrar: four `A` records for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for `www` pointing to `designbyrick.github.io`.
