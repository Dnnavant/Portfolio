import { Request, Response } from 'express';
import { db } from '../config/database';
import { admins, adminLoginSchema } from '../../shared/schema/admin';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import env from '../config/environment';

export const handleLogin = async (req: Request, res: Response) => {
  try {
    // Validate request data
    const result = adminLoginSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials',
        errors: result.error.errors
      });
    }

    // Find admin user
    const admin = await db.query.admins.findFirst({
      where: eq(admins.username, result.data.username)
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Verify password
    const validPassword = await bcrypt.compare(result.data.password, admin.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      env.JWT_SECRET,
      { expiresIn: '24h' }
    );

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