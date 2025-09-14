// SectionTitle.jsx
// Small helper to keep section headings consistent.

import React from 'react'

export default function SectionTitle({ children }) {
  return (
    <h2 className="text-center text-3xl md:text-4xl font-display font-semibold mb-12 relative pb-4">
      {children}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block w-24 h-[3px] bg-primary" />
    </h2>
  )
}

