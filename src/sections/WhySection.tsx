import { whyReels } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function WhySection() {
  return (
    <section className="section az-section az-tint">
      <div className="inner">
        <SectionHeader tagline={whyReels.tagline} title={whyReels.title} intro={whyReels.intro} />
        <div className="az-grid cols-3 reveal">
          {whyReels.items.map((i) => (
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
