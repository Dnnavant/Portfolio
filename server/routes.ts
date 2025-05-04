import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { db } from "@db";
import { contacts, contactInsertSchema, resumeDownloads } from "@shared/schema";
import { count } from "drizzle-orm";
import { requireAuth } from "./middleware/auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Middleware for parsing request body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  // Serve static files from the public directory
  app.use(express.static(path.join(import.meta.dirname, "public")));
  
  // API endpoint to handle contact form submissions
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the request data using our schema
      const validatedData = contactInsertSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data',
          errors: validatedData.error.errors
        });
      }
      
      // Insert into database using Drizzle ORM
      const [result] = await db.insert(contacts).values(validatedData.data).returning();
      
      console.log('Contact form submission stored:', result);
      
      res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error processing your request. Please try again later.' 
      });
    }
  });
  
  // API endpoint to track resume downloads
  app.get('/api/resume/download', async (req: Request, res: Response) => {
    try {
      // Track download with Drizzle ORM
      const userIp = req.ip || req.socket.remoteAddress;
      const userAgent = req.headers['user-agent'];
      
      // Insert into database using fields matching the schema
      await db.insert(resumeDownloads).values({
        ipAddress: userIp || null,
        userAgent: userAgent || null
      });
      
      // Path to the resume file
      const resumePath = path.join(import.meta.dirname, 'public', 'assets', 'resume.pdf');
      
      // Send file
      res.download(resumePath, 'John_Doe_Resume.pdf', (err) => {
        if (err) {
          console.error('Error sending resume:', err);
          // If file doesn't exist yet, send a message
          if (!res.headersSent) {
            res.status(404).json({ 
              success: false, 
              message: 'Resume file not found. Please check back later.' 
            });
          }
        }
      });
    } catch (error) {
      console.error('Error processing resume download:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error processing your request. Please try again later.' 
      });
    }
  });

  // Protected admin routes
  app.get('/api/admin/contacts', requireAuth, async (req: Request, res: Response) => {
    try {
      // Get all contacts ordered by createdAt (newest first)
      const contactList = await db.query.contacts.findMany({
        orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
      });
      
      res.json({ 
        success: true, 
        data: contactList
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error fetching contact submissions.' 
      });
    }
  });
  
  // Protected admin route for resume statistics
  app.get('/api/admin/resume-stats', requireAuth, async (req: Request, res: Response) => {
    try {
      // Count total downloads
      const [result] = await db.select({ 
        downloadCount: count() 
      }).from(resumeDownloads);
      
      res.json({ 
        success: true, 
        data: { downloadCount: result.downloadCount } 
      });
    } catch (error) {
      console.error('Error fetching resume statistics:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was an error fetching resume statistics.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
