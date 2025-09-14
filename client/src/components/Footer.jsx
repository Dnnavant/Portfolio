// client/src/components/Footer.jsx
// A small footer with copyright and a back-to-top button.

import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>© {new Date().getFullYear()} DA Development. All rights reserved.</p>
        <a className="to-top" href="#home" aria-label="Back to top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  )
}

