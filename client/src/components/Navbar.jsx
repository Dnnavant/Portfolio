// client/src/components/Navbar.jsx
// A very simple navigation bar at the top of the page.
// It stays transparent over the hero image, and turns solid when you scroll.
// We also underline the currently active section (HOME, ABOUT, PROJECTS, CONTACT).

import React, { useEffect, useState } from 'react'

export default function Navbar() {
  // "scrolled" starts as false. When the page scrolls down a bit, we make it true.
  const [scrolled, setScrolled] = useState(false)
  // "active" remembers which section is currently in view.
  const [active, setActive] = useState('home')
  // This controls whether the mobile menu is open.
  const [open, setOpen] = useState(false)

  // When the user scrolls, we check how far they scrolled to switch background and active item
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)

      // Find which section is near the top
      const ids = ['home', 'about', 'projects', 'contact']
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) current = id
      }
      setActive(current)
    }

    onScroll() // run once when the component mounts
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // We build the nav links from an array to avoid repeating code
  const links = ['home', 'about', 'projects', 'contact']

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--clear'}`}>
      <nav className="nav">
        {/* Logo: clicking it scrolls to the hero section */}
        <a href="#home" className="logo">DA Development<span className="accent">.</span></a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>
              {id.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile menu button (hamburger) */}
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {/* Mobile dropdown menu (only shows when open is true) */}
      {open && (
        <div className="mobile-menu">
          {links.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="mobile-link">
              {id.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

