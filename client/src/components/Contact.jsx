// Contact.jsx
// Contact section with quick contact info, social links, and a form.
// The form posts to the Express API at /api/contact via the Vite proxy.

import React, { useState } from 'react'

export default function Contact() {
  // Local state to hold form values (beginner-friendly pattern)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault() // prevent the browser from reloading the page
    setLoading(true)
    try {
      // Send data to our backend API. Vite will proxy /api -> http://localhost:3001
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      const data = await res.json()

      // If success, let the user know and clear the form
      alert('Thank you for your message! I will get back to you soon.')
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } catch (err) {
      console.error('Error submitting form:', err)
      alert('There was an error sending your message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-display font-semibold mb-12 relative pb-4">
          Get In Touch
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-24 h-[3px] bg-primary" />
        </h2>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left: contact info + socials */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Let's Talk</h3>
            <p className="text-[15px] text-foreground/80 mb-6">
              I'm currently available for freelance work. Feel free to reach out if you have a project that needs some creative touch.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary" />
                <a href="mailto:hello@johndoe.com" className="underline underline-offset-2">hello@johndoe.com</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-primary" />
                <a href="tel:+11234567890" className="underline underline-offset-2">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary" />
                <span>Virginia Beach, VA</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: 'fab fa-github', href: '#' },
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
                { icon: 'fab fa-dribbble', href: '#' },
              ].map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="bg-zinc-100 text-zinc-800 w-10 h-10 rounded-full grid place-items-center hover:bg-primary hover:text-white transition">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div className="flex-1">
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Each field is a controlled input tied to state variables */}
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full rounded border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input id="subject" type="text" required value={subject} onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea id="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-primary text-white font-semibold px-4 py-2 rounded hover:bg-primary-hover transition">
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

