import fs from 'node:fs';import path from 'node:path';import {renderSite} from './customer-site.mjs';
const root=path.resolve(import.meta.dirname,'..'),out=path.join(root,'dist');
// Publish the current customer experience, not the archived reference templates or demo records.
fs.mkdirSync(out,{recursive:true});for(const name of fs.readdirSync(out))fs.rmSync(path.join(out,name),{recursive:true,force:true});fs.mkdirSync(path.join(out,'assets'),{recursive:true});
for(const name of ['brand','images','customer-journey.css','customer-journey.js'])fs.cpSync(path.join(root,'assets',name),path.join(out,'assets',name),{recursive:true});
await renderSite(root,out);await import('./check.mjs');
