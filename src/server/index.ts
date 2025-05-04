import express from 'express';
import cors from 'cors';
import { registerRoutes } from './routes';
import env from './config/environment';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  // Register routes
  registerRoutes(app);

  // Start server
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
}); 