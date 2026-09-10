import Image from '../atoms/Image.jsx'
import Heading from '../atoms/Heading.jsx'
import './HeritageCard.css'

/**
 * Molecule: HeritageCard
 * Presents one iconic heritage site: photo, era marker, name, description.
 */
export default function HeritageCard({ site }) {
  return (
    <article className="heritage-card">
      <Image src={site.image} alt={site.name} ratio="4 / 3" />
      <div className="heritage-card__body">
        <span className="heritage-card__era">{site.era}</span>
        <Heading level={3} size="h4">{site.name}</Heading>
        <p>{site.description}</p>
      </div>
    </article>
  )
}
