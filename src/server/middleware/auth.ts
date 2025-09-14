// Simple auth middleware (beginner-friendly)
// Looks for an Authorization header like: "Bearer <token>"
// If the token is valid, we allow the request to continue.
import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1) Read the Authorization header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Unauthorized access' })
    }

    // 2) Extract the token after "Bearer "
    const token = authHeader.split(' ')[1]

    // 3) Verify the token with our secret
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
      // 4) Attach user info to the request and continue
      req.user = decoded
      next()
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Invalid token' })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
