// client/src/App.jsx
// This file assembles the whole page by stacking simple components.
// We keep the code very beginner-friendly: small components, clear names, and many comments.

import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // We return the page layout: Navbar at the top, then each section, then Footer
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

