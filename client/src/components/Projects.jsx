// client/src/components/Projects.jsx
// A simple grid with 3 projects (as requested). Each card shows a title,
// a short description, and a few tech tags. Links can be added later.

import React from 'react'

const PROJECTS = [
  {
    title: 'Responsive Portfolio',
    desc: 'A clean personal site that looks good on phones and desktops.',
    tech: ['React', 'CSS', 'Vite']
  },
  {
    title: 'Todo App',
    desc: 'A simple task list with add, check, and delete features.',
    tech: ['React', 'LocalStorage']
  },
  {
    title: 'Weather Widget',
    desc: 'A tiny widget that shows the current weather for your city.',
    tech: ['JavaScript', 'Fetch']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card project-card">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

