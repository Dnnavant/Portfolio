// server/index.js
// A single Express server that serves the React app on port 3001.
// In development, we plug Vite in as middleware so you do NOT need a separate dev server.
// In production (or if Vite isn't present), we serve the static build from client/dist.

// Load environment variables from a .env file (beginner friendly)
// You can create a file named ".env" in the project root and add SMTP settings there.
// Example:
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=587
//   SMTP_USER=your@gmail.com
//   SMTP_PASS=your_app_password
//   TO_EMAIL=Dnnavant@gmail.com
import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

// We wrap startup logic in an async function so we can use 'await' when starting Vite.
async function start() {
  let usedVite = false
  try {
    // Only try to use Vite middleware when not in production
    if (process.env.NODE_ENV !== 'production') {
      // Dynamically import Vite so production doesn't require it
      const vite = await import('vite')
      // The React client lives in the 'client' folder
      const clientRoot = path.resolve(process.cwd(), 'client')

      // Create a Vite dev server in middleware mode
      const viteServer = await vite.createServer({
        root: clientRoot,
        server: { middlewareMode: true },
        appType: 'spa'
      })

      // Parse JSON bodies BEFORE routes (so we can read req.body for /contact)
      app.use(express.json())

      // Let Express use Vite's middlewares (serves assets + does hot reload)
      app.use(viteServer.middlewares)

      // Minimal email endpoint. The client will POST here when the form is submitted.
      // It forwards messages to your email using SMTP settings from .env
      app.post('/contact', async (req, res) => {
        try {
          const { name, email, message, requestResume } = req.body || {}

          // Very simple validation for beginners
          if (!name || !email || !message) {
            return res.status(400).json({ ok: false, error: 'Please fill in name, email, and message.' })
          }

          // Read SMTP settings from environment variables
          const host = process.env.SMTP_HOST || 'smtp.gmail.com'
          const port = Number(process.env.SMTP_PORT || 587)
          const user = process.env.SMTP_USER
          const pass = process.env.SMTP_PASS
          const to = process.env.TO_EMAIL || 'Dnnavant@gmail.com'

          // If SMTP credentials are missing, we log and still return success (so the form feels responsive)
          if (!user || !pass) {
            console.warn('[Email not sent] Missing SMTP_USER/SMTP_PASS. Message details:', { name, email, message, requestResume })
            return res.json({ ok: true, sent: false, note: 'Email service not configured. Message logged on server.' })
          }

          // Create the transporter (this connects to your mail provider)
          const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })

          // Build the email content
          const subject = requestResume
            ? `Portfolio Contact (Resume Requested) — ${name}`
            : `Portfolio Contact — ${name}`

          const text = `From: ${name} <${email}>
Requested Resume: ${requestResume ? 'Yes' : 'No'}

Message:
${message}
`

          // Send the email
          await transporter.sendMail({ from: user, to, subject, text })
          return res.json({ ok: true, sent: true })
        } catch (err) {
          console.error('Failed to send email:', err)
          return res.status(500).json({ ok: false, error: 'Failed to send email.' })
        }
      })

      // All other routes return the transformed index.html (so React Router would work too)
      app.get('*', async (req, res, next) => {
        try {
          const indexHtml = fs.readFileSync(path.join(clientRoot, 'index.html'), 'utf-8')
          const transformed = await viteServer.transformIndexHtml(req.originalUrl, indexHtml)
          res.status(200).setHeader('Content-Type', 'text/html').end(transformed)
        } catch (err) {
          next(err)
        }
      })

      usedVite = true
    }
  } catch (err) {
    // If Vite is not installed/available, we silently fall back to static build
    usedVite = false
  }

  // Production/static fallback: serve built files from client/dist
  if (!usedVite) {
    // Parse JSON for /contact in production too
    app.use(express.json())

    // Email endpoint also available in production
    app.post('/contact', async (req, res) => {
      try {
        const { name, email, message, requestResume } = req.body || {}
        if (!name || !email || !message) {
          return res.status(400).json({ ok: false, error: 'Please fill in name, email, and message.' })
        }

        const host = process.env.SMTP_HOST || 'smtp.gmail.com'
        const port = Number(process.env.SMTP_PORT || 587)
        const user = process.env.SMTP_USER
        const pass = process.env.SMTP_PASS
        const to = process.env.TO_EMAIL || 'Dnnavant@gmail.com'

        if (!user || !pass) {
          console.warn('[Email not sent] Missing SMTP_USER/SMTP_PASS. Message details:', { name, email, message, requestResume })
          return res.json({ ok: true, sent: false, note: 'Email service not configured. Message logged on server.' })
        }

        const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } })
        const subject = requestResume
          ? `Portfolio Contact (Resume Requested) — ${name}`
          : `Portfolio Contact — ${name}`
        const text = `From: ${name} <${email}>
Requested Resume: ${requestResume ? 'Yes' : 'No'}

Message:
${message}
`
        await transporter.sendMail({ from: user, to, subject, text })
        return res.json({ ok: true, sent: true })
      } catch (err) {
        console.error('Failed to send email:', err)
        return res.status(500).json({ ok: false, error: 'Failed to send email.' })
      }
    })

    const distDir = path.resolve(process.cwd(), 'client', 'dist')
    const indexFile = path.join(distDir, 'index.html')
    if (fs.existsSync(indexFile)) {
      app.use(express.static(distDir))
      app.get('*', (_req, res) => res.sendFile(indexFile))
    } else {
      // If no build exists yet, show a helpful message at root
      app.get('/', (_req, res) => {
        res.status(200).send(
          'Client not built yet. Run "npm run dev" (dev with Vite) or "npm run build" to create client/dist.'
        )
      })
    }
  }

  // Start the server
  app.listen(PORT, () => {
    console.log(`Site: http://localhost:${PORT}`)
  })
}

start()
