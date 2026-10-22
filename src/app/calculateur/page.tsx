import type { Metadata } from 'next'
import ProcessCalculator from '@/components/ProcessCalculator'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import { calculateur } from '@/data/calculateur'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(calculateur)

export default function CalculateurPage() {
  const { hero } = calculateur
  return (
    <>
      <JsonLd data={breadcrumbSchema(calculateur)} />
      <section aria-labelledby="page-title" className="bg-night px-5 pb-12 pt-16 sm:px-8 sm:pt-24 lg:pb-16">
        <div className="mx-auto max-w-page">
          <Title as="h1" size="h2" id="page-title" stacked className="max-w-[22ch]" {...hero.title} />
          <p className="t-lede mt-8 max-w-[38rem] text-ink">{hero.text}</p>
          <p className="t-small mt-5 text-mist">{hero.note}</p>
        </div>
      </section>

      <Section className="pt-0 sm:pt-0">
        <ProcessCalculator />
        <p className="t-small mt-12 max-w-[40rem] text-mist">{calculateur.sheet.text}</p>
      </Section>
    </>
  )
}
