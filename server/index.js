// server/index.js
// A single Express server that serves the React app on port 3001.
// In development, we plug Vite in as middleware so you do NOT need a separate dev server.
// In production (or if Vite isn't present), we serve the static build from client/dist.

import express from 'express'
import path from 'node:path'
import fs from 'node:fs'

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

      // Let Express use Vite's middlewares (serves assets + does hot reload)
      app.use(viteServer.middlewares)

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

