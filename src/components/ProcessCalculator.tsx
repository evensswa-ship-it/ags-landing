'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
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
  manual: string
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
  manual: '100',
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
  // Case vide : 100 %, comme IF(N(C61)>0, C61, 1) dans le classeur.
  const manual = num(inputs.manual) > 0 ? Math.min(num(inputs.manual), 100) / 100 : 1

  const hoursMonth = (volumeMonth * (direct + indirect)) / 60
  const directCost = ((volumeMonth * direct) / 60) * hourly
  const indirectCost = ((volumeMonth * indirect) / 60) * hourly
  const errorCost = volumeMonth * errorRate * ((num(inputs.errorTime) / 60) * hourly + num(inputs.errorCost))
  const costMonth = directCost + indirectCost + errorCost
  const recoverableMonth = hoursMonth * manual * inputs.reduction * hourly + errorCost * inputs.reduction

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
  const money = r.ready && r.hasCost
  const pending = results.pending

  // La barre du bas ne s’affiche que tant que le bloc résultat est encore plus bas dans la page.
  const resultRef = useRef<HTMLDivElement>(null)
  const [resultBelow, setResultBelow] = useState(true)
  useEffect(() => {
    const node = resultRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      setResultBelow(!entry.isIntersecting && entry.boundingClientRect.top > 0)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  const showBar = r.ready && resultBelow

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
      partManuelle: `${inputs.manual || '100'} %`,
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
    <div className="grid gap-14">
      {/* Saisie + résultat dans leur propre grille : le bloc collant s’arrête à la fin du formulaire. */}
      <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
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
            <NumberField {...f.manual} value={inputs.manual} onChange={set('manual')} />
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

        {/* Résultat : structure fixe, « — » tant qu’une donnée manque, pour que rien ne saute pendant la saisie. */}
        <div id="resultat" ref={resultRef} className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-deep p-6 sm:p-7" aria-live="polite">
            <h2 className="t-small font-semibold text-mist">{results.title}</h2>
            <p className="t-small mt-5 text-ink">{l.costYear}</p>
            <p className="t-num mt-2 font-display text-[clamp(2.5rem,4.2vw,3.25rem)] font-semibold leading-none tracking-[-0.035em] text-signal">
              {money ? euro.format(r.costYear) : pending}
            </p>
            <p className="t-small t-num mt-3 text-mist">
              {money ? euro.format(r.costMonth) : pending} {l.perMonth} · {r.ready ? hours.format(r.hoursMonth) : pending} h{' '}
              {l.perMonth}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
              <div>
                <dt className="t-small text-mist">{l.invisible}</dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {money ? percent.format(r.invisible) : pending}
                </dd>
              </div>
              <div>
                <dt className="t-small text-mist">{l.perItem}</dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {money ? euroCents.format(r.perItem) : pending}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="t-small text-mist">
                  {l.recoverable} ({percent.format(inputs.reduction)})
                </dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {money ? euro.format(r.recoverableYear) : pending}
                </dd>
              </div>
            </dl>
            <p className="t-small mt-6 min-h-[3.75rem] border-t border-line pt-5 font-medium text-ink">
              {!r.ready ? results.empty : !r.hasCost ? results.needSalary : r.above ? results.above : results.below}
            </p>
          </div>
          <div className="t-small mt-4 grid gap-2 text-mist">
            <p>
              {results.tag}. {l.invisibleHint} {l.recoverableHint}
            </p>
            <p>{results.limits}</p>
          </div>
        </div>
      </div>

      {/* Téléphone : le coût par an reste visible pendant la saisie, jusqu’à ce que le bloc complet arrive à l’écran. */}
      {showBar ? (
        // pl-20 : laisse la place au bouton du bandeau cookies, en bas à gauche.
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-deep/95 py-3 pl-20 pr-5 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-page items-center justify-between gap-4">
            <p className="t-small text-mist">
              {money ? l.costYear : l.hoursMonth}
              <span className="t-num block font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.03em] text-signal">
                {money ? euro.format(r.costYear) : `${hours.format(r.hoursMonth)} h`}
              </span>
            </p>
            <a href="#resultat" className="t-small shrink-0 font-medium text-signal underline decoration-signal/40 underline-offset-4">
              {results.mobileDetail}
            </a>
          </div>
        </div>
      ) : null}

      {/* Envoi de l’estimation */}
      <div className="border-t border-line pt-12">
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
