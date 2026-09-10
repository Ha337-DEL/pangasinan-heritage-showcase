import Heading from '../atoms/Heading.jsx'
import Button from '../atoms/Button.jsx'
import './CTASection.css'

/**
 * Organism: CTASection
 * A single, focused invitation to visit — the one place the page
 * spends its "boldness," per the design brief.
 */
export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="wrap cta-section__inner">
        <Heading level={2} italic>
          Pangasinan is best understood in person.
        </Heading>
        <p>
          Climb the Bolinao Lighthouse, island-hop the Hundred Islands, and soak in a hot
          spring at the foot of Mt. Balungao. Plan your visit around the tide and the season.
        </p>
        <Button as="a" href="#heritage" variant="primary">
          Start Planning Your Visit
        </Button>
      </div>
    </section>
  )
}
