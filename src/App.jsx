import Navbar from './components/organisms/Navbar.jsx'
import HeroSection from './components/organisms/HeroSection.jsx'
import AboutSection from './components/organisms/AboutSection.jsx'
import HeritageSection from './components/organisms/HeritageSection.jsx'
import CulturalAwarenessSection from './components/organisms/CulturalAwarenessSection.jsx'
import CTASection from './components/organisms/CTASection.jsx'
import Footer from './components/organisms/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HeritageSection />
        <CulturalAwarenessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
