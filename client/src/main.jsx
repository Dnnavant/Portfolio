// client/src/main.jsx
// This is the entry point for our React app.
// It selects the <div id="root"> from index.html and renders the <App /> component into it.

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

