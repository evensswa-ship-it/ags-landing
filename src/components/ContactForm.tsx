'use client'

import { useState, type FormEvent } from 'react'
import { contact } from '@/data/contact'

const { form } = contact

const fieldClass =
  'min-h-12 w-full rounded-xl border border-mist/40 bg-night px-4 text-ink outline-none transition-colors duration-200 focus:border-signal'
const labelClass = 'grid gap-2 t-small font-medium text-ink'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const data: Record<string, string> = { _subject: form.subject }
    new FormData(event.currentTarget).forEach((value, key) => {
      data[key] = String(value)
    })
    try {
      const response = await fetch(form.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="t-h3 text-signal">
        {form.success}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          {form.fields.firstName}
          <input className={fieldClass} name="firstName" autoComplete="given-name" required />
        </label>
        <label className={labelClass}>
          {form.fields.email}
          <input className={fieldClass} type="email" name="email" autoComplete="email" required />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          {form.fields.audience}
          <select className={fieldClass} name="audience" required defaultValue="">
            <option value="" disabled>
              {form.placeholder}
            </option>
            {form.audience.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          {form.fields.size}
          <select className={fieldClass} name="size" required defaultValue="">
            <option value="" disabled>
              {form.placeholder}
            </option>
            {form.sizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        {form.fields.message}
        <textarea className={`${fieldClass} min-h-36 resize-y py-3`} name="message" required />
      </label>

      <label className="t-small flex items-start gap-3 text-mist">
        <input type="checkbox" name="rgpd" required className="mt-1 h-4 w-4 accent-signal" />
        <span>{form.rgpd}</span>
      </label>

      {status === 'error' ? (
        <p role="alert" className="t-small font-medium text-human">
          {form.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-12 items-center justify-center justify-self-start rounded-pill border border-mist/40 px-6 font-medium text-ink transition-colors duration-200 hover:border-ink disabled:opacity-60"
      >
        {status === 'sending' ? form.sending : form.submit}
      </button>
    </form>
  )
}
