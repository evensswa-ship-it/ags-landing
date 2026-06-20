'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '@/data/content'
import Button from '@/components/ui/Button'

const fieldClass =
  'min-h-12 w-full rounded-[6px] border border-[#1A2E55] bg-[#010310] px-4 text-sm text-white outline-none transition placeholder:text-[#8899BB]/60 focus:border-[#1660EC]'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const fd = new FormData(e.currentTarget)
    const data: Record<string, string> = { _subject: contact.subject }
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
    <section id="contact" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {contact.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5 sm:p-7"
        >
          {status === 'success' ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center gap-4 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1660EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className="font-[var(--font-inter)] text-lg font-bold text-white">{contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-medium text-white">
                  {contact.fields.firstName}
                  <input className={fieldClass} name="firstName" autoComplete="given-name" required />
                </label>
                <label className="grid gap-2 text-xs font-medium text-white">
                  {contact.fields.email}
                  <input className={fieldClass} type="email" name="email" autoComplete="email" required />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-xs font-medium text-white">
                {contact.fields.sector}
                <select className={fieldClass} name="sector" required defaultValue="">
                  <option value="" disabled>Sélectionner</option>
                  {contact.sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-xs font-medium text-white">
                {contact.fields.message}
                <textarea className={`${fieldClass} min-h-32 resize-y py-3`} name="message" />
              </label>

              <label className="mt-5 flex items-start gap-3 text-xs font-light leading-6 text-[#8899BB]">
                <input
                  type="checkbox"
                  name="rgpd"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#1A2E55] accent-[#1660EC]"
                />
                <span>{contact.rgpd}</span>
              </label>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400">{contact.error}</p>
              )}

              <Button type="submit" disabled={status === 'loading'} className="mt-7 w-full sm:w-auto">
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Envoi en cours…
                  </span>
                ) : contact.cta}
              </Button>
              <p className="mt-4 text-xs font-light leading-6 text-[#8899BB]">{contact.reassurance}</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
