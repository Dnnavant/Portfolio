import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as path from 'path';

// Read environment variables
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/portfolio_db';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: DATABASE_URL,
});

const db = drizzle(pool);

// Run migrations
async function main() {
  console.log('Running migrations...');
  
  try {
    await migrate(db, {
      migrationsFolder: path.join(__dirname, '../migrations'),
    });
    
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main(); 