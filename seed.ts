import { db } from "./index";
import * as schema from "@shared/schema";
import { sql } from "drizzle-orm";

async function seed() {
  try {
    console.log("Creating database tables if they don't exist...");
    
    // Create the contacts table if it doesn't exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `);
    
    // Create the resume_downloads table if it doesn't exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS resume_downloads (
        id SERIAL PRIMARY KEY,
        ip TEXT,
        user_agent TEXT,
        referrer TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `);
    
    console.log("Database tables created successfully");
    
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
