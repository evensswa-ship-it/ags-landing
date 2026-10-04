'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Le contenu est visible par défaut. Une fois monté, l'élément est « armé » s'il est encore
 * sous l'écran, puis « allumé » quand il entre dans la vue : l'animation n'est qu'un plus.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [armed, setArmed] = useState(false)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    setArmed(true)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, armed, on }
}
