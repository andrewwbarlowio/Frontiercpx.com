import pg from 'pg';
import { attachDatabasePool } from '@vercel/functions';
let pool;
export function database() {
 if (!process.env.DATABASE_URL) throw new Error('database_not_configured');
 if (!pool) {
  pool=new pg.Pool({connectionString:process.env.DATABASE_URL,max:3,connectionTimeoutMillis:8000,idleTimeoutMillis:10000,statement_timeout:12000});
  pool.on('error',()=>console.error('contact_database_pool_error'));
  attachDatabasePool(pool);
 }
 return pool;
}
export async function transaction(pool,fn) {
 const client=await pool.connect();
 try { await client.query('BEGIN'); const result=await fn(client); await client.query('COMMIT'); return result; }
 catch(error) { await client.query('ROLLBACK').catch(()=>{}); throw error; }
 finally { client.release(); }
}
