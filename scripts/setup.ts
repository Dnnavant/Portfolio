import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function setupWebsite() {
  console.log('🚀 Starting website setup...\n');

  try {
    // 1. Check if .env exists, if not create it
    if (!existsSync('.env')) {
      console.log('📝 Creating .env file...');
      const envContent = `NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio
JWT_SECRET=your-secret-key-here`;
      
      require('fs').writeFileSync('.env', envContent);
      console.log('✅ .env file created\n');
    }

    // 2. Install dependencies if node_modules doesn't exist
    if (!existsSync('node_modules')) {
      console.log('📦 Installing dependencies...');
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependencies installed\n');
    }

    // 3. Run database migrations
    console.log('🔄 Running database migrations...');
    execSync('npm run migrate', { stdio: 'inherit' });
    console.log('✅ Migrations completed\n');

    // 4. Create admin user if it doesn't exist
    console.log('👤 Setting up admin user...');
    execSync('npm run create-admin', { stdio: 'inherit' });
    console.log('✅ Admin user setup completed\n');

    // 5. Seed test contacts if needed
    console.log('📝 Seeding test contacts...');
    execSync('npm run seed-contacts', { stdio: 'inherit' });
    console.log('✅ Test contacts seeded\n');

    // 6. Start the server
    console.log('🌐 Starting the server...\n');
    console.log('📋 Website Information:');
    console.log('----------------------');
    console.log('Frontend: http://localhost:3001');
    console.log('Admin Dashboard: http://localhost:3001/admin-8a91b3f7');
    console.log('Admin Credentials:');
    console.log('- Username: admin');
    console.log('- Password: admin123');
    console.log('\nPress Ctrl+C to stop the server\n');

    // Start the server
    execSync('npm run dev', { stdio: 'inherit' });

  } catch (error) {
    console.error('❌ Error during setup:', error);
    process.exit(1);
  }
}

// Run the setup
setupWebsite(); 
