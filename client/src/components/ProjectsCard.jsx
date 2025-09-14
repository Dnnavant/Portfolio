// ProjectsCard.jsx
// Reusable card component for projects (not strictly needed, but shows structure).

import React from 'react'

export default function ProjectsCard({ title, image, description, tech, links }) {
  return (
    <article className="bg-card rounded-lg shadow overflow-hidden transition-transform hover:-translate-y-2">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="absolute top-3 right-3 flex gap-2">
          <a href={links.live} target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white text-zinc-800 w-10 h-10 rounded-full grid place-items-center shadow">
            <i className="fas fa-external-link-alt" />
          </a>
          <a href={links.code} target="_blank" rel="noopener noreferrer" className="bg-white/90 hover:bg-white text-zinc-800 w-10 h-10 rounded-full grid place-items-center shadow">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-800">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

