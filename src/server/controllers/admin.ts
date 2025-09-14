// Admin controller (beginner-friendly)
// Returns a list of contact form submissions for admins.
import { Request, Response } from 'express'
import { db } from '../config/database'

export const handleAdminContacts = async (req: Request, res: Response) => {
  try {
    // Get all contacts ordered by newest first
    const contactList = await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)],
    })

    return res.json({ success: true, data: contactList })
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return res.status(500).json({
      success: false,
      message: 'There was an error fetching contact submissions.',
    })
  }
}
