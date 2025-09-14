// database.ts (beginner-friendly)
// Connects to PostgreSQL and gives us a simple "db" object for queries.
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import env from './environment'

// Create a connection pool using the DATABASE_URL from .env
const pool = new Pool({ connectionString: env.DATABASE_URL })

// Create Drizzle ORM instance (this is what we use in controllers)
export const db = drizzle(pool)

// Export the pool too (handy if you need a raw client later)
export { pool }
