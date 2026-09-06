import { useState } from 'react'
import { faqData } from '../data/content'

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section az-section az-faq">
      <div className="inner">
        <h2 className="az-faq-title">
          {faqData.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="az-faq-list">
          {faqData.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div className="az-faq-item" data-open={isOpen} key={item.q}>
                <button
                  type="button"
                  className="az-faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`az-faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <h3 className="az-faq-q-text">{item.q}</h3>
                  <span className="az-faq-pm" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="az-faq-panel" id={`az-faq-panel-${i}`} inert={!isOpen}>
                  <div className="az-faq-panel-inner">
                    <p className="az-faq-a">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
