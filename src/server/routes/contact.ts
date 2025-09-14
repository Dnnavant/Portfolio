// contact.ts (beginner-friendly)
// Defines routes under /api/contact
import { Router } from 'express'
import { handleContact } from '../controllers/contact'

const router = Router()

// POST /api/contact -> save a new contact message
router.post('/', handleContact)

export default router
