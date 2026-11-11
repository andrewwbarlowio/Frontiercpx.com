import fs from 'node:fs';

// Reuse the actual outlined F from the approved identity, never a guessed font.
const logo = fs.readFileSync(new URL('../assets/brand/logo-white.svg', import.meta.url), 'utf8');
const glyph = logo.match(/d="([^"]+)"/)[1].match(/M[^M]+/g)[36].trim();
export const focusFrame = `<span class="focus-frame" aria-hidden="true"><svg class="focus-stamp" viewBox="434 53 99 117" focusable="false"><path fill="currentColor" d="${glyph}"/></svg></span>`;

export function editorialPhoto(src, alt, { eager = false, framed = true } = {}) {
  const responsive = src.endsWith('-1536.webp');
  return `<figure class="editorial-photo${framed ? ' has-focus-frame' : ''}"><img src="${src}"${responsive ? ` srcset="${src.replace('-1536.webp', '-768.webp')} 768w, ${src} 1536w" sizes="(max-width:850px) calc(100vw - 40px), 48vw"` : ''} alt="${alt}" width="1536" height="1024" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>${framed ? focusFrame : ''}</figure>`;
}

export const naturalFundingImages = {
  'credit': ['industry', 'An engineer checks a precision component on a working production floor'],
  'private-equity': ['team', 'Business leaders discuss a plan around a meeting table'],
  'ventures': ['technology', 'A technician works within a data infrastructure facility'],
  'real-estate': ['architecture', 'A contemporary commercial building in an urban business district'],
  'special-situations': ['industry', 'A manufacturing specialist examines a precision-machined component'],
  'life-sciences': ['healthcare', 'Two laboratory researchers examine a sample together'],
  'tech-opportunities': ['technology', 'A technician checks equipment in a data infrastructure facility'],
  'double-impact': ['sustainability', 'A commercial campus with roof-mounted solar panels'],
  'insurance': ['architecture', 'A contemporary commercial building at dusk'],
  'crypto': ['technology', 'A technician checks racks of digital infrastructure equipment']
};

const people = '/assets/images/people/';
const heroScenes = {
  '/about-us': ['owner-conversation', 'A business owner explains her plans while advisers listen'],
  '/our-approach': ['planning-next-steps', 'An adviser and business owner work through their next steps'],
  '/our-expertise': ['testing-assumptions', 'Two people examine the assumptions behind a business plan'],
  '/for-advisers': ['adviser-collaboration', 'An adviser, business owner and specialist discuss a requirement'],
  '/services': ['manufacturing-discussion', 'A manufacturing owner and adviser review a production plan'],
  '/services/capital-strategy': ['planning-next-steps', 'A business owner and adviser work through a plan'],
  '/services/funding-readiness': ['testing-assumptions', 'A business owner and adviser examine supporting information'],
  '/services/financial-modelling': ['testing-assumptions', 'Two people review assumptions and business information'],
  '/services/debt-advisory': ['owner-conversation', 'A business owner discusses plans with advisers'],
  '/services/equity-advisory': ['owner-conversation', 'A business owner explains her plans during a discussion'],
  '/services/transaction-support': ['adviser-collaboration', 'A business owner and advisers coordinate a requirement'],
  '/services/ongoing-advisory': ['planning-next-steps', 'A business owner reviews the next steps with an adviser']
};

export function editorialPage(body, route) {
  body = body.replace(/<section class="section" id="illustration">/g, '<section class="section dark editorial-feature" id="illustration">');
  const scene = heroScenes[route];
  if (!scene) return body;
  // Move an existing contextual photograph into the lead rather than repeat it below.
  body = body.replace(/<figure class="context-photo">[\s\S]*?<\/figure>/g,
    figure => figure.includes(people + scene[0] + '-1536.webp') ? '' : figure);
  body = body.replace(/<section class="section about-context"><div class="container"><\/div><\/section>/, '');
  // Hero copy and all existing anchors remain intact; only the composition changes.
  return body.replace(/<section class="hero([^"]*)"><div class="container">([\s\S]*?)<\/div><\/section>/,
    (_, classes, copy) => `<section class="hero editorial-hero${classes}"><div class="container"><div class="editorial-hero-grid"><div class="editorial-hero-copy">${copy}</div>${editorialPhoto(people + scene[0] + '-1536.webp', scene[1], {eager: true})}</div></div></section>`);
}
