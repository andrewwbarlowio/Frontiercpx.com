import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {JSDOM} from 'jsdom';

const root = path.resolve(import.meta.dirname, '..');
const routes = JSON.parse(fs.readFileSync(path.join(root, 'dist/route-inventory.json')));
const images = JSON.parse(fs.readFileSync(path.join(root, 'assets/images/social/manifest.json')));

test('every route has complete share metadata and a real JPEG matching its hero or fallback', () => {
  for (const route of routes) {
    const d = new JSDOM(fs.readFileSync(path.join(root, 'dist', route.file), 'utf8')).window.document;
    const property = key => d.querySelector(`meta[property="${key}"]`)?.content;
    const named = key => d.querySelector(`meta[name="${key}"]`)?.content;
    const source = d.querySelector('main .hero img')?.getAttribute('src') || '/assets/images/home/new-frontier-founder-1536.webp';
    const image = images[source];
    assert(image, route.route);
    assert.equal(property('og:image'), 'https://frontiercpx.com' + image.path, route.route);
    assert.equal(property('og:url'), d.querySelector('link[rel="canonical"]').getAttribute('href'));
    assert.equal(property('og:title'), d.title);
    assert.equal(property('og:description'), named('description'));
    assert.equal(property('og:image:width'), String(image.width));
    assert.equal(property('og:image:height'), String(image.height));
    assert(property('og:image:alt'));
    assert.equal(named('twitter:card'), 'summary_large_image');
    assert.equal(named('twitter:image'), property('og:image'));
    assert.equal(named('twitter:image:alt'), property('og:image:alt'));
    const file = fs.readFileSync(path.join(root, 'dist', image.path));
    assert.equal(file.subarray(0, 3).toString('hex'), 'ffd8ff', route.route);
  }
});
