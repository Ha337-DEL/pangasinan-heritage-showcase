import { useState, useEffect } from 'react'
import NavLink from '../atoms/NavLink.jsx'
import Icon from '../atoms/Icon.jsx'
import Button from '../atoms/Button.jsx'
import { navLinks } from '../../data/content.js'
import './Navbar.css'

/**
 * Organism: Navbar
 * Fixed header combining wordmark, nav links, and a CTA.
 * Collapses into a full-screen mobile menu below 760px.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="wrap navbar__inner">
        <a href="#top" className="navbar__brand" onClick={close}>
          Pangasinan<span>Heritage</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.id} href={link.href} tone="light">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__cta navbar__cta--desktop">
          <Button as="a" href="#heritage" variant="secondary">
            Plan a Visit
          </Button>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink key={link.id} href={link.href} tone="light" onClick={close}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button as="a" href="#heritage" variant="secondary" onClick={close}>
          Plan a Visit
        </Button>
      </div>
    </header>
  )
}
