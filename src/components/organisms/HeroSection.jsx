import Heading from '../atoms/Heading.jsx'
import Button from '../atoms/Button.jsx'
import Image from '../atoms/Image.jsx'
import { hero } from '../../data/content.js'
import './HeroSection.css'

/**
 * Organism: HeroSection
 * The first thing a visitor sees: full-bleed photo of the Gulf,
 * the town's name, and two clear next steps.
 */
export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <Image src={hero.image} alt="Hundred Islands, Lingayen Gulf, Pangasinan" ratio="auto" />
      </div>
      <div className="hero__scrim" />
      <div className="wrap hero__content">
        <span className="hero__eyebrow">{hero.eyebrow}</span>
        <Heading level={1}>{hero.title}</Heading>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__actions">
          <Button as="a" href="#heritage" variant="primary">
            Explore Heritage
          </Button>
          <Button as="a" href="#culture" variant="secondary">
            Discover the Culture
          </Button>
        </div>
      </div>
    </section>
  )
}
