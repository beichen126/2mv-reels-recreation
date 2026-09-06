import { footerData } from '../data/content'
import { ArrowUpRight } from '../components/Icons'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-top">
          <div className="foot-brand-wrap">
            <div className="foot-brand-lockup">
              <a className="foot-brand" aria-label="2mv service" href="/">
                <span className="foot-brand-wordmark">{footerData.brand}</span>
              </a>
              <p className="foot-slogan">{footerData.slogan}</p>
            </div>
            <div className="foot-news">
              <div className="foot-news-lockup">
                <label className="foot-news-label" htmlFor="footer-newsletter-email">
                  {footerData.newsLabel}
                </label>
                <div className="foot-form-wrap">
                  <form className="foot-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                      id="footer-newsletter-email"
                      className="foot-input"
                      type="email"
                      required
                      placeholder="Enter your email"
                      name="email"
                    />
                    <button className="act-btn act-btn--green act-btn--sm" type="submit">
                      <span className="act-btn__label">join</span>
                      <span className="act-btn__icon" aria-hidden="true">
                        <ArrowUpRight />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="foot-cols">
            {footerData.columns.map((c) => (
              <div className="foot-col" key={c.label}>
                <div className="foot-col-label">{c.label}</div>
                {c.links.map((l) => (
                  <a key={l.text} href={l.href}>
                    {l.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="foot-bottom">
          <p className="foot-copy">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
