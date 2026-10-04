import type { ReactNode } from 'react'

export default function Section({
  id,
  tone = 'night',
  labelledBy,
  className = '',
  children,
}: {
  id?: string
  tone?: 'night' | 'deep'
  labelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === 'deep' ? 'bg-deep' : 'bg-night'} px-5 py-[clamp(4.5rem,11vw,9.5rem)] sm:px-8 ${className}`}
    >
      <div className="mx-auto max-w-page">{children}</div>
    </section>
  )
}
