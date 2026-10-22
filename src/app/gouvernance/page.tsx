import type { Metadata } from 'next'
import FinalCta from '@/components/layout/FinalCta'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import Title from '@/components/ui/Title'
import { gouvernance } from '@/data/gouvernance'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(gouvernance)

export default function GouvernancePage() {
  const { sheet } = gouvernance
  return (
    <>
      <JsonLd data={breadcrumbSchema(gouvernance)} />
      <PageHero title={gouvernance.title} intro={gouvernance.intro} />

      <Section tone="deep">
        <ul className="grid gap-x-16 md:grid-cols-2">
          {gouvernance.domains.map((domain) => (
            <li key={domain.title} className="border-t border-line py-8">
              <h2 className={`t-h3 ${domain.human ? 'text-human' : ''}`}>{domain.title}</h2>
              {domain.term ? <p className="t-small mt-1 text-mist">{domain.term}</p> : null}
              <p className="t-lede mt-4">{domain.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="sheet-title">
        <div className="grid gap-12 lg:grid-cols-[4fr_7fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Title id="sheet-title" stacked className="text-[clamp(2.05rem,3.4vw,3rem)]" {...sheet.title} />
            <p className="t-lede mt-8">{sheet.intro}</p>
          </div>
          <article className="rounded-card border border-line bg-deep p-6 sm:p-9">
            <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="t-small text-mist">{sheet.kind}</p>
                <h3 className="t-h3 mt-1">{sheet.name}</h3>
                <p className="mt-1 text-mist">{sheet.mission}</p>
              </div>
              <Tag />
            </header>
            <dl>
              {sheet.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-line py-4 last:border-b-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className={`t-small font-medium ${row.human ? 'text-human' : 'text-mist'}`}>{row.label}</dt>
                  <dd className={row.human ? 'text-human' : 'text-ink'}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {gouvernance.notes.map((note) => (
            <div key={note.title} className="border-t border-line pt-7">
              <h2 className="t-h3">{note.title}</h2>
              <p className="mt-4 text-mist">{note.text}</p>
              {note.more ? <p className="mt-4 text-mist">{note.more}</p> : null}
            </div>
          ))}
        </div>
      </Section>

      <FinalCta {...gouvernance.closing} />
    </>
  )
}
