// Hero.jsx
// Large landing section with background image, overlay, heading, subheading, and CTA button.
// It mirrors the original design using Tailwind utility classes.

import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Dark overlay for contrast over the background image */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background image */}
      <div className="absolute inset-0 -z-0">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80"
          alt="Coding background"
        />
      </div>

      {/* Center content */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <h1 className="text-white font-display font-bold leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
          John Doe
        </h1>
        <h2 className="text-white text-base md:text-lg lg:text-xl font-normal mb-8">
          Front-End Developer crafting beautiful & responsive web experiences
        </h2>
        <a href="#projects" className="inline-block font-semibold bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-transform hover:-translate-y-0.5 shadow">
          View My Work
        </a>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 inset-x-0 z-20 text-center text-white">
        <a href="#about" className="inline-block">
          <span className="block mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down animate-bounce" />
        </a>
      </div>
    </section>
  )
}

