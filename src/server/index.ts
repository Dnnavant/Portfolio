// Basic Express server (beginner-friendly)
// 1) We import the libraries we need
import express from 'express'
import cors from 'cors'
import { registerRoutes } from './routes'
import dotenv from 'dotenv'

// 2) Load environment variables from .env (like PORT, DATABASE_URL)
dotenv.config()

// 3) Create the Express app and choose a port
const app = express()
const PORT = process.env.PORT || 3001

// 4) Add common middleware
// - cors(): allows the frontend (on a different port) to talk to this API
// - express.json(): lets us read JSON bodies (req.body)
// - express.urlencoded(): lets us read form submissions
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 5) Start function: registers routes and starts listening
async function startServer() {
  try {
    // Register all our API routes under /api/*
    registerRoutes(app)

    // Start the HTTP server
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
      console.log(`API endpoints:`)
      console.log(`- Contact form: http://localhost:${PORT}/api/contact`)
      console.log(`- Admin contacts: http://localhost:${PORT}/api/admin/contacts (requires authentication)`)
    })

    // If something goes wrong when starting the server, show a helpful message
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port or stop the other app.`)
      } else {
        console.error('Server error:', error)
      }
      process.exit(1)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// 6) Run the start function
startServer()
