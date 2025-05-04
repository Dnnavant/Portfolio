import { db } from '@server/db';
import { users } from '@shared/schema/user';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('Database URL:', process.env.DATABASE_URL);

async function createAdminUser() {
  const username = 'admin';
  const password = 'admin123'; // You should change this in production
  
  try {
    // Hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Insert the admin user
    await db.insert(users).values({
      username,
      password: passwordHash
    });
    
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    process.exit(0);
  }
}

createAdminUser(); 