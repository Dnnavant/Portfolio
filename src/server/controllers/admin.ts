import { Request, Response } from 'express';
import { db } from '../db';
import { contacts } from '../../shared/schema/contact';

export const handleAdminContacts = async (req: Request, res: Response) => {
  try {
    console.log('Fetching contacts for admin...');
    // Get all contacts ordered by createdAt (newest first)
    const contactList = await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
    });
    
    console.log('Found contacts:', contactList);
    return res.json({ 
      success: true, 
      data: contactList
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was an error fetching contact submissions.' 
    });
  }
}; 