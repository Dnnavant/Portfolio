// client/src/components/Contact.jsx
// A basic contact area. For now it only collects values and shows a success message.
// Later, you can connect this to an email service or backend.

import React, { useState } from 'react'

export default function Contact() {
  // Basic controlled inputs store their values in React state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // If someone wants a resume, they can tick this box. You will approve and send a link later.
  const [requestResume, setRequestResume] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    try {
      // Send the form data to our single server on port 3001.
      // The server forwards it to your email using SMTP (see server/index.js for details).
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, requestResume })
      })
      const data = await res.json()
      if (data.ok) {
        if (requestResume) {
          alert("Thanks! I'll review your request and share a resume link after approval.")
        } else {
          alert('Thanks for reaching out! I will get back to you soon.')
        }
        setName('')
        setEmail('')
        setMessage('')
        setRequestResume(false)
      } else {
        alert(data.error || 'There was an issue sending your message.')
      }
    } catch (err) {
      console.error('Contact send failed:', err)
      alert('There was a network problem. Please try again later.')
    }
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

            {/*
              Resume policy:
              We do NOT show a download button here. Instead, the user can
              request a resume in the form (checkbox). You will approve and
              send a download link later.
            */}
          </div>

          {/* Right side: the simple form */}
          <form onSubmit={onSubmit} className="card form">
            <label className="label">Name</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />

            <label className="label">Email</label>
            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="label">Message</label>
            <textarea rows="6" className="input" value={message} onChange={(e) => setMessage(e.target.value)} required />

            {/* Checkbox to request a resume. This just sets a flag so you know the person asked for it. */}
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" checked={requestResume} onChange={(e) => setRequestResume(e.target.checked)} />
              Request resume (I will share a download link after approval)
            </label>

            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
