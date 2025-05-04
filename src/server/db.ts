import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../shared/schema';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'portfolio',
  user: 'DA9',
  ssl: false
});

export const db = drizzle(pool, { schema }); 