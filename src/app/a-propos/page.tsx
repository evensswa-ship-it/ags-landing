import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import { aPropos } from '@/data/a-propos'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(aPropos)

export default function AProposPage() {
  const { partners } = aPropos
  return (
    <>
      <JsonLd data={breadcrumbSchema(aPropos)} />
      <PageHero title={aPropos.title} intro={aPropos.intro} />

      {aPropos.people.map((person, index) => (
        <Section key={person.name} tone={index % 2 === 0 ? 'deep' : 'night'}>
          <article className="grid gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16 lg:gap-24">
            <div className="relative aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-card border border-line">
              <Image
                src={person.photo.src}
                alt={person.photo.alt}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover object-top saturate-[0.8]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-night to-transparent"
              />
            </div>
            <div>
              <h2 className="t-h2">{person.name}</h2>
              <p className="mt-3 font-medium text-signal">{person.role}</p>
              <div className="t-lede mt-8 grid max-w-[40rem] gap-5">
                {person.paragraphs.map((paragraph, i) => (
                  <p key={paragraph} className={i === 0 ? 'text-ink' : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </Section>
      ))}

      <Section tone="deep" labelledBy="partners-title">
        <Title id="partners-title" stacked className="max-w-[26ch]" {...partners.title} />
        <ul className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-14">
          {partners.items.map((item) => (
            <li key={item.title} className="border-t border-line pt-7">
              <h3 className="t-h3">{item.title}</h3>
              <p className="t-lede mt-3">{item.text}</p>
            </li>
          ))}
        </ul>
        <Button href={partners.link.href} variant="link" className="mt-12">
          {partners.link.label}
        </Button>
      </Section>
    </>
  )
}
