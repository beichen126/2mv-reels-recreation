import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    let timer: number | undefined
    let io: IntersectionObserver | undefined
    const init = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
      if (!els.length) return
      if (typeof IntersectionObserver === 'undefined') {
        els.forEach((el) => el.classList.add('is-in'))
        return
      }
      io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io!.unobserve(e.target)
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })
      els.forEach((el) => io!.observe(el))
    }
    timer = requestAnimationFrame(init)
    return () => {
      if (timer) cancelAnimationFrame(timer)
      io?.disconnect()
    }
  }, [])
}
