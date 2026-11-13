'use client'

import { useEffect, useRef } from 'react'

/** Compte une visite de /rencontre : seulement la source et la date, sans cookie ni donnée personnelle. */
export default function VisitPing({ src }: { src: string }) {
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    fetch('/api/rencontre', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'visite', src }),
      keepalive: true,
    }).catch(() => {})
  }, [src])
  return null
}
