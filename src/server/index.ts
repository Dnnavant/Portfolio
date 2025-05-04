import express from 'express';
import cors from 'cors';
import { registerRoutes } from './routes';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    // Register routes
    registerRoutes(app);

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Frontend: http://localhost:${PORT}`);
      console.log(`API endpoints:`);
      console.log(`- Contact form: http://localhost:${PORT}/api/contact`);
      console.log(`- Admin contacts: http://localhost:${PORT}/api/admin/contacts (requires authentication)`);
    });

    // Handle server errors
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please try a different port or kill the process using this port.`);
      } else {
        console.error('Server error:', error);
      }
      process.exit(1);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer(); 