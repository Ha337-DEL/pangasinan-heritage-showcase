import { navLinks } from '../../data/content.js'
import './Footer.css'

/**
 * Organism: Footer
 * Site map, a short heritage statement, and credits.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <p className="footer__wordmark">
            Pangasinan<span>Heritage</span>
          </p>
          <p className="footer__tagline">
            A digital showcase of culture, history, and tourism in Pangasinan, Philippines.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>

      <hr className="divider" />

      <div className="wrap footer__bottom">
        <p>© {year} Pangasinan Heritage. A community heritage &amp; tourism initiative.</p>
        <p>Built to preserve local history and welcome visitors responsibly.</p>
      </div>
    </footer>
  )
}
