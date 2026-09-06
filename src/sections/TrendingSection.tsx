import { useEffect, useRef, useState } from 'react'
import { trendingReels, type TrendingReel } from '../data/content'

function ReelEmbed({ reel }: { reel: TrendingReel }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { rootMargin: '300px 0px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className="az-embed">
    {visible ? <iframe
      src={`https://www.instagram.com/reel/${reel.embedId}/embed/captioned/`}
      title={`${reel.label} — ${reel.stat}`} loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen referrerPolicy="strict-origin-when-cross-origin" tabIndex={-1}
    /> : <div className="az-embed-wait">loading player…</div>}
  </div>
}

export default function TrendingSection({ onSelectReel }: { onSelectReel: (url: string) => void }) {
  return (
    <div className="az-trend reveal">
      <div className="az-trend-head">
        <h2 className="az-trend-title">trending reels right now</h2>
        <p className="az-trend-hint">tap a reel to drop its url into the box above</p>
      </div>
      <div className="az-trend-grid cols-4">
        {trendingReels.map((r) => {
          const select = () => onSelectReel(`https://www.instagram.com/reel/${r.embedId}/`)
          return <div role="button" tabIndex={0} aria-label={`use ${r.label} reel in analyzer`} className="az-trend-card" key={r.embedId}
            onClick={select} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select() } }}>
            <div className="no-hit"><ReelEmbed reel={r} /></div>
            <div className="az-trend-meta">
              <p className="az-trend-label"><span className="t">{r.label}</span><span className="n">{r.stat}</span></p>
              <p className="az-trend-read">{r.read}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
