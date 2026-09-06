import AnalyzerPreview from './AnalyzerPreview'
import UrlAnalyzerForm from './UrlAnalyzerForm'

export default function Hero() {
  return (
    <section className="section az-section az-hero is-dark">
      <div className="inner inner--hero">
        <div className="az-hero-grid">
          <div className="az-hero-copy">
            <nav aria-label="Breadcrumb" className="az-crumbs">
              <span className="az-crumb">
                <a href="/">home</a>
              </span>
              <span className="az-crumb">
                <span aria-hidden="true" className="sep"> / </span>
                <a href="/ai-video-analyzer">ai video analyzer</a>
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

            <UrlAnalyzerForm />
          </div>

          <div className="az-hero-visual">
            <AnalyzerPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
