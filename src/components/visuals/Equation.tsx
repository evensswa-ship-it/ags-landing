'use client'

import type { CSSProperties } from 'react'
import { useInView } from '@/lib/useInView'

export default function Equation({ terms, result }: { terms: string[]; result: string }) {
  const { ref, armed, on } = useInView<HTMLParagraphElement>()
  const sentence = `${terms.join(' + ')} = ${result}`

  return (
    <p ref={ref} className="eq t-h2" data-armed={armed} data-on={on} aria-label={sentence}>
      <span aria-hidden="true">
        {terms.map((term, i) => (
          <span key={term} className="eq-term" style={{ '--i': i } as CSSProperties}>
            {i > 0 ? <span className="font-normal text-mist"> + </span> : null}
            <span className="whitespace-nowrap">{term}</span>
          </span>
        ))}
        <span className="eq-term block pt-[0.35em] text-signal" style={{ '--i': terms.length + 1 } as CSSProperties}>
          <span className="font-normal text-mist">= </span>
          {result}
        </span>
      </span>
    </p>
  )
}
