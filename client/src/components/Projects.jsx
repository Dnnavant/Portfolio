// Projects.jsx
// A responsive grid of project cards. Each card has an image, title, description,
// and small tech tags. We keep a subtle hover lift animation like the original.

import React from 'react'

const projects = [
  {
    title: 'E-commerce Website',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    links: { live: '#', code: '#' },
  },
  {
    title: 'Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive dashboard with real-time data visualization, user authentication, and customizable widgets.',
    tech: ['Vue.js', 'Firebase', 'D3.js', 'CSS'],
    links: { live: '#', code: '#' },
  },
  {
    title: 'Weather App',
    image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=800&q=80',
    description: 'Clean and intuitive weather application with location-based forecasts, interactive maps, and custom alerts.',
    tech: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
    links: { live: '#', code: '#' },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-display font-semibold mb-12 relative pb-4">
          My Projects
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-24 h-[3px] bg-primary" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="bg-card rounded-lg shadow overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative">
                <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white text-zinc-800 w-10 h-10 rounded-full grid place-items-center shadow">
                    <i className="fas fa-external-link-alt" />
                  </a>
                  <a href={p.links.code} target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white text-zinc-800 w-10 h-10 rounded-full grid place-items-center shadow">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/80 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-800">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

