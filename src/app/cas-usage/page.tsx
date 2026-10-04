import type { Metadata } from 'next'
import FinalCta from '@/components/layout/FinalCta'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import { casUsage } from '@/data/cas-usage'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(casUsage)

export default function CasUsagePage() {
  const { labels } = casUsage
  return (
    <>
      <JsonLd data={breadcrumbSchema(casUsage)} />
      <PageHero title={casUsage.title} intro={casUsage.intro} />

      {casUsage.groups.map((group, index) => (
        <Section key={group.name} tone={index % 2 === 0 ? 'deep' : 'night'}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <h2 className="t-h2 text-[clamp(1.75rem,3.2vw,2.75rem)] lg:sticky lg:top-28 lg:self-start">{group.name}</h2>
            <div className="grid gap-14">
              {group.cases.map((item) => (
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
          </div>
        </Section>
      ))}

      <FinalCta tone="deep" {...casUsage.closing} />
    </>
  )
}
