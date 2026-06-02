import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const navLinks = [
  { href: '#about', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (event, href) => {
    event.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 84, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/88 backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(event) => handleClick(event, '#home')}
          className="flex items-center gap-3 text-slate-950"
          aria-label="Harsha Vardhan G home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-950 text-sm font-semibold text-white">
            HV
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold">{profile.name}</span>
            <span className="block text-xs text-slate-500">{profile.role}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resume}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className="flex h-4 w-4 flex-col justify-center gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-4 rounded-full bg-current transition ${mobileOpen ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`h-0.5 w-4 rounded-full bg-current transition ${mobileOpen ? '-translate-y-1 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleClick(event, link.href)}
                className="text-base font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={profile.resume}
                className="rounded-md border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700"
              >
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-teal-700 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
