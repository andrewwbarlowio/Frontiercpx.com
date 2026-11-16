import pg from 'pg';
const pool=new pg.Pool({connectionString:process.env.DATABASE_URL});
try {
 const {rows}=await pool.query(`SELECT e.environment,count(*)::int AS deliveries,count(*) FILTER (WHERE d.status IN ('pending','retry','processing'))::int AS waiting,count(*) FILTER (WHERE d.status='failed' OR d.delivery_status IN ('bounced','complained','failed'))::int AS failed,count(*) FILTER (WHERE d.delivery_status='delivered')::int AS delivered,min(d.created_at) FILTER (WHERE d.status IN ('pending','retry','processing')) AS oldest_waiting FROM frontier_contact.notification_deliveries d JOIN frontier_contact.enquiries e ON e.id=d.enquiry_id GROUP BY e.environment`);
 console.log(JSON.stringify(rows,null,2));
}finally{await pool.end();}
