import { inView } from 'motion'

// Detecção de viewport via `motion` (mais robusto que IntersectionObserver manual).
// A animação em si continua via CSS transition em globals.css ([data-reveal].in-view)
// — aqui só disparamos a classe no momento certo.
export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!els.length) return
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('in-view'))
    return
  }
  els.forEach(el => {
    inView(el, () => {
      el.classList.add('in-view')
    }, { amount: 0.15 })
  })
}
