// environment.ts (beginner-friendly)
// Reads values from .env and checks they exist.
// This helps catch mistakes early (like forgetting JWT_SECRET).
import { z } from 'zod'
import dotenv from 'dotenv'

// Load variables from .env into process.env
dotenv.config()

// Describe what we expect to find
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
})

// Validate and export
const env = envSchema.parse(process.env)
export default env
