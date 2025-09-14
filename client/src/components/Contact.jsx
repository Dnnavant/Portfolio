// client/src/components/Contact.jsx
// A basic contact area. For now it only collects values and shows a success message.
// Later, you can connect this to an email service or backend.

import React, { useState } from 'react'

export default function Contact() {
  // Basic controlled inputs store their values in React state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    alert('Thanks for reaching out! I will get back to you soon.')
    // Clear the form so it feels responsive
    setName('')
    setEmail('')
    setMessage('')
    // NOTE: Later you can send these values to a backend or use EmailJS.
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          {/* Left side: quick info + socials */}
          <div>
            <p className="muted">
              I’m available for small projects and collaborations. If you like what you see, let’s talk!
            </p>

            {/* Social links: we include GitHub + LinkedIn now. Others can be added later. */}
            <div className="socials">
              <a href="#" className="social" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/**
               * To add more later, duplicate one of the anchors and change the icon & href.
               * Examples:
               * <a href="#" className="social" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
               * <a href="#" className="social" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
               */}
            </div>

            {/* Download Resume button. Replace the href with your actual PDF later. */}
            <div className="resume-box">
              <a href="#" className="btn btn-secondary" download>
                Download Resume
              </a>
              {/* TODO: Replace href="#" with something like "/assets/resume.pdf" when you add the file. */}
            </div>
          </div>

          {/* Right side: the simple form */}
          <form onSubmit={onSubmit} className="card form">
            <label className="label">Name</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />

            <label className="label">Email</label>
            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="label">Message</label>
            <textarea rows="6" className="input" value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

