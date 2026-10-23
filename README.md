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

- Audio provider and analytics status in the Privacy Policy.
- App Store link (`appStoreUrl` in `site.config.mjs`); the Home page shows "Coming soon" until it is set.

## Design

Design I tokens from `docs/DESIGN_SYSTEM.md` are defined at the top of `src/styles/global.css`. Fonts are self-hosted through `@fontsource`, so the site makes no third-party font requests. There is no analytics, tracking, cookie banner, form or client-side framework.

## Deployment (GitHub Pages)

This repo is private and its plan does not support Pages. The site is published from the public repo `designbyrick/zenlingo-site` (a copy of `site/` plus `.github/workflows/pages.yml`). After changing `site/` here, copy the files to that repo and push to `main`; its workflow builds and deploys. `public/CNAME` sets the custom domain `zenlingoapp.com`.

DNS (Namecheap): four `A` records for the apex (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for `www` pointing to `designbyrick.github.io`. Keep the existing Zoho MX/SPF records.
