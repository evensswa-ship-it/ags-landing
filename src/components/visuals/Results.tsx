import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'

type Metric = { label: string; before: string; after: string }

/**
 * Résultats avant / après d'un vrai cas client.
 * Affiché uniquement quand `results.enabled` vaut true dans src/data/home.ts.
 */
export default function Results({
  title,
  context,
  metrics,
}: {
  title: { lead: string; rest: string }
  context: string
  metrics: Metric[]
}) {
  return (
    <Section tone="deep" labelledBy="results-title">
      <Title id="results-title" stacked {...title} />
      {context ? <p className="t-lede mt-6 max-w-[40rem]">{context}</p> : null}
      <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="border-t border-line pt-6">
            <dt className="t-small text-mist">{metric.label}</dt>
            <dd className="mt-3">
              <span className="t-num t-small block text-mist">{metric.before}</span>
              <span className="t-num t-h2 block text-signal">{metric.after}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
