import { useEffect, useRef } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.anim-init')
    if (!els?.length) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated')
          e.target.classList.remove('anim-init')
          obs.unobserve(e.target)
        }
      })
    }, { threshold })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export function useBarInView() {
  const ref = useRef(null)
  useEffect(() => {
    const bars = ref.current?.querySelectorAll('.bar-fill[data-pct]')
    if (!bars?.length) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.width = e.target.dataset.pct + '%'; obs.unobserve(e.target) }
      })
    }, { threshold: 0.3 })
    bars.forEach(b => obs.observe(b))
    return () => obs.disconnect()
  }, [])
  return ref
}
