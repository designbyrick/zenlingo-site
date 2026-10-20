import { siteUrl } from '../../site.config.mjs';

// Public pages only. The 404 page is excluded on purpose.
const paths = ['/', '/privacy/', '/terms/', '/support/'];

export const GET = () => {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, siteUrl).href}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
