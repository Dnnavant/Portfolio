// App.jsx
// This file composes all the page sections together (Navbar, Hero, About, Projects, Contact, Footer)
// so the site reads top-to-bottom like the original static HTML.

import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // The structure mirrors your previous index.html sections
  return (
    <div className="font-sans text-foreground bg-background">
      {/* Fixed navigation bar at the top */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

