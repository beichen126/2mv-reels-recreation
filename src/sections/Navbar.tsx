import { siteHref } from '../lib/siteHref'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from '../components/Icons'

const LINKS = [
  { label: 'studio', href: '/studio' },
  { label: 'tools', href: '/tools', active: true },
  { label: 'blog', href: '/blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="site-navbar" id="nav" aria-label="Main navigation">
      <div className={`site-navbar__inner has-cta ${open ? 'is-open' : ''}`}>
        <a className="site-navbar__brand" aria-label="2mv service" href={siteHref('/')}>
          <span className="brand-wordmark site-navbar__wordmark" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="site-navbar__mobile-trigger"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Menu className="site-navbar__trigger-icon site-navbar__trigger-icon--menu" aria-hidden="true" />
          <X className="site-navbar__trigger-icon site-navbar__trigger-icon--close" aria-hidden="true" />
        </button>

        <div className="site-navbar__switch" aria-label="Site sections">
          {LINKS.map((l) => (
            <a
              key={l.label}
              className={`site-navbar__link ${l.active ? 'is-active' : ''}`}
              aria-current={l.active ? 'page' : undefined}
              href={siteHref(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            className="site-navbar__cta book-demo-cta"
            href={siteHref('/book-a-demo')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="site-navbar__cta-label">book a demo</span>
            <span className="site-navbar__cta-icon" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
