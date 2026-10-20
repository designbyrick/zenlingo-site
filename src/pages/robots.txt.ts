import { siteUrl } from '../../site.config.mjs';

export const GET = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', siteUrl).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
