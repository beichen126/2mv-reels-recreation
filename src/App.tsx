import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import WhySection from './sections/WhySection'
import RankingSection from './sections/RankingSection'
import AnatomySection from './sections/AnatomySection'
import AnalysisAxesSection from './sections/AnalysisAxesSection'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <WhySection />
      <RankingSection />
      <AnatomySection />
      <AnalysisAxesSection />
    </div>
  )
}
