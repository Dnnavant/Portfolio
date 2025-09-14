Portfolio Client (React + Vite + Tailwind)

This `client/` app recreates your portfolio’s existing design using React, Vite, and Tailwind CSS with beginner‑friendly code and comments.

Getting Started

- Start API (Express, port 3001):
  - In project root: `npm run dev`
- Install client deps (from `client/`):
  - `cd client && npm install`
- Run client dev server (Vite on 5173):
  - `npm run dev`
- Open: http://localhost:5173

Notes

- The Vite dev server proxies `/api/*` to `http://localhost:3001`, so the contact form works during development.
- To build for production: `npm run build` (output goes to `client/dist`).

