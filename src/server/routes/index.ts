// Route registration (beginner-friendly)
// This file connects URL paths to the router modules.
import { Express } from 'express'
import express from 'express'
import contactRoutes from './contact'
import adminRoutes from './admin'
import authRoutes from './auth'
import path from 'path'

export function registerRoutes(app: Express) {
  // 1) Public API endpoints that the client (React app) can call
  app.use('/api/contact', contactRoutes)
  app.use('/api/admin', adminRoutes)
  app.use('/api/auth', authRoutes)

  // 2) Optional: serve a private admin dashboard file at a special URL
  // Note: Our React app is served by Vite (on port 5173 during dev),
  // so we do NOT serve a public folder here anymore.
  app.use(
    '/private',
    express.static(path.join(__dirname, '../private'), {
      setHeaders: (res) => {
        // Tell search engines not to index these files
        res.set('X-Robots-Tag', 'noindex, nofollow')
        // Do not cache private files
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
      },
    })
  )

  // 3) Special route to open the admin dashboard HTML file
  const router = express.Router()
  router.get('/admin-8a91b3f7', (req, res) => {
    const dashboardPath = path.resolve(__dirname, '..', 'private', 'dashboard.html')
    res.sendFile(dashboardPath)
  })
  app.use('/', router)
}
