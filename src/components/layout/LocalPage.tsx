import FinalCta from '@/components/layout/FinalCta'
import Button from '@/components/ui/Button'
import Faq from '@/components/ui/Faq'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import OfferLadder from '@/components/visuals/OfferLadder'
import { casUsage } from '@/data/cas-usage'
import { localLabels, type LocalPageData } from '@/data/local'
import { ladderLabels, offers, offersTeaser } from '@/data/offres'
import { seo, site } from '@/data/site'
import { breadcrumbSchema } from '@/lib/seo'

/** Page locale (Normandie, Paris) : même trame, textes propres à chaque territoire. */
export default function LocalPage({ data }: { data: LocalPageData }) {
  const { labels } = casUsage
  const schemas = [
    breadcrumbSchema(data),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.serviceName,
      description: data.meta.description,
      serviceType: seo.serviceType,
      provider: { '@id': `${site.url}/#organization` },
      areaServed: data.area,
      url: `${site.url}${data.path}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ]

  return (
    <>
      <JsonLd data={schemas} />

      <section aria-labelledby="page-title" className="hero-bg px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pb-24">
        <div className="mx-auto max-w-page">
          <p className="t-small font-medium text-mist">{data.hero.eyebrow}</p>
          <Title as="h1" size="h2" id="page-title" stacked className="mt-6 max-w-[24ch]" {...data.hero.title} />
          <p className="t-lede mt-8 max-w-[38rem] text-ink">{data.hero.intro}</p>
          <Button href={localLabels.closing.primary.href} className="mt-9">
            {localLabels.closing.primary.label}
          </Button>
        </div>
      </section>

      <Section tone="deep" labelledBy="context-title">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Title id="context-title" stacked {...data.context.title} />
          <div>
            {data.context.paragraphs.map((paragraph, i) => (
              <p key={paragraph} className={i === 0 ? 't-lede text-ink' : 'mt-5 text-mist'}>
                {paragraph}
              </p>
            ))}
            {data.context.link ? (
              <Button href={data.context.link.href} variant="link" className="mt-8">
                {data.context.link.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Section>

      <Section labelledBy="cases-title">
        <Title id="cases-title" stacked className="max-w-[24ch]" {...localLabels.casesTitle} />
        <div className="mt-14 grid gap-14">
          {data.cases.map((item) => (
            <article key={item.title} className="border-t border-line pt-7">
              <h3 className="t-h3">{item.title}</h3>
              <dl className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
                <div>
                  <dt className="t-small font-medium text-mist">{labels.problem}</dt>
                  <dd className="mt-2 text-ink">{item.problem}</dd>
                </div>
                <div>
                  <dt className="t-small font-medium text-signal">{labels.agent}</dt>
                  <dd className="mt-2 text-ink">{item.agent}</dd>
                </div>
                <div>
                  <dt className="t-small font-medium text-human">{labels.human}</dt>
                  <dd className="mt-2 text-ink">{item.human}</dd>
                </div>
                <div>
                  <dt className="t-small font-medium text-mist">{labels.metric}</dt>
                  <dd className="mt-2 text-ink">{item.metric}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <Button href={localLabels.casesLink.href} variant="link" className="mt-12">
          {localLabels.casesLink.label}
        </Button>
      </Section>

      <Section tone="deep" labelledBy="offers-title">
        <Title id="offers-title" stacked {...offersTeaser.title} />
        <p className="t-lede mt-6 max-w-[38rem]">{offersTeaser.text}</p>
        <div className="mt-12">
          <OfferLadder offers={offers} labels={ladderLabels} variant="compact" headingLevel="h3" />
        </div>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-10">
          <Button href={offersTeaser.link.href} variant="link">
            {offersTeaser.link.label}
          </Button>
          <Button href={offersTeaser.calculator.href} variant="link">
            {offersTeaser.calculator.label}
          </Button>
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Title id="faq-title" stacked {...localLabels.faqTitle} />
          <Faq items={data.faq} />
        </div>
      </Section>

      <FinalCta tone="deep" {...localLabels.closing} />
    </>
  )
}
