import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'
import { cta, nav, site } from '@/data/site'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-night/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-[4.5rem] max-w-page items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label={nav.homeLabel} className="flex shrink-0 items-center">
          <Image
            src={site.logoSrc}
            alt=""
            width={1620}
            height={971}
            priority
            sizes="110px"
            className="-ml-7 h-16 w-auto"
          />
        </Link>

        <nav aria-label={nav.mainLabel} className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-mist transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button href={cta.primary.href} className="min-h-10 px-5 text-[0.9375rem]">
            {cta.primary.label}
          </Button>
        </nav>

        <MobileMenu
          links={nav.links}
          cta={cta.primary}
          openLabel={nav.menuLabel}
          closeLabel={nav.closeLabel}
        />
      </div>
    </header>
  )
}
