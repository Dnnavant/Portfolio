import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { db } from '@db';
import { contacts } from '@shared/schema';
import { eq } from 'drizzle-orm';
import express from 'express';
import request from 'supertest';
import { registerRoutes } from './server/routes';

describe('Portfolio Website Tests', () => {
  let app: express.Express;
  let server: any;

  beforeAll(async () => {
    app = express();
    server = await registerRoutes(app);
  });

  afterAll(async () => {
    await server.close();
  });

  // Test 1: Contact Form Submission
  it('should successfully submit contact form', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  // Test 2: Invalid Contact Form Submission
  it('should reject invalid contact form data', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: '', // Invalid: empty name
        email: 'invalid-email',
        message: ''
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });

  // Test 3: Admin Contact List
  it('should retrieve contact submissions', async () => {
    const response = await request(app)
      .get('/api/admin/contacts');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
}); 