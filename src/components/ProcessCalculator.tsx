'use client'

import { useState, type FormEvent } from 'react'
import Button from '@/components/ui/Button'
import { calculateur } from '@/data/calculateur'

const { form, results, lead } = calculateur

const fieldClass =
  'min-h-12 w-full rounded-xl border border-mist/40 bg-night px-4 text-ink outline-none transition-colors duration-200 focus:border-signal'
const labelClass = 'grid gap-2 t-small font-medium text-ink'
const hintClass = 't-small font-normal text-mist'

type Inputs = {
  name: string
  fonction: string
  volume: string
  period: string
  direct: string
  indirect: string
  errorRate: string
  errorTime: string
  errorCost: string
  salary: string
  reduction: number
}

const initial: Inputs = {
  name: '',
  fonction: '',
  volume: '',
  period: 'week',
  direct: '',
  indirect: '',
  errorRate: '',
  errorTime: '',
  errorCost: '',
  salary: '',
  reduction: form.defaultReduction,
}

/** Champ vide ou invalide : 0, comme la fonction N() du classeur. */
function num(value: string) {
  const parsed = Number(value.replace(',', '.').replace(/\s/g, ''))
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

/** Mêmes formules que l’onglet « Calculateur » du classeur, sur 12 mois d’activité. */
function compute(inputs: Inputs) {
  const perMonth = form.periods.find((p) => p.value === inputs.period)?.perMonth ?? 1
  const volumeMonth = num(inputs.volume) * perMonth
  const direct = num(inputs.direct)
  const indirect = num(inputs.indirect)
  const hourly = num(inputs.salary) / form.hoursPerYear
  const errorRate = Math.min(num(inputs.errorRate), 100) / 100

  const hoursMonth = (volumeMonth * (direct + indirect)) / 60
  const directCost = ((volumeMonth * direct) / 60) * hourly
  const indirectCost = ((volumeMonth * indirect) / 60) * hourly
  const errorCost = volumeMonth * errorRate * ((num(inputs.errorTime) / 60) * hourly + num(inputs.errorCost))
  const costMonth = directCost + indirectCost + errorCost
  const recoverableMonth = hoursMonth * inputs.reduction * hourly + errorCost * inputs.reduction

  return {
    ready: volumeMonth > 0 && direct + indirect > 0,
    hasCost: hourly > 0,
    hoursMonth,
    costMonth,
    costYear: costMonth * 12,
    invisible: costMonth > 0 ? (indirectCost + errorCost) / costMonth : 0,
    perItem: volumeMonth > 0 ? costMonth / volumeMonth : 0,
    recoverableYear: recoverableMonth * 12,
    above: hoursMonth >= 20 || costMonth >= 1000,
  }
}

const euro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const euroCents = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })
const hours = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 })
const percent = new Intl.NumberFormat('fr-FR', { style: 'percent', maximumFractionDigits: 0 })

type Status = 'idle' | 'sending' | 'success' | 'error'

function NumberField({
  label,
  hint,
  unit,
  value,
  onChange,
}: {
  label: string
  hint?: string
  unit?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className={labelClass}>
      {label}
      {hint ? <span className={hintClass}>{hint}</span> : null}
      <span className="relative block">
        <input
          className={`${fieldClass} t-num ${unit ? 'pr-20' : ''}`}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {unit ? (
          <span className="t-small pointer-events-none absolute inset-y-0 right-4 flex items-center text-mist">
            {unit}
          </span>
        ) : null}
      </span>
    </label>
  )
}

export default function ProcessCalculator() {
  const [inputs, setInputs] = useState<Inputs>(initial)
  const [status, setStatus] = useState<Status>('idle')
  const r = compute(inputs)
  const f = form.fields
  const l = results.labels

  function set<K extends keyof Inputs>(key: K) {
    return (value: Inputs[K]) => setInputs((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const data: Record<string, string> = { _subject: lead.subject }
    new FormData(event.currentTarget).forEach((value, key) => {
      data[key] = String(value)
    })
    const period = form.periods.find((p) => p.value === inputs.period)?.label ?? ''
    Object.assign(data, {
      processus: inputs.name,
      fonction: inputs.fonction,
      volume: `${inputs.volume} par ${period}`,
      tempsDirect: `${inputs.direct} min`,
      tempsIndirect: `${inputs.indirect} min`,
      erreurs: `${inputs.errorRate} % · ${inputs.errorTime} min · ${inputs.errorCost} €`,
      coutAnnuelCharge: `${inputs.salary} €`,
      reductionVisee: percent.format(inputs.reduction),
      heuresParMois: hours.format(r.hoursMonth),
      coutParMois: euro.format(r.costMonth),
      coutParAn: euro.format(r.costYear),
      partInvisible: percent.format(r.invisible),
      valeurRecuperableParAn: euro.format(r.recoverableYear),
    })
    try {
      const response = await fetch(lead.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
      {/* Saisie */}
      <div className="grid gap-12">
        <fieldset className="grid gap-5">
          <legend className="t-h3 mb-5">{form.sections.process}</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              {f.name.label}
              <input
                className={fieldClass}
                placeholder={f.name.placeholder}
                value={inputs.name}
                onChange={(event) => set('name')(event.target.value)}
              />
            </label>
            <label className={labelClass}>
              {f.fonction.label}
              <select
                className={fieldClass}
                value={inputs.fonction}
                onChange={(event) => set('fonction')(event.target.value)}
              >
                <option value="" disabled>
                  {form.placeholder}
                </option>
                {form.fonctions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-[2fr_1fr] sm:items-end">
            <NumberField label={f.volume.label} hint={f.volume.hint} value={inputs.volume} onChange={set('volume')} />
            <label className={labelClass}>
              {f.period.label}
              <select
                className={fieldClass}
                value={inputs.period}
                onChange={(event) => set('period')(event.target.value)}
              >
                {form.periods.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="t-h3 mb-5">{form.sections.time}</legend>
          <NumberField {...f.direct} value={inputs.direct} onChange={set('direct')} />
          <NumberField {...f.indirect} value={inputs.indirect} onChange={set('indirect')} />
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="t-h3 mb-5">{form.sections.errors}</legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField {...f.errorRate} value={inputs.errorRate} onChange={set('errorRate')} />
            <NumberField {...f.errorTime} value={inputs.errorTime} onChange={set('errorTime')} />
          </div>
          <NumberField {...f.errorCost} value={inputs.errorCost} onChange={set('errorCost')} />
        </fieldset>

        <fieldset className="grid gap-5">
          <legend className="t-h3 mb-5">{form.sections.cost}</legend>
          <NumberField {...f.salary} value={inputs.salary} onChange={set('salary')} />
          <div className="grid gap-3">
            <p className="t-small font-medium text-ink" id="reduction-label">
              {f.reduction.label}
            </p>
            <div role="radiogroup" aria-labelledby="reduction-label" className="flex flex-wrap gap-3">
              {form.reductions.map((value) => (
                <label
                  key={value}
                  className={`t-num inline-flex min-h-11 cursor-pointer items-center rounded-pill border px-5 font-medium transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-signal ${
                    inputs.reduction === value ? 'border-signal bg-signal text-night' : 'border-mist/40 text-ink hover:border-ink'
                  }`}
                >
                  <input
                    type="radio"
                    name="reduction"
                    value={value}
                    checked={inputs.reduction === value}
                    onChange={() => set('reduction')(value)}
                    className="sr-only"
                  />
                  {percent.format(value)}
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      </div>

      {/* Résultat */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-card border border-line bg-deep p-6 sm:p-8" aria-live="polite">
          <h2 className="t-h3">{results.title}</h2>
          {r.ready ? (
            <>
              <dl className="mt-6 grid gap-5">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <dt className="t-small text-mist">{l.hoursMonth}</dt>
                  <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                    {hours.format(r.hoursMonth)} h
                  </dd>
                </div>
                {r.hasCost ? (
                  <>
                    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                      <dt className="t-small text-mist">{l.costMonth}</dt>
                      <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                        {euro.format(r.costMonth)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                      <dt className="t-small text-ink">{l.costYear}</dt>
                      <dd className="t-num font-display text-[2.25rem] font-semibold leading-none tracking-[-0.03em] text-signal">
                        {euro.format(r.costYear)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                      <dt className="t-small text-mist">
                        {l.invisible}
                        <span className="block">{l.invisibleHint}</span>
                      </dt>
                      <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                        {percent.format(r.invisible)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                      <dt className="t-small text-mist">{l.perItem}</dt>
                      <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                        {euroCents.format(r.perItem)}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="t-small text-ink">
                        {l.recoverable} ({percent.format(inputs.reduction)})
                        <span className="block text-mist">{l.recoverableHint}</span>
                      </dt>
                      <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
                        {euro.format(r.recoverableYear)}
                      </dd>
                    </div>
                  </>
                ) : null}
              </dl>
              {!r.hasCost ? <p className="t-small mt-5 text-mist">{results.needSalary}</p> : null}
              <p className="mt-6 font-medium text-ink">{r.above ? results.above : results.below}</p>
              <p className="t-small mt-4 text-mist">{results.tag}</p>
            </>
          ) : (
            <p className="mt-6 text-mist">{results.empty}</p>
          )}
        </div>
        <p className="t-small mt-5 text-mist">{results.limits}</p>
      </div>

      {/* Envoi de l’estimation */}
      <div className="border-t border-line pt-12 lg:col-span-2">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 className="t-h3">{lead.title}</h2>
            <p className="t-lede mt-3">{lead.text}</p>
            <Button href={lead.primary.href} className="mt-7">
              {lead.primary.label}
            </Button>
          </div>
          {status === 'success' ? (
            <p role="status" className="t-h3 text-signal">
              {lead.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-3">
                <label className={labelClass}>
                  {lead.fields.firstName}
                  <input className={fieldClass} name="firstName" autoComplete="given-name" required />
                </label>
                <label className={labelClass}>
                  {lead.fields.email}
                  <input className={fieldClass} type="email" name="email" autoComplete="email" required />
                </label>
                <label className={labelClass}>
                  {lead.fields.company}
                  <input className={fieldClass} name="company" autoComplete="organization" required />
                </label>
              </div>
              <label className="t-small flex items-start gap-3 text-mist">
                <input type="checkbox" name="rgpd" required className="mt-1 h-4 w-4 accent-signal" />
                <span>{lead.rgpd}</span>
              </label>
              {status === 'error' ? (
                <p role="alert" className="t-small font-medium text-human">
                  {lead.error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === 'sending' || !r.ready}
                className="inline-flex min-h-12 items-center justify-center justify-self-start rounded-pill border border-mist/40 px-6 font-medium text-ink transition-colors duration-200 hover:border-ink disabled:opacity-60"
              >
                {status === 'sending' ? lead.sending : lead.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
