// Local-only rendered viewports; removed by the next build.
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),solutions=JSON.parse(fs.readFileSync(path.join(root,'content/customer-journeys.json'))).solutions,dir=path.join(root,'dist/qa');fs.mkdirSync(dir,{recursive:true});
for(const width of [320,390,768,1440]){
 fs.writeFileSync(path.join(dir,'funding-'+width+'.html'),`<!doctype html><title>Funding responsive ${width}</title><link rel="stylesheet" href="/qa/qa.css">`+solutions.map(x=>`<iframe title="${x.slug} at ${width}" width="${width}" height="960" src="${x.route}/"></iframe>`).join(''));
 for(const x of solutions)fs.writeFileSync(path.join(dir,x.slug+'-'+width+'.html'),`<!doctype html><title>${x.slug} at ${width}</title><link rel="stylesheet" href="/qa/qa.css"><iframe title="${x.slug} at ${width}" width="${width}" height="960" src="${x.route}/"></iframe>`);
}fs.writeFileSync(path.join(dir,'qa.css'),'body{margin:0;background:#eee}iframe{display:block;border:0;margin:0}');
