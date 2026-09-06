import { useReveal } from './hooks/useReveal'
import { useAdaptiveNav } from './hooks/useAdaptiveNav'
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
import FaqSection from './sections/FaqSection'
import CtaSection from './sections/CtaSection'
import Footer from './sections/Footer'

export default function App() {
  useReveal()
  useAdaptiveNav()

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
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
