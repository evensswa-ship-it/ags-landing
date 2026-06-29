'use client'

import Link from 'next/link'
import Image from 'next/image'
import { footer, nav } from '@/data/content'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.98H3.73V20h3.21V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.34 4Zm8.09 4.98h-3.08V20h3.21v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.21v-6.04c0-2.97-.64-5.25-4.11-5.25-1.67 0-2.78.92-3.24 1.78h-.04l.21-1.51Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#010310] px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-t border-[#1A2E55] pt-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link href="/">
              <Image
                src={nav.logoSrc}
                alt={nav.logoAlt}
                width={150}
                height={150}
                className="h-auto w-[150px] object-contain opacity-90"
              />
            </Link>
            <p className="mt-4 text-sm italic text-[#8899BB]">{footer.tagline}</p>
          </div>

          <div className="grid gap-8 text-sm text-[#8899BB] sm:grid-cols-3 lg:justify-items-end lg:text-right">
            <nav className="grid gap-4">
              {footer.sectionLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav className="grid gap-4">
              {footer.legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav className="grid gap-4">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white lg:justify-end"
                >
                  {link.label === 'LinkedIn' ? <LinkedInIcon /> : null}
                  {link.label}
                </a>
              ))}
              <a href={`mailto:${footer.email}`} className="transition hover:text-white">
                {footer.email}
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-[#1A2E55] pt-6 text-xs text-[#8899BB]">
          © 2026 AGS & Co.
        </div>
      </div>
    </footer>
  )
}