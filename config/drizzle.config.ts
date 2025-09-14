import type { Config } from 'drizzle-kit';

export default {
  schema: './src/shared/schema',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/portfolio_db',
  },
} satisfies Config;
