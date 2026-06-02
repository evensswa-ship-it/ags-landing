import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'text'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
} & (
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a'; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
)

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center rounded-[6px] px-5 py-3 font-[var(--font-montserrat)] text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1660EC]'

  const variants: Record<Variant, string> = {
    primary:
      'border border-[#1660EC] bg-[#1660EC] text-white shadow-[0_16px_44px_rgba(22,96,236,0.22)] hover:bg-[#2b74ff]',
    outline:
      'border border-[#1660EC] bg-transparent text-white hover:bg-[#1660EC]/12',
    text: 'min-h-0 rounded-none px-0 py-0 text-white/90 hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (props.as === 'a') {
    const { as, ...anchorProps } = props
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as, ...buttonProps } = props
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
