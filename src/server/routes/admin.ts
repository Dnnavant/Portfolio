// admin.ts (beginner-friendly)
// Defines admin-only routes under /api/admin
import { Router } from 'express'
import { handleAdminContacts } from '../controllers/admin'
import { requireAuth } from '../middleware/auth'

const router = Router()

// GET /api/admin/contacts -> list all contact form submissions
// We protect this route with requireAuth (needs a valid token)
router.get('/contacts', requireAuth, handleAdminContacts)

export default router
