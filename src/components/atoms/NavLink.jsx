import './NavLink.css'

/**
 * Atom: NavLink
 * A single navigation anchor used inside the Navbar organism.
 */
export default function NavLink({ href, children, onClick, tone = 'light' }) {
  return (
    <a className={`nav-link nav-link--${tone}`} href={href} onClick={onClick}>
      {children}
    </a>
  )
}
