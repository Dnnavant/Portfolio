import { Request, Response } from 'express';
import { db } from '../db';
import { users } from '../../shared/schema/user';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string(),
  password: z.string()
});

export const handleLogin = async (req: Request, res: Response) => {
  try {
    console.log('Login attempt - Request body:', req.body);
    
    // Validate request data
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      console.log('Login validation failed:', result.error.errors);
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials',
        errors: result.error.errors
      });
    }

    console.log('Looking for user:', result.data.username);
    // Find user
    const user = await db.query.users.findFirst({
      where: eq(users.username, result.data.username)
    });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    console.log('User found, verifying password');
    // Verify password
    const validPassword = await bcrypt.compare(result.data.password, user.password);
    if (!validPassword) {
      console.log('Invalid password');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    console.log('Password verified, generating token');
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key-here',
      { expiresIn: '24h' }
    );

    console.log('Login successful, sending response');
    return res.json({
      success: true,
      token
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred during login'
    });
  }
}; 