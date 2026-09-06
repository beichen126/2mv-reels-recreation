import { siteHref } from '../lib/siteHref'
import { useState } from 'react'
import AnalyzerPreview from './AnalyzerPreview'
import UrlAnalyzerForm from './UrlAnalyzerForm'
import TrendingSection from './TrendingSection'

export default function Hero() {
  const [url, setUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  return (
    <section className="section az-section az-hero is-dark">
      <div className="inner inner--hero">
        <div className="az-hero-grid">
          <div className="az-hero-copy reveal">
            <nav aria-label="Breadcrumb" className="az-crumbs">
              <span className="az-crumb">
                <a href={siteHref('/')}>home</a>
              </span>
              <span className="az-crumb">
                <span aria-hidden="true" className="sep"> / </span>
                <a href={siteHref('/ai-video-analyzer')}>ai video analyzer</a>
              </span>
              <span className="az-crumb">
                <span aria-hidden="true" className="sep"> / </span>
                <span aria-current="page">instagram reels</span>
              </span>
            </nav>

            <h1>
              instagram reels analyzer
              <span className="az-hero-sub">reverse-engineer a viral reel, frame by frame.</span>
            </h1>

            <p className="az-hero-lead">
              paste any public reel url and get instagram reels analytics that go past views: the hook
              device, the promise beat, the sendable moment, the loop close — plus the reel you should
              film next.
            </p>

            <UrlAnalyzerForm url={url} setUrl={setUrl} file={file} setFile={setFile} />
          </div>

          <div className="az-hero-visual reveal">
            <AnalyzerPreview />
          </div>
        </div>

        <TrendingSection onSelectReel={(reelUrl) => { setUrl(reelUrl); setFile(null) }} />
      </div>
    </section>
  )
}
