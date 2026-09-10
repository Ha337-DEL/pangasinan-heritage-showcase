import Icon from '../atoms/Icon.jsx'
import './SearchBar.css'

/**
 * Molecule: SearchBar
 * A simple keyword filter used above the Heritage listing. Fully controlled — the parent organism owns the value.
 */
export default function SearchBar({ value, onChange, placeholder = 'Search places…' }) {
  return (
    <label className="search-bar">
      <Icon name="search" size={18} />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  )
}
