// Auth controller (beginner-friendly)
// This handles POST /api/auth/login to log a user in and return a token.
import { Request, Response } from 'express'
import { db } from '../config/database'
import { users } from '../../shared/schema/user';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
});

export const handleLogin = async (req: Request, res: Response) => {
  try {
    // 1) Validate request data (we expect username and password)
    const result = loginSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ success: false, message: 'Invalid credentials', errors: result.error.errors })
    }

    // 2) Look up the user by username
    const user = await db.query.users.findFirst({ where: eq(users.username, result.data.username) })

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    // 3) Check the password using bcrypt
    const validPassword = await bcrypt.compare(result.data.password, user.password)
    if (!validPassword) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    // 4) Create a signed JSON Web Token (JWT) the client can store
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key-here',
      { expiresIn: '24h' }
    )

    // 5) Return the token in the response
    return res.json({ success: true, token })
  } catch (error) {
    console.error('Error during login:', error)
    return res.status(500).json({ success: false, message: 'An error occurred during login' })
  }
}
