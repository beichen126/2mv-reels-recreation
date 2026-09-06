const BEATS = [
  { key: 'hook', value: 'visual shock', left: '12%', time: '0–2s' },
  { key: 'setup', value: 'reaction stack', left: '26%', time: '2–6s' },
  { key: 'build', value: 'open loop', left: '44%', time: '6–12s' },
  { key: 'reveal', value: 'the payoff', left: '58%', time: '12–14s' },
  { key: 'climax', value: 'dopamine hit', left: '82%', time: '14–22s' },
]

const DECODED = ['formula', 'hook', 'script', 'triggers', 'patterns', '…']

export default function AnalyzerPreview() {
  return (
    <div className="azp" aria-hidden="true">
      <div className="azp-frame">
        <div className="azp-frame-head">
          <span>frame-by-frame</span>
          <span>0:22</span>
        </div>
        <div className="azp-progress">
          <span />
        </div>
        <div className="azp-beats">
          {BEATS.map((b) => (
            <div className="azp-beat" key={b.key}>
              <div className="azp-beat-k">
                <p>{b.key}</p>
                <p>{b.value}</p>
              </div>
              <div className="azp-beat-bar">
                <span style={{ left: b.left }} />
              </div>
              <span className="azp-beat-t">{b.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="azp-card azp-decoded">
        <p className="azp-decoded-label">
          <span className="az-dot" />
          decoded
        </p>
        <div className="azp-decoded-grid">
          {DECODED.map((d) => (
            <span key={d}>✓ {d}</span>
          ))}
        </div>
      </div>

      <div className="azp-card azp-loop">
        <span className="azp-chip">open loop</span>
        <p>
          a <strong>12s curiosity gap</strong> holds the scroll to the reveal.
        </p>
      </div>
    </div>
  )
}
