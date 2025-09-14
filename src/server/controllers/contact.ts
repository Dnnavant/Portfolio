// Contact controller (beginner-friendly)
// This function runs when the client POSTs a contact form to /api/contact
import { Request, Response } from 'express'
import { db } from '../config/database'
import { contacts, contactInsertSchema } from '../../shared/schema/contact'

export const handleContact = async (req: Request, res: Response) => {
  try {
    // 1) Validate the incoming JSON body (name, email, message)
    const result = contactInsertSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: result.error.errors,
      })
    }

    // 2) Save the message to the database using Drizzle ORM
    await db.insert(contacts).values(result.data).returning()

    // 3) Send a success message back to the client
    return res.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({
      success: false,
      message: 'There was an error processing your request. Please try again later.',
    })
  }
}
