import type { Metadata } from 'next'
import FinalCta from '@/components/layout/FinalCta'
import Button from '@/components/ui/Button'
import Faq from '@/components/ui/Faq'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import OfferLadder from '@/components/visuals/OfferLadder'
import { ladderLabels, offers, offres } from '@/data/offres'
import { seo, site } from '@/data/site'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(offres)

const schemas = [
  breadcrumbSchema(offres),
  ...offers
    .filter((offer) => offer.price.amount !== 0)
    .map((offer) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: offer.name,
      description: offer.promise,
      serviceType: seo.serviceType,
      provider: { '@id': `${site.url}/#organization` },
      areaServed: seo.areaServed,
      url: `${site.url}${offres.path}#${offer.id}`,
      ...(offer.price.amount
        ? {
            offers: {
              '@type': 'Offer',
              price: offer.price.amount,
              priceCurrency: 'EUR',
              // Prix affichés hors taxes ; AGS Care est facturé au mois.
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: offer.price.amount,
                priceCurrency: 'EUR',
                valueAddedTaxIncluded: false,
                ...(offer.price.unit ? { unitCode: 'MON' } : {}),
              },
            },
          }
        : {}),
    })),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: offres.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
]

const offerName = Object.fromEntries(offers.map((offer) => [offer.id, offer.name]))

export default function OffresPage() {
  const { hero, start, steps, trust } = offres
  return (
    <>
      <JsonLd data={schemas} />

      {/* 1 — En-tête et échelle des offres, lisibles ensemble */}
      <section aria-labelledby="page-title" className="bg-night px-5 pb-[clamp(4.5rem,11vw,9.5rem)] pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-page">
          <div className="grid gap-8 lg:grid-cols-[8fr_4fr] lg:items-end lg:gap-12">
            <Title
              as="h1"
              size="h2"
              id="page-title"
              stacked
              className="text-[clamp(2.05rem,3.9vw,3.25rem)]"
              {...hero.title}
            />
            <div>
              <p className="t-lede text-ink">{hero.text}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href={hero.primary.href}>{hero.primary.label}</Button>
                <p className="t-small text-mist">{hero.place}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-14">
            <OfferLadder offers={offers} labels={ladderLabels} />
          </div>
        </div>
      </section>

      {/* 2 — Par où commencer ? */}
      <Section tone="deep" labelledBy="start-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Title id="start-title" stacked {...start.title} />
          <ul className="border-t border-line">
            {start.items.map((item) => (
              <li
                key={item.offer}
                className="flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
              >
                <p className="t-lede text-ink">{item.situation}</p>
                <p className="t-small shrink-0 text-mist">
                  {start.label}{' '}
                  <Button href={`#${item.offer}`} variant="link">
                    {offerName[item.offer]}
                  </Button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 3 — Comment ça se passe */}
      <Section labelledBy="steps-title">
        <Title id="steps-title" stacked {...steps.title} />
        <ol className="mt-14 grid gap-x-12 md:grid-cols-3">
          {steps.items.map((step, i) => (
            <li key={step.name} className="border-t border-line py-6">
              <p className="t-num t-small font-medium text-mist">
                {i + 1} · <span className="text-signal">{step.offers}</span>
              </p>
              <h3 className="t-h3 mt-3">{step.name}</h3>
              <p className="mt-3 text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 — Pourquoi nous faire confiance */}
      <Section tone="deep" labelledBy="trust-title">
        <Title id="trust-title" stacked {...trust.title} />
        <ul className="mt-14 grid gap-x-12 md:grid-cols-3">
          {trust.items.map((item) => (
            <li key={item.title} className="border-t border-line py-6">
              <h3 className={`t-h3 ${item.human ? 'text-human' : ''}`}>{item.title}</h3>
              <p className="mt-3 text-mist">{item.text}</p>
              {item.link ? (
                <Button href={item.link.href} variant="link" className="mt-4">
                  {item.link.label}
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="t-small mt-10 text-mist">{trust.membership}</p>
      </Section>

      {/* 5 — FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Title id="faq-title" stacked {...offres.faq.title} />
          <Faq items={offres.faq.items} />
        </div>
      </Section>

      <FinalCta tone="deep" {...offres.closing} />
    </>
  )
}
