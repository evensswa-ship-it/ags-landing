import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCta from '@/components/layout/FinalCta'
import Button from '@/components/ui/Button'
import Faq from '@/components/ui/Faq'
import JsonLd from '@/components/ui/JsonLd'
import Rich from '@/components/ui/Rich'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import Flow from '@/components/visuals/Flow'
import { articles, blog, formatDate, fullTitle, readingTime } from '@/data/blog'
import { courtiers } from '@/data/courtiers'
import { seo, site } from '@/data/site'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(courtiers)

/** Page d’arrivée des articles de la série courtage en assurance et CGP. */
export default function CourtiersPage() {
  const data = courtiers
  const related = articles.filter(
    (article) => article.category !== undefined && data.articles.categories.includes(article.category),
  )
  const schemas = [
    breadcrumbSchema(data),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.serviceName,
      description: data.meta.description,
      serviceType: seo.serviceType,
      provider: { '@id': `${site.url}/#organization` },
      audience: { '@type': 'BusinessAudience', name: data.audience },
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
          <Button href={data.hero.primary.href} className="mt-9">
            {data.hero.primary.label}
          </Button>
        </div>
      </section>

      <Section tone="deep" labelledBy="pains-title">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <Title id="pains-title" stacked {...data.pains.title} />
            <p className="t-lede mt-6">{data.pains.intro}</p>
          </div>
          <div>
            <ul className="grid gap-5 border-t border-line pt-7">
              {data.pains.items.map((item) => (
                <li key={item} className="text-mist">
                  <Rich text={item} />
                </li>
              ))}
            </ul>
            <p className="t-lede mt-8 text-ink">{data.pains.note}</p>
            <Button href={data.pains.link.href} variant="link" className="mt-8">
              {data.pains.link.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section labelledBy="method-title">
        <Title id="method-title" stacked {...data.method.title} />
        <p className="t-lede mt-6 max-w-[38rem]">{data.method.intro}</p>
        <div className="mt-14">
          <Flow steps={data.method.flow} label={data.method.flowLabel} />
        </div>
      </Section>

      <Section tone="deep" labelledBy="agents-title">
        <Title id="agents-title" stacked className="max-w-[24ch]" {...data.agents.title} />
        <p className="t-lede mt-6 max-w-[38rem]">{data.agents.intro}</p>
        <div className="mt-14 grid gap-12">
          {data.agents.items.map((item) => (
            <article key={item.title} className="border-t border-line pt-7">
              <h3 className="t-h3">{item.title}</h3>
              <dl className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
                <div>
                  <dt className="t-small font-medium text-signal">{data.agents.labels.agent}</dt>
                  <dd className="mt-2 text-ink">{item.agent}</dd>
                </div>
                <div>
                  <dt className="t-small font-medium text-human">{data.agents.labels.human}</dt>
                  <dd className="mt-2 text-ink">{item.human}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section labelledBy="safeguards-title">
        <Title id="safeguards-title" stacked {...data.safeguards.title} />
        <dl className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16">
          {data.safeguards.items.map((item) => (
            <div key={item.title} className="border-t border-line pt-6">
              <dt className="font-display text-[1.125rem] font-semibold text-ink">{item.title}</dt>
              <dd className="mt-2 text-mist">{item.text}</dd>
            </div>
          ))}
        </dl>
        <Button href={data.safeguards.link.href} variant="link" className="mt-12">
          {data.safeguards.link.label}
        </Button>
      </Section>

      <Section tone="deep" labelledBy="start-title">
        <Title id="start-title" stacked {...data.start.title} />
        <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {data.start.steps.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-6">
              <p className="t-num t-small font-medium text-signal">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="t-h3 mt-2">{step.title}</h3>
              <p className="mt-3 text-mist">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 ? (
        <Section labelledBy="articles-title">
          <Title id="articles-title" stacked {...data.articles.title} />
          <ul className="mt-10 max-w-[44rem] border-t border-line">
            {related.map((article) => (
              <li key={article.slug} className="border-b border-line">
                <Link href={`${blog.path}/${article.slug}`} className="group block py-5">
                  <span className="font-display font-semibold text-ink transition-colors duration-200 group-hover:text-signal">
                    {fullTitle(article)}
                  </span>
                  <span className="t-small t-num mt-1 block text-mist">
                    {formatDate(article.published)} · {readingTime(article)} {blog.labels.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Button href={data.articles.link.href} variant="link" className="mt-8">
            {data.articles.link.label}
          </Button>
        </Section>
      ) : null}

      <Section tone={related.length > 0 ? 'deep' : 'night'} labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Title id="faq-title" stacked {...data.faqTitle} />
          <Faq items={data.faq} />
        </div>
      </Section>

      <FinalCta tone={related.length > 0 ? 'night' : 'deep'} {...data.closing} />
    </>
  )
}
