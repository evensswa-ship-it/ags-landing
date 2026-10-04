import type { CSSProperties } from 'react'

export type FlowStep = { label: string; human?: boolean }

/** Moment (en fraction du cycle) où l'impulsion atteint chaque étape. Voir @keyframes flux-pulse. */
function arrival(index: number, count: number) {
  const last = count - 1
  if (index === last) return 0.9
  return (0.55 * index) / (last - 1)
}

const CYCLE = 9

export default function Flow({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <ol
      aria-label={label}
      className="flux"
      style={{ '--flux-count': steps.length, '--flux-cycle': `${CYCLE}s` } as CSSProperties}
    >
      {steps.map((step, i) => (
        <li
          key={step.label}
          className="flux-step"
          data-human={step.human ? '' : undefined}
          data-last={i === steps.length - 1 ? '' : undefined}
          style={{ '--flux-at': `${(arrival(i, steps.length) * CYCLE).toFixed(2)}s` } as CSSProperties}
        >
          <span className="flux-node" aria-hidden="true" />
          <span className="flex flex-col gap-1 lg:pr-2">
            <span className={`t-num t-small font-medium ${step.human ? 'text-human' : 'text-mist'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`font-display text-[1.125rem] font-semibold leading-tight tracking-[-0.02em] ${step.human ? 'text-human' : 'text-ink'}`}
            >
              {step.label}
            </span>
          </span>
        </li>
      ))}
      <li className="flux-rail" aria-hidden="true">
        <span className="flux-pulse" />
      </li>
    </ol>
  )
}
