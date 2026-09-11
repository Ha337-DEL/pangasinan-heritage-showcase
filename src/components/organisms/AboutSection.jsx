import Heading from '../atoms/Heading.jsx'
import Image from '../atoms/Image.jsx'
import { about } from '../../data/content.js'
import './AboutSection.css'

/**
 * Organism: AboutSection
 * A short editorial introduction to Pangasinan — province photo
 * beside two short paragraphs, asymmetric two-column layout.
 */
export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__grid">
        <div className="about__text">
          <span className="section-label">About the province</span>
          <Heading level={2}>Coastline, faith, and history along the Gulf</Heading>
          {about.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="about__image">
         <img src="/about-pangasinan.webp" alt="About Pangasinan" />
        </div>
      </div>
    </section>
  )
}
