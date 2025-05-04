-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create resume_downloads table
CREATE TABLE IF NOT EXISTS resume_downloads (
  id SERIAL PRIMARY KEY,
  ip_address TEXT,
  user_agent TEXT,
  downloaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
); 