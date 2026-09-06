import { siteHref } from '../lib/siteHref'
import { relatedData } from '../data/content'

export default function RelatedSection() {
  return (
    <section className="section az-section is-dark">
      <div className="inner">
        <span className="tagline on-dark">{relatedData.tagline}</span>
        <div className="az-grid cols-4 reveal">
          {relatedData.items.map((r) => (
            <a className="az-card az-related-card" href={siteHref(r.href)} key={r.title}>
              <p className="az-card-title">{r.title}</p>
              <p className="az-card-body">{r.body}</p>
              <span className="open">open →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
