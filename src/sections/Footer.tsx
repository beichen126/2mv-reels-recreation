import { siteHref } from '../lib/siteHref'
import { footerData } from '../data/content'
import { ArrowUpRight } from '../components/Icons'
import { useRef, useState, type FormEvent } from 'react'
import { subscribeNewsletter } from '../lib/newsletter'

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'sent'>('idle')
  const [error, setError] = useState('')
  const pending = useRef(false)
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending.current || status === 'sent') return
    const email = String(new FormData(event.currentTarget).get('email') || '').trim()
    if (!email) return
    pending.current = true
    setStatus('pending')
    setError('')
    try {
      await subscribeNewsletter(email)
      setStatus('sent')
    } catch (cause) {
      setStatus('idle')
      setError(cause instanceof Error ? cause.message : 'Something went wrong. Try again.')
    } finally {
      pending.current = false
    }
  }
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-top">
          <div className="foot-brand-wrap">
            <div className="foot-brand-lockup">
              <a className="foot-brand" aria-label="2mv service" href={siteHref('/')}>
                <span className="brand-wordmark foot-brand-wordmark" aria-hidden="true" />
              </a>
              <p className="foot-slogan">{footerData.slogan}</p>
            </div>
            <div className="foot-news">
              <div className="foot-news-lockup">
                <label className="foot-news-label" htmlFor="footer-newsletter-email">
                  {footerData.newsLabel}
                </label>
                <div className={`foot-form-wrap${status === 'sent' ? ' is-sent' : ''}`}>
                  <form className="foot-form" onSubmit={submit} aria-busy={status === 'pending'}>
                    <input
                      id="footer-newsletter-email"
                      className="foot-input"
                      type="email"
                      required
                      disabled={status !== 'idle'}
                      placeholder="enter your email"
                      name="email"
                    />
                    <button className="act-btn act-btn--green act-btn--sm" type="submit" aria-label="join newsletter" disabled={status !== 'idle'}>
                      <span className="act-btn__label">{status === 'pending' ? 'joining…' : 'join'}</span>
                      <span className="act-btn__icon" aria-hidden="true">
                        <ArrowUpRight />
                      </span>
                    </button>
                  </form>
                  {status === 'sent' && <div className="foot-form-done" role="status">Thank you! You’re on the list.</div>}
                  {error && <div className="foot-form-error" role="alert">{error}</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="foot-cols">
            {footerData.columns.map((c) => (
              <div className="foot-col" key={c.label}>
                <div className="foot-col-label">{c.label}</div>
                {c.links.map((l) => (
                  <a key={l.text} href={siteHref(l.href)}>
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
