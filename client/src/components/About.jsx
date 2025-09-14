// client/src/components/About.jsx
// This section briefly explains who you are.
// We keep it simple and readable.

import React from 'react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80"
              alt="Profile"
            />
          </div>
          <div className="about-text card">
            <h3>Hello! I'm Donnie</h3>
            <p>
              I'm a beginner web developer focused on building clean, responsive websites.
              I enjoy turning ideas into simple, friendly user interfaces.
              I learn by doing, and I write code in a clear way so I (and others) can understand it later.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

