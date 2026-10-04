import FinalCta from '@/components/layout/FinalCta'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import Tag from '@/components/ui/Tag'
import Title from '@/components/ui/Title'
import AgentAvatar from '@/components/visuals/AgentAvatar'
import PersonCard from '@/components/visuals/PersonCard'
import Flow from '@/components/visuals/Flow'
import Results from '@/components/visuals/Results'
import { casUsage } from '@/data/cas-usage'
import { about, finalCta, hero, links, results } from '@/data/home'

export default function Home() {
  const { labels } = casUsage
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

      {/* 2 — Cas d’usage */}
      <section
        id="cas-usage"
        aria-labelledby="cas-usage-title"
        className="bg-night px-5 pt-[clamp(4.5rem,11vw,9.5rem)] sm:px-8"
      >
        <div className="mx-auto max-w-page">
          <Title id="cas-usage-title" stacked className="max-w-[22ch]" {...casUsage.title} />
          <p className="t-lede mt-8 max-w-[38rem]">{casUsage.intro}</p>
        </div>
      </section>

      {casUsage.groups.map((group, index) => {
        const last = index === casUsage.groups.length - 1
        return (
          <Section key={group.name} tone={index % 2 === 0 ? 'night' : 'deep'}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
              <div className="grid gap-7 lg:sticky lg:top-28 lg:self-start">
                <h3 className="t-h2 text-[clamp(1.75rem,3.2vw,2.75rem)]">{group.name}</h3>
                <AgentAvatar {...group.avatar} kind={labels.agentKind} role={group.name} />
              </div>
              <div className="grid gap-14">
                {group.cases.map((item) => (
                  <article key={item.title} className="border-t border-line pt-7">
                    <h4 className="t-h3">{item.title}</h4>
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
            {last ? (
              <>
                <p className="t-small mt-14 text-mist">{labels.aiNotice}</p>
                <div className="mt-10 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:gap-10">
                  {links.map((link) => (
                    <Button key={link.href} href={link.href} variant="link">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </>
            ) : null}
          </Section>
        )
      })}

      {results.enabled ? <Results {...results} /> : null}

      {/* 3 — Derrière AGS */}
      <Section tone="deep" labelledBy="about-title">
        <Title id="about-title" stacked {...about.title} />
        <div className="mt-14 grid max-w-[54rem] gap-6 md:grid-cols-2">
          {about.people.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
        <Button href={about.link.href} variant="link" className="mt-10">
          {about.link.label}
        </Button>
      </Section>

      {/* 4 — Appel final */}
      <FinalCta {...finalCta} />
    </>
  )
}
