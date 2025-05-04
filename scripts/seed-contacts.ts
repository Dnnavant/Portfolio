import { db } from '../src/server/config/database';
import { contacts } from '../src/shared/schema/contact';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const testContacts = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hi, I\'m interested in working with you on a web development project.',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Love your portfolio! Would you be interested in a freelance opportunity?',
  },
  {
    name: 'Mike Johnson',
    email: 'mike@example.com',
    message: 'Great work on your projects. Let\'s connect and discuss potential collaboration.',
  },
  {
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    message: 'I have a startup idea and would love to get your input on the technical aspects.',
  },
  {
    name: 'David Brown',
    email: 'david@example.com',
    message: 'Impressive portfolio! Would you be available for a quick chat about my company\'s needs?',
  }
];

async function seedContacts() {
  try {
    // Insert test contacts
    const result = await db.insert(contacts).values(testContacts).returning();
    
    console.log('Test contacts created successfully:', result);
  } catch (error) {
    console.error('Error creating test contacts:', error);
  } finally {
    process.exit();
  }
}

seedContacts(); 