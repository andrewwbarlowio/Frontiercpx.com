// Local-only rendered viewports; next build removes fixtures before publishing.
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),routes=JSON.parse(fs.readFileSync(path.join(root,'dist/route-inventory.json'))).filter(x=>x.status===200&&!x.route.startsWith('/solutions/')&&!x.route.startsWith('/sectors/')&&!x.route.startsWith('/services/'));
const dir=path.join(root,'dist/qa');fs.mkdirSync(dir,{recursive:true});
for(const width of [320,390,768,1440])fs.writeFileSync(path.join(dir,'supporting-'+width+'.html'),`<!doctype html><title>Supporting responsive ${width}</title><link rel="stylesheet" href="/qa/qa.css">`+routes.map(x=>`<iframe title="${x.route} at ${width}" width="${width}" height="960" src="${x.route==='/'?'/':x.route+'/'}"></iframe>`).join(''));
fs.writeFileSync(path.join(dir,'qa.css'),'body{margin:0;background:#eee}iframe{display:block;border:0;margin:0}');
fs.writeFileSync(path.join(dir,'supporting-routes.json'),JSON.stringify(routes.map(x=>x.route)));
console.log(JSON.stringify(routes.map(x=>x.route)));
