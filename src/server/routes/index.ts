import { Express } from 'express';
import express from 'express';
import contactRoutes from './contact';
import adminRoutes from './admin';
import authRoutes from './auth';
import path from 'path';

export function registerRoutes(app: Express) {
  // API routes
  app.use('/api/contact', contactRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/auth', authRoutes);

  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, '../public')));
  
  // Serve files from private directory, but only through specific routes
  app.use('/private', express.static(path.join(__dirname, '../private'), {
    setHeaders: (res) => {
      // Prevent directory listing
      res.set('X-Robots-Tag', 'noindex, nofollow');
      // Prevent caching of private files
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    }
  }));

  // Special admin route with unique path
  const router = express.Router();
  router.get('/admin-8a91b3f7', (req, res) => {
    const dashboardPath = path.resolve(__dirname, '..', 'private', 'dashboard.html');
    console.log('Attempting to serve dashboard from:', dashboardPath);
    res.sendFile(dashboardPath);
  });
  app.use('/', router);
} 