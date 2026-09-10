import './Button.css'

/**
 * Atom: Button
 * A single, reusable button/link element used across molecules and organisms.
 * `as="a"` renders an anchor (for anchor-link CTAs); default renders <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  type = 'button',
  ariaLabel,
}) {
  const className = `btn btn--${variant}`

  if (as === 'a') {
    return (
      <a className={className} href={href} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
