// Footer.jsx
// Simple footer with copyright and a back-to-top button.

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-6">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <p>&copy; 2025 DA Development. All Rights Reserved.</p>
        <a href="#home" aria-label="Back to top"
           className="bg-primary hover:bg-primary-hover w-10 h-10 rounded-full grid place-items-center transition">
          <i className="fas fa-arrow-up" />
        </a>
      </div>
    </footer>
  )
}

