import { anatomy } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function AnatomySection() {
  return (
    <section className="section az-section az-tint">
      <div className="inner">
        <SectionHeader tagline={anatomy.tagline} title={anatomy.title} />
        <ol className="az-beats reveal">
          {anatomy.beats.map((b) => (
            <li className="az-beat-row" key={b.idx}>
              <p className="az-beat-time">{b.time}</p>
              <p className="az-beat-label">
                <span className="idx">{b.idx}</span>
                {b.title}
              </p>
              <p className="az-beat-body">{b.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
