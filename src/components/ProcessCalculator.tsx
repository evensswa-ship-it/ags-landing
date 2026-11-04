'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Button from '@/components/ui/Button'
import { calculateur } from '@/data/calculateur'
import { track } from '@/lib/analytics'

const { form, results, lead } = calculateur

const fieldClass =
  'min-h-12 w-full rounded-xl border border-mist/40 bg-night px-4 text-ink outline-none transition-colors duration-200 focus:border-signal'
const labelClass = 'grid gap-2 t-small font-medium text-ink'
const hintClass = 't-small font-normal text-mist'

type Inputs = {
  name: string
  volume: string
  direct: string
  around: string
  redo: string
  salary: string
}

const initial: Inputs = { name: '', volume: '', direct: '', around: '', redo: '', salary: '' }

/** Champ vide ou invalide : 0, comme la fonction N() du classeur. */
function num(value: string) {
  const parsed = Number(value.replace(',', '.').replace(/\s/g, ''))
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

/**
 * Un dossier coûte son temps de travail, le temps perdu autour, et la part des dossiers
 * repris (un dossier repris = son travail refait). Une heure coûte le salaire brut chargé.
 */
function compute(inputs: Inputs) {
  const volumeMonth = num(inputs.volume) * form.weeksPerMonth
  const direct = num(inputs.direct)
  const around = num(inputs.around)
  const redo = (Math.min(num(inputs.redo), 100) / 100) * direct
  const minutesPerItem = direct + around + redo
  const hourly = (num(inputs.salary) * 12 * (1 + form.employerCharges)) / form.hoursPerYear

  const hoursMonth = (volumeMonth * minutesPerItem) / 60
  const costMonth = hoursMonth * hourly

  return {
    ready: volumeMonth > 0 && direct + around > 0,
    hasCost: hourly > 0,
    hoursMonth,
    costMonth,
    costYear: costMonth * 12,
    invisible: minutesPerItem > 0 ? (around + redo) / minutesPerItem : 0,
    perItem: volumeMonth > 0 ? costMonth / volumeMonth : 0,
    recoverableYear: costMonth * 12 * form.recoverableShare,
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
  const { locked } = results
  const unlocked = status === 'success'
  /** « — » tant qu’il manque une donnée, « ••• » tant que l’email n’est pas envoyé, puis la vraie valeur. */
  const reveal = (format: () => string) => (!money ? pending : unlocked ? format() : locked.mask)

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

  // Un seul événement par visite : le premier résultat affiché.
  const resultTracked = useRef(false)
  useEffect(() => {
    if (!r.ready || resultTracked.current) return
    resultTracked.current = true
    track({ name: 'calculator_result', params: { processus: inputs.name || 'non renseigné' } })
  }, [r.ready, inputs.name])

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
    Object.assign(data, {
      processus: inputs.name,
      dossiersParSemaine: inputs.volume,
      minutesParDossier: `${inputs.direct} min`,
      minutesPerduesAutour: `${inputs.around} min`,
      reprisSur100: inputs.redo || '0',
      salaireBrutMensuel: `${inputs.salary} €`,
      heuresParMois: hours.format(r.hoursMonth),
      coutParMois: euro.format(r.costMonth),
      coutParAn: euro.format(r.costYear),
      partInvisible: percent.format(r.invisible),
      recuperableParAn: euro.format(r.recoverableYear),
    })
    try {
      const response = await fetch(lead.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(response.ok ? 'success' : 'error')
      if (response.ok) track({ name: 'generate_lead', params: { form: 'calculateur' } })
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
            <label className={labelClass}>
              {f.name.label}
              <input
                className={fieldClass}
                placeholder={f.name.placeholder}
                value={inputs.name}
                onChange={(event) => set('name')(event.target.value)}
              />
            </label>
            <NumberField {...f.volume} value={inputs.volume} onChange={set('volume')} />
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="t-h3 mb-5">{form.sections.time}</legend>
            <NumberField {...f.direct} value={inputs.direct} onChange={set('direct')} />
            <NumberField {...f.around} value={inputs.around} onChange={set('around')} />
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="t-h3 mb-5">{form.sections.errors}</legend>
            <NumberField {...f.redo} value={inputs.redo} onChange={set('redo')} />
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="t-h3 mb-5">{form.sections.cost}</legend>
            <NumberField {...f.salary} value={inputs.salary} onChange={set('salary')} />
          </fieldset>
        </div>

        {/* Résultat : structure fixe, « — » tant qu’une donnée manque, pour que rien ne saute pendant la saisie. */}
        <div id="resultat" ref={resultRef} className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-card border border-line bg-deep p-6 sm:p-7" aria-live="polite">
            <h2 className="t-small font-semibold text-mist">{results.title}</h2>
            <p className="t-small mt-5 text-ink">{l.costYear}</p>
            <p className="t-num mt-2 font-display text-[clamp(2.5rem,4.2vw,3.25rem)] font-semibold leading-none tracking-[-0.035em] text-signal">
              {reveal(() => euro.format(r.costYear))}
            </p>
            <p className="t-small t-num mt-3 text-mist">
              {reveal(() => euro.format(r.costMonth))} {l.perMonth} · {reveal(() => hours.format(r.hoursMonth))} h{' '}
              {l.perMonth}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
              <div>
                <dt className="t-small text-mist">{l.invisible}</dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {reveal(() => percent.format(r.invisible))}
                </dd>
              </div>
              <div>
                <dt className="t-small text-mist">{l.perItem}</dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {reveal(() => euroCents.format(r.perItem))}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="t-small text-mist">{l.recoverable}</dt>
                <dd className="t-num mt-1 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                  {reveal(() => euro.format(r.recoverableYear))}
                </dd>
              </div>
            </dl>

            {unlocked ? (
              <>
                <p className="t-small mt-6 border-t border-line pt-5 font-medium text-ink">
                  {r.above ? results.above : results.below}
                </p>
                <p role="status" className="t-small mt-3 text-signal">
                  {lead.success}
                </p>
              </>
            ) : (
              // Les montants ne sont écrits dans la page qu’après l’envoi : rien à lire en contournant le formulaire.
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 border-t border-line pt-5">
                <p className="t-small font-medium text-ink">
                  {!r.ready ? results.empty : !r.hasCost ? results.needSalary : locked.ready}
                </p>
                <p className="t-small text-mist">{money ? locked.text : locked.waiting}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <label className={labelClass}>
                    {lead.fields.firstName}
                    <input className={fieldClass} name="firstName" autoComplete="given-name" required />
                  </label>
                  <label className={labelClass}>
                    {lead.fields.email}
                    <input className={fieldClass} type="email" name="email" autoComplete="email" required />
                  </label>
                </div>
                <label className={labelClass}>
                  {lead.fields.company}
                  <input className={fieldClass} name="company" autoComplete="organization" />
                </label>
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
                  disabled={status === 'sending' || !money}
                  className="inline-flex min-h-12 items-center justify-center rounded-pill bg-signal px-6 font-semibold text-night transition-[filter] duration-200 hover:brightness-110 disabled:opacity-50"
                >
                  {status === 'sending' ? lead.sending : lead.submit}
                </button>
              </form>
            )}
          </div>
          <div className="t-small mt-4 grid gap-2 text-mist">
            <p>{results.tag}.</p>
            {results.method.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>{results.limits}</p>
          </div>
        </div>
      </div>

      {/* Téléphone : le coût par an reste visible pendant la saisie, jusqu’à ce que le bloc complet arrive à l’écran. */}
      {showBar ? (
        // pl-20 : laisse la place au bouton du bandeau cookies, en bas à gauche.
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-deep/95 py-3 pl-20 pr-5 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-page items-center justify-between gap-4">
            {unlocked ? (
              <p className="t-small text-mist">
                {l.costYear}
                <span className="t-num block font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.03em] text-signal">
                  {euro.format(r.costYear)}
                </span>
              </p>
            ) : (
              <p className="t-small font-medium text-ink">{money ? locked.mobile : results.needSalary}</p>
            )}
            <a href="#resultat" className="t-small shrink-0 font-medium text-signal underline decoration-signal/40 underline-offset-4">
              {unlocked ? results.mobileDetail : locked.mobileLink}
            </a>
          </div>
        </div>
      ) : null}

      {/* Après le résultat : le rendez-vous */}
      <div className="border-t border-line pt-12">
        <h2 className="t-h3">{lead.title}</h2>
        <p className="t-lede mt-3 max-w-[38rem]">{lead.text}</p>
        <Button href={lead.primary.href} className="mt-7">
          {lead.primary.label}
        </Button>
      </div>
    </div>
  )
}
