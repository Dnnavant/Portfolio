import { db } from '../src/server/config/database';
import { admins } from '../src/shared/schema/admin';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function createAdmin() {
  const username = 'admin';
  const password = 'admin123'; // You should change this password

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert admin user
    const [admin] = await db.insert(admins).values({
      username,
      password: hashedPassword,
    }).returning();

    console.log('Admin user created successfully:', {
      id: admin.id,
      username: admin.username,
      createdAt: admin.createdAt
    });

    console.log('\nUse these credentials to log in:');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    process.exit();
  }
}

createAdmin(); 