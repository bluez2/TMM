import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoMark from './LogoMark.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-parchment/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <LogoMark className="w-9 h-9" variant="forest" />
          <span className="font-display text-xl tracking-tight text-forestDeep">
            Transformation mission ministy
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wide">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-colors ${
                  isActive
                    ? 'border-gold text-ink'
                    : 'border-transparent text-ink/60 hover:text-ink hover:border-ink/30'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-parchment px-5 py-4 flex flex-col gap-4 font-body uppercase text-sm tracking-wide">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'text-gold' : 'text-ink/70')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
