import { mythsData } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function MythsSection() {
  return (
    <section className="section az-section az-tint">
      <div className="inner">
        <SectionHeader tagline={mythsData.tagline} title={mythsData.title} titleMax="28ch" />
        <div className="az-grid cols-2 reveal">
          {mythsData.items.map((m, i) => (
            <article className="az-card az-card--line" key={i}>
              <p className="az-myth-head">
                <span className="az-mark az-mark--x">×</span>
                {m.myth}
              </p>
              <p className="az-myth-real">
                <span className="az-mark az-mark--check">✓</span>
                {m.real}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
