// client/src/components/Hero.jsx
// The big landing section with a background image, title, subtitle, and a button.
// We place a dark overlay over the image so white text is readable.

import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* The overlay sits above the image (darkens the image a bit) */}
      <div className="hero-overlay"></div>

      {/* Background image (laptop workspace like your screenshot) */}
      <img
        className="hero-bg"
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2072&auto=format&fit=crop"
        alt="Laptop workspace background"
      />

      {/* Centered text and button */}
      <div className="hero-content">
        {/* Your name */}
        <h1 className="hero-title">Donnie Avant</h1>
        {/* One-line tagline under your name */}
        <h2 className="hero-subtitle">Designing something that fits your vision</h2>
        {/* Button that scrolls down to the projects section */}
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>

      {/* Small scroll hint at the bottom */}
      <div className="scroll-hint">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}

