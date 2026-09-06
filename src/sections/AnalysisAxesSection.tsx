import { eightAxes } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function AnalysisAxesSection() {
  return (
    <section className="section az-section is-dark">
      <div className="inner">
        <SectionHeader tagline={eightAxes.tagline} dark title={eightAxes.title} intro={eightAxes.intro} titleMax="24ch" />
        <div className="az-grid cols-4">
          {eightAxes.items.map((i) => (
            <article className="az-card" key={i.num}>
              <p className="az-num">{i.num}</p>
              <h3 className="az-card-title">{i.title}</h3>
              <p className="az-card-body">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
