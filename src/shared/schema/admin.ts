import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Database schema for admin users
export const admins = pgTable('admins', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(), // Will store hashed password
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod schema for admin creation
export const adminInsertSchema = createInsertSchema(admins);

// Zod schema for login
export const adminLoginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
}); 