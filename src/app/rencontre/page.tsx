import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import RencontreForm from '@/components/RencontreForm'
import VisitPing from '@/components/VisitPing'
import { cleanSrc, rencontre } from '@/data/rencontre'

/** Page du QR code des cartes de visite : non indexée, hors menu et hors sitemap. */
export const metadata: Metadata = {
  title: { absolute: rencontre.metaTitle },
  description: rencontre.metaDescription,
  robots: { index: false, follow: false },
}

export default async function RencontrePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const src = cleanSrc((await searchParams).src)
  const calendly = `${rencontre.meeting.href}?utm_source=${encodeURIComponent(src)}`
  const { footer } = rencontre

  return (
    <div className="hero-bg px-5 pb-16 pt-10 sm:px-8 sm:pt-16">
      <VisitPing src={src} />
      <div className="mx-auto grid max-w-[36rem] gap-12">
        <header>
          <h1 className="t-h2">{rencontre.title}</h1>
          <p className="t-lede mt-5 text-ink">{rencontre.intro}</p>
        </header>

        <section aria-labelledby="fiche-title" className="rounded-card border border-line bg-deep p-5 sm:p-7">
          <h2 id="fiche-title" className="t-h3">
            {rencontre.fiche.title}
          </h2>
          <p className="mt-4 text-mist">{rencontre.fiche.text}</p>
          <div className="mt-7">
            <RencontreForm src={src} calendly={calendly} />
          </div>
        </section>

        <section aria-labelledby="meeting-title">
          <h2 id="meeting-title" className="t-h3">
            {rencontre.meeting.title}
          </h2>
          <p className="mt-4 text-mist">{rencontre.meeting.text}</p>
          <Button href={calendly} className="mt-6 w-full sm:w-auto">
            {rencontre.meeting.label}
          </Button>
        </section>

        <p className="t-small flex flex-wrap gap-x-3 gap-y-2 text-mist">
          <a href={footer.linkedin.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
            {footer.linkedin.label}
          </a>
          <span aria-hidden="true">·</span>
          <a href={footer.site.href} className="underline underline-offset-4 hover:text-ink">
            {footer.site.label}
          </a>
          <span aria-hidden="true">·</span>
          <a href={footer.phone.href} className="t-num underline underline-offset-4 hover:text-ink">
            {footer.phone.label}
          </a>
        </p>
      </div>
    </div>
  )
}
