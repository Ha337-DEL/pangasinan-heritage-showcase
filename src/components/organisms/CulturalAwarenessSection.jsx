import Heading from '../atoms/Heading.jsx'
import { culturalPillars } from '../../data/content.js'
import './CulturalAwarenessSection.css'

/**
 * Organism: CulturalAwarenessSection
 * Frames heritage as living culture, not just architecture —
 * language, festival, livelihood, and memory, set as a quiet
 * list rather than another row of cards.
 */
export default function CulturalAwarenessSection() {
  return (
    <section id="culture" className="section culture-section">
      <div className="wrap culture-section__inner">
        <div className="culture-section__intro">
          <span className="section-label">Cultural awareness</span>
          <Heading level={2}>Heritage is still being lived here</Heading>
          <p>
            Beyond landmarks, Pangasinan's identity is carried forward in everyday habits — the
            language spoken at the market, the pilgrimage made every year, and the livelihoods
            still built around the coast.
          </p>
        </div>

        <dl className="culture-section__list">
          {culturalPillars.map((pillar) => (
            <div className="culture-section__row" key={pillar.id}>
              <dt>{pillar.title}</dt>
              <dd>{pillar.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
