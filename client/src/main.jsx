// Entry point for the React application
// - Imports Tailwind styles
// - Renders the App component into the #root element in index.html

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootEl = document.getElementById('root')
createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

