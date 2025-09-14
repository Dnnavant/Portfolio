// auth.ts (beginner-friendly)
// Defines routes under /api/auth
import { Router } from 'express'
import { handleLogin } from '../controllers/auth'

const router = Router()

// POST /api/auth/login -> log in and get a token
router.post('/login', handleLogin)

export default router
