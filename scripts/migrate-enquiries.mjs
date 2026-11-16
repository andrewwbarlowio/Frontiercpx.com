import pg from 'pg';
import { readFileSync, readdirSync } from 'node:fs';
const connectionString=process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if(connectionString && new URL(connectionString).hostname.includes('-pooler.'))throw new Error('Use an unpooled connection for migrations');
if(!connectionString)throw new Error('Set DATABASE_URL_UNPOOLED before migration');
const client=new pg.Client({connectionString,connectionTimeoutMillis:10000});
await client.connect();
try {
 await client.query('BEGIN');
 for(const file of readdirSync(new URL('../migrations/',import.meta.url)).filter(x=>x.endsWith('.sql')).sort()) {
  await client.query(readFileSync(new URL('../migrations/'+file,import.meta.url),'utf8'));
 }
 await client.query('COMMIT');
 console.log('Enquiry schema migration applied.');
}catch(error){await client.query('ROLLBACK');throw error;}finally{await client.end();}
