import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import WhySection from './sections/WhySection'
import RankingSection from './sections/RankingSection'
import AnatomySection from './sections/AnatomySection'
import AnalysisAxesSection from './sections/AnalysisAxesSection'
import MythsSection from './sections/MythsSection'
import MetricsSection from './sections/MetricsSection'
import UsersSection from './sections/UsersSection'
import RelatedSection from './sections/RelatedSection'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <WhySection />
      <RankingSection />
      <AnatomySection />
      <AnalysisAxesSection />
      <MythsSection />
      <MetricsSection />
      <UsersSection />
      <RelatedSection />
    </div>
  )
}
