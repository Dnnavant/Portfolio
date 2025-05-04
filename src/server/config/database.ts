import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import env from './environment';

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

// Create Drizzle ORM instance
export const db = drizzle(pool);

// Export pool for direct database access if needed
export { pool }; 