import fs from 'node:fs';

const images = JSON.parse(fs.readFileSync(new URL('../assets/images/social/manifest.json', import.meta.url), 'utf8'));
const fallback = '/assets/images/home/new-frontier-founder-1536.webp';
const origin = 'https://frontiercpx.com';

// Reuse the actual page hero. Utility pages share the homepage campaign image.
export function socialMetadata({title, description, canonical, body, escape}) {
  const hero = body.match(/<section class="[^"]*\bhero\b[^"]*"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  const img = hero?.match(/<img\b[^>]*>/)?.[0];
  const source = img?.match(/\bsrc="([^"]+)"/)?.[1];
  if (source && !images[source]) throw new Error(`Missing share image for hero: ${source}`);
  const image = images[source || fallback];
  // Existing alt text is already escaped in the rendered body.
  const alt = source ? img.match(/\balt="([^"]*)"/)?.[1] : 'An entrepreneur looking towards an evolving city skyline at sunrise';
  const pageTitle = escape(`${title} | Frontier Capital Partners`);
  const url = origin + (canonical === '/' ? '' : canonical);
  const imageUrl = origin + image.path;
  return `<meta property="og:type" content="website">
<meta property="og:site_name" content="Frontier Capital Partners">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${escape(description)}">
<meta property="og:url" content="${escape(url)}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:image:secure_url" content="${imageUrl}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${image.width}">
<meta property="og:image:height" content="${image.height}">
<meta property="og:image:alt" content="${alt || 'Frontier Capital Partners'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${pageTitle}">
<meta name="twitter:description" content="${escape(description)}">
<meta name="twitter:image" content="${imageUrl}">
<meta name="twitter:image:alt" content="${alt || 'Frontier Capital Partners'}">`;
}
