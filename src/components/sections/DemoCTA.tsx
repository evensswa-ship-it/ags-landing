'use client'

import { useState, useEffect } from 'react'
import { demo, contact } from '@/data/content'
import Button from '@/components/ui/Button'

const fieldClass =
  'min-h-12 w-full rounded-[6px] border border-[#1A2E55] bg-[#010310] px-4 text-sm text-white outline-none transition placeholder:text-[#8899BB]/60 focus:border-[#1660EC]'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function DemoCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  function handleClose() {
    setIsOpen(false)
    setStatus('idle')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const fd = new FormData(e.currentTarget)
    const data: Record<string, string> = { _subject: demo.subject }
    fd.forEach((val, key) => { data[key] = val as string })
    try {
      const res = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="mt-10 flex justify-center">
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          {demo.cta}
        </Button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-md rounded-[12px] border border-[#1A2E55] bg-[#010B17] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="demo-modal-title" className="font-[var(--font-inter)] text-xl font-bold text-white">
                  {demo.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-6 text-[#8899BB]">{demo.subtitle}</p>
              </div>
              <button
                onClick={handleClose}
                className="shrink-0 text-[#8899BB] transition-colors hover:text-white"
                aria-label="Fermer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {status === 'success' ? (
              <div className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1660EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="font-[var(--font-inter)] font-bold text-white">{demo.success}</p>
                <button
                  onClick={handleClose}
                  className="mt-2 text-sm text-[#8899BB] underline transition-colors hover:text-white"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <label className="grid gap-2 text-xs font-medium text-white">
                  {demo.fields.firstName}
                  <input
                    className={fieldClass}
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Votre prénom"
                  />
                </label>
                <label className="grid gap-2 text-xs font-medium text-white">
                  {demo.fields.email}
                  <input
                    className={fieldClass}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="vous@entreprise.fr"
                  />
                </label>
                <label className="grid gap-2 text-xs font-medium text-white">
                  {demo.fields.message}
                  <textarea
                    className={`${fieldClass} min-h-24 resize-none py-3`}
                    name="message"
                    placeholder="Secteur, taille équipe, enjeu principal…"
                  />
                </label>

                <label className="flex items-start gap-3 text-xs font-light leading-6 text-[#8899BB]">
                  <input
                    type="checkbox"
                    name="rgpd"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#1A2E55] accent-[#1660EC]"
                  />
                  <span>{contact.rgpd}</span>
                </label>

                {status === 'error' && (
                  <p className="text-sm text-red-400">{demo.error}</p>
                )}

                <Button type="submit" disabled={status === 'loading'} className="mt-2 w-full">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Envoi en cours…
                    </span>
                  ) : demo.cta}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
