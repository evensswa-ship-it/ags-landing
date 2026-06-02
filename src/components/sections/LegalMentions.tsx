'use client'

import { useEffect } from 'react'
import { legal } from '@/data/content'

type LegalMentionsProps = {
  open: boolean
  onClose: () => void
}

export default function LegalMentions({ open, onClose }: LegalMentionsProps) {
  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#010310]/80 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onMouseDown={onClose}
    >
      <div
        className="max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-[#1A2E55] bg-[#050E22] shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[#1A2E55] bg-[#050E22] p-5">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">Informations juridiques</p>
            <h2 id="legal-title" className="mt-2 font-[var(--font-inter)] text-2xl font-bold text-white">
              Mentions légales
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-[#1A2E55] text-xl leading-none text-[#8899BB] transition hover:border-[#1660EC] hover:text-white"
            aria-label="Fermer les mentions légales"
          >
            ×
          </button>
        </div>

        <div className="grid gap-4 p-5">
          <article className="rounded-[8px] border border-[#1A2E55] bg-[#010310] p-5">
            <h3 className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">Éditeur du site</h3>
            <dl className="mt-5 grid gap-3 text-[11px] leading-5">
              {legal.editor.map((item) => (
                <div key={item.label} className="grid gap-1 border-b border-[#1A2E55]/70 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]">
                  <dt className="text-[#8899BB]">{item.label}</dt>
                  <dd className="text-white/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-[8px] border border-[#1A2E55] bg-[#010310] p-5">
            <h3 className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">Hébergement</h3>
            <dl className="mt-5 grid gap-3 text-[11px] leading-5">
              {legal.hosting.map((item) => (
                <div key={item.label} className="grid gap-1 border-b border-[#1A2E55]/70 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]">
                  <dt className="text-[#8899BB]">{item.label}</dt>
                  <dd className="text-white/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          {legal.sections.map((section) => (
            <article key={section.title} className="rounded-[8px] border border-[#1A2E55] bg-[#010310] p-5">
              <h3 className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">{section.title}</h3>
              <p className="mt-4 text-[11px] font-light leading-6 text-[#8899BB]">{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
