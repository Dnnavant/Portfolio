import { Request, Response } from 'express';
import { db } from '../config/database';
import { contacts } from '../../shared/schema/contact';
import { contactInsertSchema } from '../../shared/schema/contact';

export const handleContact = async (req: Request, res: Response) => {
  try {
    // Validate the request data using our schema
    const result = contactInsertSchema.safeParse(req.body);
    
    if (!result.success) {
      console.log('Validation errors:', result.error.errors);
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid form data',
        errors: result.error.errors
      });
    }
    
    // Insert into database using Drizzle ORM
    const [dbResult] = await db.insert(contacts).values(result.data).returning();
    
    console.log('Contact form submission stored:', dbResult);
    
    return res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'There was an error processing your request. Please try again later.' 
    });
  }
}; 