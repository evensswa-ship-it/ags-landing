'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { rencontre } from '@/data/rencontre'

const { form, fiche, meeting } = rencontre

const fieldClass =
  'min-h-12 w-full rounded-xl border border-mist/40 bg-night px-4 text-[1rem] text-ink outline-none transition-colors duration-200 focus:border-signal'
const labelClass = 'grid gap-2 t-small font-medium text-ink'
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Status = 'idle' | 'sending' | 'done'

export default function RencontreForm({ src, calendly }: { src: string; calendly: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [emailError, setEmailError] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email') ?? '').trim()
    if (!EMAIL.test(email)) {
      setEmailError(true)
      return
    }
    setEmailError(false)
    setStatus('sending')
    try {
      await fetch('/api/rencontre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'fiche',
          prenom: String(data.get('prenom') ?? ''),
          email,
          entreprise: String(data.get('entreprise') ?? ''),
          src: String(data.get('src') ?? src),
          consentement: data.get('consentement') === 'on',
          site_web: String(data.get('site_web') ?? ''),
        }),
      })
    } catch {
      // Jamais bloquant : le lien de téléchargement s’affiche quand même.
    }
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div role="status" className="grid gap-6">
        <p className="t-lede text-ink">
          {form.success}{' '}
          <a href={fiche.pdf} download className="font-medium text-signal underline underline-offset-4">
            {form.download}
          </a>
        </p>
        <Button href={calendly} className="w-full sm:w-auto">
          {meeting.label}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input type="hidden" name="src" value={src} />
      {/* Pot de miel : invisible pour les personnes, rempli par les robots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Site web
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={labelClass}>
        {form.firstName}
        <input className={fieldClass} name="prenom" autoComplete="given-name" required maxLength={80} />
      </label>
      <label className={labelClass}>
        {form.email}
        <input
          className={fieldClass}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={200}
          aria-invalid={emailError}
          aria-describedby={emailError ? 'email-error' : undefined}
        />
        {emailError ? (
          <span id="email-error" role="alert" className="font-medium text-human">
            {form.emailError}
          </span>
        ) : null}
      </label>
      <label className={labelClass}>
        <span>
          {form.company} <span className="font-normal text-mist">{form.optional}</span>
        </span>
        <input className={fieldClass} name="entreprise" autoComplete="organization" maxLength={120} />
      </label>

      <label className="t-small flex items-start gap-3 text-mist">
        <input type="checkbox" name="consentement" required className="mt-0.5 h-5 w-5 shrink-0 accent-signal" />
        <span>{form.consent}</span>
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-13 w-full items-center justify-center rounded-pill bg-signal px-6 text-[1.05rem] font-semibold text-night transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 sm:w-auto sm:justify-self-start"
      >
        {status === 'sending' ? form.sending : form.submit}
      </button>

      <p className="text-[0.8rem] leading-relaxed text-mist">
        {form.privacy}{' '}
        <Link href={form.privacyLink.href} className="underline underline-offset-4 hover:text-ink">
          {form.privacyLink.label}
        </Link>
      </p>
    </form>
  )
}
