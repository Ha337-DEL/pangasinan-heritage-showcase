// =========================================================
// Pangasinan Heritage — Content Data
// Centralising copy and image references here means every
// card/section component stays presentational (Atomic Design),
// and non-developers can update text or swap photos by editing
// only this file.
//
// HOW TO ADD YOUR OWN PHOTOS:
// 1. Drop your image files into: src/assets/
// 2. Update the `image` path below to match your filename,
//    e.g. image: "/src/assets/bolinao-lighthouse.jpg"
// 3. Keep photos landscape (roughly 4:3 or 3:2) for best results.
// 4. Only use photos you have the rights to use (your own photos,
//    or images licensed for reuse) — see the note in the setup
//    guide about sourcing heritage-site photography responsibly.
// =========================================================

export const heritageSites = [
  {
    id: 'bolinao-lighthouse',
    name: 'Bolinao Lighthouse',
    era: 'Built 1905',
    image: '/bolinao-lighthouse.webp',
    description:
      'Perched on Cape Bolinao, this American-era lighthouse is one of the tallest in the Philippines. Its beam has guided ships along the West Philippine Sea for over a century, and its hilltop grounds remain a favored lookout over the coastline.',
  },
  {
    id: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    era: 'Natural landmark',
    image: '/balungao-hot-spring.jpg',
    description:
      'Set at the foot of Mt. Balungao, these mineral-rich hot and cold springs have long been a rest stop for travelers and a communal bathing site for nearby towns — a tradition of wellness rooted in the land itself.',
  },
  {
    id: 'hundred-islands',
    name: 'Hundred Islands National Park',
    era: 'Philippines\u2019 first national park, declared 1940',
    image: '/hero-hundred-islands.jpg',
    description:
      'A cluster of limestone islands scattered across Lingayen Gulf near Alaminos, shaped by centuries of tide and weather. Long before it was a tourist destination, it was a fishing ground and a natural boundary marker for coastal communities.',
  },
]

export const culturalPillars = [
  {
    id: 'language',
    title: 'Pangasinan Language',
    body: 'One of the Philippines\u2019 major regional languages, still spoken across the province in homes, markets, and local broadcasting.',
  },
  {
    id: 'manaoag',
    title: 'Our Lady of Manaoag Devotion',
    body: 'The Basilica of Our Lady of Manaoag draws pilgrims from across the country year-round, making devotion a central thread of Pangasinense life.',
  },
  {
    id: 'bangus',
    title: 'Bangus & Coastal Livelihood',
    body: 'Dagupan\u2019s milkfish (bangus) industry and the province\u2019s fishing towns have shaped both the local economy and its cuisine for generations.',
  },
  {
    id: 'crafts',
    title: 'Local Delicacies & Craft',
    body: 'From Calasiao\u2019s puto to Bani\u2019s cashew and Bolinao\u2019s bagoong, town-specific food traditions remain a living, everyday form of heritage.',
  },
]

export const hero = {
  image: '/src/assets/hero-hundred-islands.jpg',
  eyebrow: 'Pangasinan, Philippines',
  title: 'Discover Pangasinan',
  subtitle:
    'From a century-old lighthouse on Cape Bolinao to the limestone islands of Lingayen Gulf, Pangasinan holds centuries of coastline, faith, and daily life worth knowing.',
}

export const about = {
  image: '/src/assets/about-pangasinan.webp',
  body: [
    'Pangasinan is a coastal province in the Ilocos Region of the Philippines, named for its historic salt-making industry ("asin" means salt). Its coastline along Lingayen Gulf and the West Philippine Sea has shaped a province of fishing towns, pilgrimage sites, hot springs, and one of the country\u2019s first national parks.',
    'This showcase gathers what makes the province worth visiting and worth remembering: its landmark heritage sites and the everyday culture that ties them together.',
  ],
}

export const navLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'heritage', label: 'Heritage', href: '#heritage' },
  { id: 'culture', label: 'Culture', href: '#culture' },
]
