'use client'

import type { CSSProperties } from 'react'
import { useInView } from '@/lib/useInView'
import Tag from '@/components/ui/Tag'

type Step = { label: string; cut?: boolean; human?: boolean }
type Side = { label: string; steps: Step[]; summary: string }

export default function BeforeAfter({ before, after }: { before: Side; after: Side }) {
  const { ref, armed, on } = useInView<HTMLDivElement>()
  const cutOrder = before.steps.filter((step) => step.cut).map((step) => step.label)

  return (
    <div
      ref={ref}
      className="ba rounded-card border border-line bg-deep p-6 sm:p-9"
      data-armed={armed}
      data-on={on}
    >
      <div className="flex justify-end">
        <Tag />
      </div>
      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h3 className="t-small font-semibold text-mist">{before.label}</h3>
          <ol className="mt-4 grid gap-2.5">
            {before.steps.map((step) => (
              <li key={step.label} className="text-ink">
                {step.cut ? (
                  <s
                    className="ba-cut no-underline"
                    style={{ '--i': cutOrder.indexOf(step.label) } as CSSProperties}
                  >
                    {step.label}
                  </s>
                ) : (
                  step.label
                )}
              </li>
            ))}
          </ol>
          <p className="t-num mt-6 border-t border-line pt-4 font-medium text-mist">
            {before.summary}
          </p>
        </div>
        <div>
          <h3 className="t-small font-semibold text-signal">{after.label}</h3>
          <ol className="mt-4 grid gap-2.5">
            {after.steps.map((step, i) => (
              <li
                key={step.label}
                className={`ba-in font-display text-[1.25rem] font-semibold leading-snug tracking-[-0.02em] ${step.human ? 'text-human' : 'text-ink'}`}
                style={{ '--i': i } as CSSProperties}
              >
                {step.label}
              </li>
            ))}
          </ol>
          <p className="t-num mt-6 border-t border-line pt-4 font-semibold text-signal">
            {after.summary}
          </p>
        </div>
      </div>
    </div>
  )
}
