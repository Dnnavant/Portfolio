import { Express } from 'express';
import express from 'express';
import contactRoutes from './contact';
import adminRoutes from './admin';
import path from 'path';

export function registerRoutes(app: Express) {
  // API routes
  app.use('/api/contact', contactRoutes);
  app.use('/api/admin', adminRoutes);

  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, '../public')));
} 