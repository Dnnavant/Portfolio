// Navbar.jsx
// Top navigation bar with logo and section links.
// Features:
// - Changes background when you scroll (like the original)
// - Collapsible mobile menu on small screens

import React, { useEffect, useState } from 'react'

export default function Navbar() {
  // Track whether the page has scrolled past a threshold
  const [scrolled, setScrolled] = useState(false)
  // Track whether the mobile menu is open
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    onScroll() // run once on mount to set initial state
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="navbar" className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-4">
        {/* Logo - click scrolls to the hero section */}
        <div className="text-xl font-bold font-display">
          <a href="#home" className={scrolled ? 'text-foreground' : 'text-white'}>
            DA Development<span className="text-primary">.</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10">
          {['home', 'about', 'projects', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`tracking-wide text-sm font-medium relative ${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary`}
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Menu"
          className={`md:hidden text-2xl ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-bars" />
        </button>
      </nav>

      {/* Mobile dropdown menu (only visible on small screens) */}
      {open && (
        <div className="md:hidden bg-white shadow">
          {['home', 'about', 'projects', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-border hover:text-primary"
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

