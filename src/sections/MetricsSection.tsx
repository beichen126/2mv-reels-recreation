import { metricsData } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function MetricsSection() {
  return (
    <section className="section az-section is-dark">
      <div className="inner">
        <SectionHeader tagline={metricsData.tagline} dark title={metricsData.title} intro={metricsData.intro} />
        <div className="az-table az-table--metrics reveal">
          <div className="az-table-head">
            <span>metric</span>
            <span>what it means</span>
            <span>how to use it</span>
          </div>
          {metricsData.rows.map((r) => (
            <div className="az-table-row" key={r.metric}>
              <p className="az-cell-title">{r.metric}</p>
              <p className="az-cell-body">{r.what}</p>
              <p className="az-cell-body strong">{r.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
