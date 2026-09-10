import { useState } from 'react'
import './Image.css'

/**
 * Atom: Image
 * Wraps <img> with mandatory alt text (accessibility requirement)
 * and a labelled placeholder frame if a photo fails to load —
 * so the layout never breaks while real photos are being added
 * to src/assets/.
 */
export default function Image({ src, alt, ratio = '4 / 3', className = '' }) {
  const [failed, setFailed] = useState(false)

  const style = ratio === 'auto' ? undefined : { aspectRatio: ratio }

  if (failed || !src) {
    return (
      <div className={`img-frame img-frame--placeholder ${className}`} style={style}>
        <span>{alt}</span>
      </div>
    )
  }

  return (
    <div className={`img-frame ${className}`} style={style}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  )
}
