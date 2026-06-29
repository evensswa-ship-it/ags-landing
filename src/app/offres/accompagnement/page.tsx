import type { Metadata } from 'next'
import { offerPages } from '@/data/offers'
import OfferPageLayout from '@/components/shared/OfferPageLayout'

const data = offerPages.accompagnement

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Accompagnement continu',
    description: data.meta.description,
    provider: { '@id': 'https://agsandco.fr/#organization' },
    areaServed: 'FR',
    serviceType: 'Accompagnement opérationnel',
    url: 'https://agsandco.fr/offres/accompagnement',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agsandco.fr' },
      { '@type': 'ListItem', position: 2, name: 'Accompagnement continu', item: 'https://agsandco.fr/offres/accompagnement' },
    ],
  },
]

export default function AccompagnementOffrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <OfferPageLayout data={data} />
    </>
  )
}