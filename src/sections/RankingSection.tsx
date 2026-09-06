import { rankingSignals } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function RankingSection() {
  return (
    <section id="reels-signals" className="section az-section is-dark">
      <div className="inner">
        <SectionHeader tagline={rankingSignals.tagline} dark title={rankingSignals.title} titleMax="28ch" />
        <div className="az-table az-table--signals reveal">
          <div className="az-table-head">
            <span>signal</span>
            <span>weight</span>
            <span>how the analyzer reads it</span>
          </div>
          {rankingSignals.rows.map((r) => (
            <div className="az-table-row" key={r.title}>
              <p className="az-cell-title">{r.title}</p>
              <p>
                <span className="az-weight">{r.weight}</span>
              </p>
              <p className="az-cell-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
