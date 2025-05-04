import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('Auth middleware - Headers:', req.headers);
    const authHeader = req.headers.authorization;
    console.log('Auth header:', authHeader);
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('No valid auth header found');
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access'
      });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token);
    
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      throw new Error("JWT_SECRET is not defined");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
      console.log('Decoded token:', decoded);
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}; 