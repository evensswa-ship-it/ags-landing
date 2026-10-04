'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/ui/Button'

type Item = { label: string; href: string }

export default function MobileMenu({
  links,
  cta,
  openLabel,
  closeLabel,
}: {
  links: Item[]
  cta: Item
  openLabel: string
  closeLabel: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center rounded-pill border border-mist/40 px-4 text-[0.9375rem] font-medium text-ink"
      >
        {open ? closeLabel : openLabel}
      </button>
      {open ? (
        <nav
          id="menu-mobile"
          aria-label={openLabel}
          className="absolute inset-x-0 top-full border-b border-line bg-night px-5 pb-8 pt-2 sm:px-8"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={cta.href} className="mt-6 w-full">
            {cta.label}
          </Button>
        </nav>
      ) : null}
    </div>
  )
}
