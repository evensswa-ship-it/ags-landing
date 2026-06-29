'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { nav } from '@/data/content'
import Button from '@/components/ui/Button'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1A2E55] bg-[#010310]/[0.92] backdrop-blur-xl">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Retour en haut" className="flex items-center">
          <Image
            src={nav.logoSrc}
            alt={nav.logoAlt}
            width={92}
            height={55}
            priority
            className="h-[55px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[var(--font-montserrat)] text-xs font-medium text-[#8899BB] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button
            as="a"
            href={nav.ctaHref}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="min-h-10 px-4 text-xs"
          >
            {nav.cta}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            as="a"
            href={nav.ctaHref}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="min-h-9 px-3 text-[11px] max-[360px]:hidden"
          >
            {nav.cta}
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[6px] border border-[#1A2E55]"
            onClick={() => setOpen((value) => !value)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-3 bg-white" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#1A2E55] bg-[#010310] px-5 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#8899BB]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              as="a"
              href={nav.ctaHref}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              {nav.cta}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}