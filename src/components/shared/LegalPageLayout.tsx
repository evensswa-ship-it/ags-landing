import Title from '@/components/ui/Title'
import { lastUpdated, legalChrome } from '@/data/legal'
import type { LegalPageData } from '@/data/legal'

export default function LegalPageLayout({ data }: { data: LegalPageData }) {
  return (
    <article className="bg-night px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-[46rem]">
        <p className="t-small font-medium text-mist">{legalChrome.eyebrow}</p>
        <Title as="h1" size="h2" className="mt-4" lead={data.title} />
        <p className="t-lede mt-5">{data.subtitle}</p>
        <p className="t-small mt-2 text-mist">
          {legalChrome.updated} {lastUpdated}
        </p>

        <div className="mt-14 grid gap-12">
          {data.sections.map((section) => (
            <section key={section.heading} className="border-t border-line pt-8">
              <h2 className="t-h3">{section.heading}</h2>
              <div className="mt-4 grid gap-1 text-mist">
                {section.content.split('\n').map((line, j) =>
                  line === '' ? <div key={j} className="h-3" /> : <p key={j}>{line}</p>,
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
