// Local-only browser fixtures. Run after build; the next build removes them from dist.
import fs from 'node:fs';import path from 'node:path';
const dir=path.resolve(import.meta.dirname,'../dist/qa');fs.mkdirSync(dir,{recursive:true});
const pages={property:'/solutions/property-finance/',business:'/solutions/business-funding/',model:'/services/financial-modelling/'};
for(const width of [320,390,768,1440]){
 fs.writeFileSync(path.join(dir,width+'.html'),`<!doctype html><title>Responsive QA ${width}</title><link rel="stylesheet" href="/qa/qa.css"><h1>Rendered iframe width: ${width}px</h1>`+Object.entries(pages).map(([name,route])=>`<iframe title="${name} at ${width}" width="${width}" height="1000" src="${route}"></iframe>`).join(''));
 for(const [name,route]of Object.entries(pages))fs.writeFileSync(path.join(dir,name+'-'+width+'.html'),`<!doctype html><title>${name} at ${width}</title><link rel="stylesheet" href="/qa/qa.css"><iframe title="${name} at ${width}" width="${width}" height="1000" src="${route}"></iframe>`);
}fs.writeFileSync(path.join(dir,'qa.css'),'body{margin:0;background:#eee}iframe{display:block;border:0;margin:0}h1{font:18px Arial}');
