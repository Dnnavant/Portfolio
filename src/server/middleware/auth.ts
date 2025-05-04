import { Request, Response, NextFunction, RequestHandler } from 'express';

export const requireAuth: RequestHandler = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized access'
    });
    return;
  }
  
  next();
}; 