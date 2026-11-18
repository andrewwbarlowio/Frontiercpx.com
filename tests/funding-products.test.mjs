import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {productMenu,sectorMenu} from '../scripts/funding-products.mjs';
const products=JSON.parse(readFileSync(new URL('../content/funding-products.json',import.meta.url)));
const read=route=>readFileSync(new URL('../dist'+(route==='/'?'/index.html':route+'/index.html'),import.meta.url),'utf8');
const dom=route=>new JSDOM(read(route),{url:'https://frontiercpx.com'+route});
test('funding navigation is one level, ordered, and sectors are separate',()=>{
 const d=dom('/solutions').window.document,menu=d.querySelector('#mobile-menu');
 const funding=[...menu.querySelectorAll(':scope > details')].find(x=>x.querySelector('summary').textContent==='Funding Solutions');
 assert.equal(funding.querySelectorAll('details').length,0);
 assert.deepEqual([...funding.querySelectorAll('.subnav > a')].slice(0,10).map(x=>[x.textContent,x.getAttribute('href')]),productMenu.map(([h,s])=>[h,'/solutions/'+s]));
 assert(!menu.textContent.includes('Funding and sectors'));
 const sectors=[...menu.querySelectorAll(':scope > details')].find(x=>x.querySelector('summary').textContent==='Sectors');
 assert.deepEqual([...sectors.querySelectorAll('.subnav > a')].slice(0,5).map(x=>x.getAttribute('href')),sectorMenu.map(x=>x[1]));
 const main=d.querySelector('main #products');assert.deepEqual([...main.querySelectorAll('.product-card')].map(x=>x.getAttribute('href')),productMenu.map(x=>'/solutions/'+x[1]));
});
test('every new product has distinct copy, related routes, metadata and a valid form source',()=>{
 const allowed=JSON.parse(readFileSync(new URL('../lib/generated-form-routes.json',import.meta.url)));
 assert.equal(new Set(products.map(x=>x.headline)).size,products.length);
 for(const p of products){const d=dom(p.route).window.document;assert.equal(d.querySelector('h1').textContent,p.headline);assert.equal(d.querySelector('meta[name=description]').content,p.summary);assert(allowed.includes(p.route));assert.equal(d.querySelectorAll('.enquiry-form').length,1);assert(d.querySelector('#commitments'));assert(d.querySelectorAll('#questions details').length>=4);assert(p.prepare.length>=3);assert(p.related.length>=3);}
 assert(read('/solutions/hire-purchase').includes('conditional sale'));
 assert(read('/solutions/equipment-leasing').includes('off balance sheet'));
 assert(read('/solutions/business-loans').includes('repayable on demand'));
});
test('Funding Guide returns relevant products and valid preparation destinations',()=>{
 const w=dom('/funding-guide').window,d=w.document,g=d.querySelector('.funding-guide');
 const goals=JSON.parse(g.dataset.guideGoals);
 assert(goals.find(x=>x.id==='cash-flow').routes.some(x=>x.url==='/solutions/invoice-finance'));
 assert(goals.find(x=>x.id==='equipment').routes.some(x=>x.url==='/solutions/asset-finance'));
 for(const goal of goals)for(const r of goal.routes){const [path,anchor]=r.brief.split('#');const page=dom(path).window.document;if(anchor)assert(page.getElementById(anchor));}
});

test('primary navigation prioritises customer routes and company information stays in the footer',()=>{
 const d=dom('/solutions').window.document;
 for(const selector of ['.desktop-nav','#mobile-menu']){
  const nav=d.querySelector(selector);
  assert.deepEqual([...nav.querySelectorAll(':scope > details > summary')].map(x=>x.textContent),['Funding Solutions','Advisory Services','Sectors']);
  assert(!nav.querySelector('a[href="/about-us"]'));assert(!nav.querySelector('a[href="/global-presence"]'));
  assert(!nav.textContent.includes('All Funding Solutions'));assert(!nav.textContent.includes('All Sectors'));
 }
 for(const route of ['/about-us','/global-presence','/solutions','/sectors'])assert(d.querySelector('footer a[href="'+route+'"]'));
});

test('all funding detail pages explain a decision and lead to a product-context enquiry',()=>{
 const editorial=JSON.parse(readFileSync(new URL('../content/funding-editorial.json',import.meta.url)));
 const all=[...products,...editorial];assert.equal(all.length,20);
 assert.equal(new Set(all.map(x=>x.route)).size,20);
 for(const x of all){
  const d=dom(x.route).window.document;
  assert.equal(d.querySelectorAll('h1').length,1);
  assert(d.querySelector('#fit').textContent.includes(x.definition));
  assert.equal(d.querySelectorAll('.product-comparison tbody tr').length,x.comparison.rows.length);
  assert(d.querySelector('#comparison a[href="#enquiry"]'));
  assert(d.querySelector('.hero a[href="#enquiry"]').textContent.includes(x.primaryCta));
  assert(d.querySelector('#enquiry h2').textContent.includes(x.enquiryHeading));
  assert(!d.querySelector('main').textContent.includes('undefined'));
 }
 const trade=dom('/solutions/trade-import-finance').window.document.querySelector('main').textContent;
 assert(!/letters of credit|Device-as-a-Service|software payment agreements/i.test(trade));
});

test('funding index uses product-specific summaries and comparison routes match their subject',()=>{
 const d=dom('/solutions').window.document;
 for(const [route,subject] of [['property-finance',/commercial premises|property development/i],['growth-and-ownership-capital',/equity investment|ownership/i]]){
  const card=d.querySelector('#products a[href="/solutions/'+route+'"]');
  assert(card);assert.match(card.querySelector('p').textContent,subject);
  assert.doesNotMatch(card.textContent,/Discuss the funding behind your plans|Explore the requirement, structure and next steps/);
 }
 const cards=[...dom('/funding-options').window.document.querySelectorAll('.comparison-card')];
 const equipment=cards.find(x=>x.querySelector('h3').textContent==='Equipment or asset finance');
 assert.equal(equipment.querySelector('a').getAttribute('href'),'/solutions/asset-finance');
 const working=cards.find(x=>x.querySelector('h3').textContent==='Working-capital funding');
 assert.equal(working.querySelector('a').getAttribute('href'),'/solutions/invoice-finance');
});

test('unavailable account access is explained before requesting credentials',()=>{
 for(const route of ['/client-login','/forgot-password']){
  const d=dom(route).window.document;
  assert.match(d.querySelector('main').textContent,/not currently available/);
  assert.equal(d.querySelectorAll('input[type="password"],.auth-form').length,0);
  assert(d.querySelector('main a[href="mailto:enquiries@frontiercpx.com"]'));
 }
});
