import Header from './components/Header'
import Hero from './components/Hero'
import FeatureStrip from './components/FeatureStrip'
import ScannerSection from './components/ScannerSection'
import FeatureGrid from './components/FeatureGrid'
import CoachBanner from './components/CoachBanner'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#fdf6f1]">
      <Header />
      <main>
        <Hero />
        <div id="features" className="scroll-mt-24">
          <FeatureStrip />
          <ScannerSection />
          <FeatureGrid />
        </div>
        <CoachBanner />
        <Contact />
      </main>
    </div>
  )
}

export default App
