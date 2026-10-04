import type { Metadata } from 'next'
import FinalCta from '@/components/layout/FinalCta'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import Faq from '@/components/ui/Faq'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import BeforeAfter from '@/components/visuals/BeforeAfter'
import Equation from '@/components/visuals/Equation'
import { changes, examples, methode, what } from '@/data/methode'
import { site } from '@/data/site'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(methode)

const schemas = [
  breadcrumbSchema(methode),
  ...methode.offers.map((offer) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: offer.name,
    description: offer.text,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: 'FR',
    url: `${site.url}${methode.path}#${offer.id}`,
  })),
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: methode.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
]

export default function MethodePage() {
  return (
    <>
      <JsonLd data={schemas} />
      <PageHero title={methode.title} intro={methode.intro} />

      <Section tone="deep" labelledBy="what-title">
        <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-20">
          <Title id="what-title" stacked {...what.title} />
          <p className="t-lede">{what.text}</p>
        </div>
        <div className="mt-16 border-t border-line pt-12 lg:mt-24 lg:pt-16">
          <Equation {...what.equation} />
        </div>
      </Section>

      <Section labelledBy="journey-title">
        <Title id="journey-title" stacked {...methode.journey.title} />
        <ol className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          {methode.journey.steps.map((step, i) => (
            <li key={step.name} className="border-t border-line py-6">
              <p className="t-num t-small font-medium text-mist">{i + 1}</p>
              <h3 className="t-h3 mt-2">{step.name}</h3>
              <p className="mt-2 text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {methode.offers.map((offer, index) => (
        <Section
          key={offer.id}
          id={offer.id}
          tone={index % 2 === 0 ? 'deep' : 'night'}
          labelledBy={`${offer.id}-title`}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="t-small font-medium text-mist">
                <span className="text-signal">{offer.name}</span> · {offer.format}
              </p>
              <Title id={`${offer.id}-title`} stacked className="mt-5" {...offer.title} />
              <p className="t-lede mt-8">{offer.text}</p>
              {offer.note ? <p className="mt-6 font-medium text-ink">{offer.note}</p> : null}
            </div>
            <div
              className={`rounded-card border border-line p-6 sm:p-9 ${index % 2 === 0 ? 'bg-night' : 'bg-deep'}`}
            >
              <h3 className="t-small font-semibold text-mist">{methode.includesLabel}</h3>
              <ul className="mt-2">
                {offer.includes.map((line) => (
                  <li key={line} className="border-b border-line py-4 text-ink last:border-b-0 last:pb-0">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section labelledBy="changes-title">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Title id="changes-title" stacked {...changes.title} />
          <ul>
            {changes.items.map((item) => (
              <li key={item.title} className="border-t border-line py-7 last:border-b">
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-lede mt-2 max-w-[34rem]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="deep" labelledBy="examples-title">
        <Title id="examples-title" stacked {...examples.title} />
        <div className="mt-14 grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <ul>
              {examples.items.map((item) => (
                <li key={item} className="t-lede border-t border-line py-5 text-ink last:border-b">
                  {item}
                </li>
              ))}
            </ul>
            <Button href={examples.link.href} variant="link" className="mt-8">
              {examples.link.label}
            </Button>
          </div>
          <BeforeAfter {...examples.beforeAfter} />
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Title id="faq-title" stacked {...methode.faq.title} />
          <Faq items={methode.faq.items} />
        </div>
      </Section>

      <FinalCta tone="deep" {...methode.closing} />
    </>
  )
}
