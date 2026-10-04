import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'link'

const styles: Record<Variant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-pill bg-signal px-6 text-[1rem] font-semibold text-night transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-pill border border-mist/40 px-6 text-[1rem] font-medium text-ink transition-colors duration-200 hover:border-ink',
  link: 'inline-flex items-center gap-2 font-medium text-signal underline decoration-signal/40 underline-offset-[6px] transition-colors duration-200 hover:decoration-signal',
}

export default function Button({
  href,
  variant = 'primary',
  className = '',
  children,
}: {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
}) {
  const classes = `${styles[variant]} ${className}`
  if (/^(https?:|mailto:)/.test(href)) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
