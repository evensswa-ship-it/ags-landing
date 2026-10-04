import type { Metadata } from 'next'
import FinalCta from '@/components/layout/FinalCta'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Title id="sheet-title" stacked {...sheet.title} />
          <article className="rounded-card border border-line bg-deep p-6 sm:p-9">
            <header className="border-b border-line pb-5">
              <p className="t-small text-mist">{sheet.kind}</p>
              <h3 className="t-h3 mt-1">{sheet.name}</h3>
            </header>
            <ul>
              {sheet.rows.map((row) => (
                <li
                  key={row.label}
                  className={`border-b border-line py-3.5 last:border-b-0 last:pb-0 ${row.human ? 'font-medium text-human' : 'text-ink'}`}
                >
                  {row.label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {gouvernance.notes.map((note) => (
            <div key={note.title} className="border-t border-line pt-7">
              <h2 className="t-h3">{note.title}</h2>
              <p className="mt-4 text-mist">{note.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta {...gouvernance.closing} />
    </>
  )
}
