import { trendingReels } from '../data/content'
import { Play } from '../components/Icons'

export default function TrendingSection() {
  return (
    <div className="az-trend">
      <div className="az-trend-head">
        <h2 className="az-trend-title">trending reels right now</h2>
        <p className="az-trend-hint">tap a reel to drop its url into the box above</p>
      </div>
      <div className="az-trend-grid cols-4">
        {trendingReels.map((r) => (
          <div role="button" tabIndex={0} aria-label={`use ${r.label} reel in analyzer`} className="az-trend-card" key={r.label}>
            <div className="az-embed">
              <div className="az-embed-bg" style={{ background: r.gradient }} />
              <div className="az-embed-top">
                <span className="az-embed-avatar" />
                <span className="az-embed-handle">{r.handle}</span>
              </div>
              <span className="az-embed-play" aria-hidden="true">
                <Play />
              </span>
              <span className="az-embed-cap">{r.caption}</span>
            </div>
            <div className="az-trend-meta">
              <p className="az-trend-label">
                <span className="t">{r.label}</span>
                <span className="n">{r.stat}</span>
              </p>
              <p className="az-trend-read">{r.read}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
