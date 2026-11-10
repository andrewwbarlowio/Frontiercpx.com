// Local rendering fixture, removed by the next build; never part of deployed output.
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),services=JSON.parse(fs.readFileSync(path.join(root,'content/advisory-services.json'))),dir=path.join(root,'dist/qa');fs.mkdirSync(dir,{recursive:true});
const pages=[{slug:'overview',route:'/services'},...services];
for(const width of [320,390,768,1440]){fs.writeFileSync(path.join(dir,'services-'+width+'.html'),`<!doctype html><title>Services responsive ${width}</title><link rel="stylesheet" href="/qa/qa.css">`+pages.map(x=>`<iframe title="${x.slug} at ${width}" width="${width}" height="960" src="${x.route}/"></iframe>`).join(''));}
fs.writeFileSync(path.join(dir,'qa.css'),'body{margin:0;background:#eee}iframe{display:block;border:0;margin:0}');
