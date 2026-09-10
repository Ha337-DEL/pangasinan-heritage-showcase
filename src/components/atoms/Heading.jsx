import './Heading.css'

/**
 * Atom: Heading
 * Renders h1–h4 with a consistent display-type scale so every
 * section title shares the same typographic voice.
 */
export default function Heading({ level = 2, size, italic = false, children, className = '' }) {
  const Tag = `h${level}`
  const sizeClass = size ? `heading--${size}` : `heading--h${level}`

  return (
    <Tag className={`heading ${sizeClass} ${italic ? 'heading--italic' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
