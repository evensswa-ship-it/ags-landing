import Image from 'next/image'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import Title from '@/components/ui/Title'
import AgentCard from '@/components/visuals/AgentCard'
import BeforeAfter from '@/components/visuals/BeforeAfter'
import Equation from '@/components/visuals/Equation'
import Flow from '@/components/visuals/Flow'
import Results from '@/components/visuals/Results'
import {
  about,
  changes,
  examples,
  finalCta,
  governance,
  hero,
  method,
  results,
  what,
} from '@/data/home'

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <section aria-labelledby="hero-title" className="hero-bg px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:pb-28">
        <div className="mx-auto max-w-page">
          <p className="t-small font-medium text-mist">{hero.eyebrow}</p>
          <Title as="h1" id="hero-title" stacked className="mt-6" {...hero.title} />
          <p className="t-lede mt-8 max-w-[36rem] text-ink">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </Button>
          </div>
          <p className="t-small mt-5 text-mist">{hero.note}</p>

          <div className="mt-16 lg:mt-24">
            <Flow steps={hero.flow} label={hero.flowLabel} />
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-6 lg:mt-12">
              <dl className="flex flex-wrap gap-x-10 gap-y-3">
                {hero.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline gap-3">
                    <dt className="t-small text-mist">{metric.label}</dt>
                    <dd className="t-num font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-ink">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Tag />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Ce qui change */}
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

      {/* 3 — Ce que fait AGS */}
      <Section tone="deep" labelledBy="what-title">
        <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-20">
          <Title id="what-title" stacked {...what.title} />
          <p className="t-lede">{what.text}</p>
        </div>
        <div className="mt-16 border-t border-line pt-12 lg:mt-24 lg:pt-16">
          <Equation {...what.equation} />
        </div>
      </Section>

      {/* 4 — Exemples */}
      <Section labelledBy="examples-title">
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

      {results.enabled ? <Results {...results} /> : null}

      {/* 5 — Méthode */}
      <Section tone="deep" labelledBy="method-title">
        <Title id="method-title" stacked {...method.title} />
        <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-0">
          {method.steps.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-6 lg:pr-12">
              <p className="t-num t-small font-medium text-mist">{i + 1}</p>
              <h3 className="t-h3 mt-3">{step.title}</h3>
              <p className="t-num t-small mt-1 font-medium text-signal">{step.duration}</p>
              <p className="t-lede mt-4">{step.text}</p>
            </li>
          ))}
        </ol>
        <Button href={method.link.href} variant="link" className="mt-12">
          {method.link.label}
        </Button>
      </Section>

      {/* 6 — Gouvernance */}
      <Section labelledBy="governance-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Title id="governance-title" stacked {...governance.title} />
            <p className="t-lede mt-8">{governance.intro}</p>
            <ul className="t-lede mt-3 grid gap-1.5 text-ink">
              {governance.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <p className="t-lede mt-5 text-ink">{governance.outro}</p>
            <Button href={governance.link.href} variant="link" className="mt-8">
              {governance.link.label}
            </Button>
          </div>
          <div className="lg:pt-3">
            <AgentCard {...governance.card} />
          </div>
        </div>
      </Section>

      {/* 7 — Derrière AGS */}
      <Section tone="deep" labelledBy="about-title">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={3213}
            height={4055}
            sizes="(min-width: 768px) 220px, 160px"
            className="h-auto w-40 rounded-card md:w-[13.75rem]"
          />
          <div>
            <Title id="about-title" stacked {...about.title} />
            <p className="t-lede mt-8 max-w-[40rem]">{about.text}</p>
            <Button href={about.link.href} variant="link" className="mt-8">
              {about.link.label}
            </Button>
          </div>
        </div>
      </Section>

      {/* 8 — Appel final */}
      <Section labelledBy="final-title">
        <Title id="final-title" className="max-w-[20ch]" {...finalCta.title} />
        <p className="t-lede mt-6">{finalCta.text}</p>
        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Button href={finalCta.primary.href}>{finalCta.primary.label}</Button>
          <Button href={finalCta.secondary.href} variant="link">
            {finalCta.secondary.label}
          </Button>
        </div>
      </Section>
    </>
  )
}
