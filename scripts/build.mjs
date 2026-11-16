import fs from 'node:fs';import path from 'node:path';import {renderSite} from './customer-site.mjs';
const root=path.resolve(import.meta.dirname,'..'),out=path.join(root,'dist');
// Publish the current customer experience, not the archived reference templates or demo records.
fs.mkdirSync(out,{recursive:true});for(const name of fs.readdirSync(out))fs.rmSync(path.join(out,name),{recursive:true,force:true});fs.mkdirSync(path.join(out,'assets'),{recursive:true});
for(const name of ['brand','images','fonts','homepage-pilot.css','editorial-system.css','customer-journey.css','customer-journey.js','decision-support.css','decision-support.js'])fs.cpSync(path.join(root,'assets',name),path.join(out,'assets',name),{recursive:true});
await renderSite(root,out);
const inventory=JSON.parse(fs.readFileSync(path.join(out,'route-inventory.json'),'utf8'));
const formRoutes=inventory.filter(r=>fs.readFileSync(path.join(out,r.file),'utf8').includes('class="enquiry-form"')).map(r=>r.route).sort();
fs.writeFileSync(path.join(root,'lib/generated-form-routes.json'),JSON.stringify(formRoutes,null,2)+'\n');
await import('./check.mjs');
