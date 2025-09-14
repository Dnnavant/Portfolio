// App.jsx (beginner-friendly)
// This file puts all the page sections together:
// 1) Navbar at the top
// 2) Hero (landing section)
// 3) About, Projects, Contact
// 4) Footer at the bottom

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
