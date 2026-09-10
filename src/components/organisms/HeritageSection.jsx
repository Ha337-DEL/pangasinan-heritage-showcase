import { useState, useMemo } from 'react'
import Heading from '../atoms/Heading.jsx'
import SearchBar from '../molecules/SearchBar.jsx'
import HeritageCard from '../molecules/HeritageCard.jsx'
import { heritageSites } from '../../data/content.js'
import './HeritageSection.css'

/**
 * Organism: HeritageSection
 * Grid of HeritageCard molecules with a keyword SearchBar filter.
 */
export default function HeritageSection() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return heritageSites
    return heritageSites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) || site.description.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <section id="heritage" className="section heritage-section">
      <div className="wrap">
        <div className="heritage-section__head">
          <div>
            <span className="section-label">Iconic heritage</span>
            <Heading level={2}>Landmarks that trace the town's history</Heading>
          </div>
          <SearchBar value={query} onChange={setQuery} placeholder="Search heritage sites…" />
        </div>

        {filtered.length > 0 ? (
          <div className="heritage-section__grid">
            {filtered.map((site) => (
              <HeritageCard key={site.id} site={site} />
            ))}
          </div>
        ) : (
          <p className="heritage-section__empty">No heritage site matches “{query}.”</p>
        )}
      </div>
    </section>
  )
}
