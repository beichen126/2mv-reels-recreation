import { ctaData } from '../data/content'
import { ArrowUpRight } from '../components/Icons'

export default function CtaSection() {
  return (
    <section className="section section_cta is-green" id="cta">
      <div className="inner">
        <h2>
          {ctaData.lead}
          <br />
          <span className="hl">{ctaData.hl}</span>
        </h2>
        <p className="cta-sub">{ctaData.sub}</p>
        <div className="cta-actions">
          <a className="act-btn act-btn--black act-btn--md" href={ctaData.startHref} target="_blank" rel="noopener noreferrer">
            <span className="act-btn__label">start for free</span>
            <span className="act-btn__icon" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </a>
          <a className="act-btn act-btn--secondary act-btn--md" href={ctaData.demoHref} target="_blank" rel="noopener noreferrer">
            <span className="act-btn__label">book a demo</span>
            <span className="act-btn__icon" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
