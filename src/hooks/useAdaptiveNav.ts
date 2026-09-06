import { useEffect } from 'react'

/**
 * Toggles body.on-dark-section when the fixed navbar sits over a dark/green section
 * and body.on-green-section when over the green CTA, so the nav ink auto-adapts.
 * Uses an IntersectionObserver-free scroll check on the section under the navbar.
 */
export function useAdaptiveNav() {
  useEffect(() => {
    const NAV_Y = 72
    const update = () => {
      const sections = Array.from(document.querySelectorAll('.section, footer.foot'))
      let dark = false
      let green = false
      for (const el of sections) {
        const r = el.getBoundingClientRect()
        if (r.top <= NAV_Y && r.bottom >= NAV_Y) {
          dark =
            el.classList.contains('is-dark') ||
            el.classList.contains('is-green') ||
            el.classList.contains('az-hero') ||
            el.tagName === 'FOOTER'
          green = el.classList.contains('is-green')
          break
        }
      }
      document.body.classList.toggle('on-dark-section', dark)
      document.body.classList.toggle('on-green-section', green)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
}
