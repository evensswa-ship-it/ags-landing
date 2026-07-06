import type { Metadata } from 'next'
import { offerPages } from '@/data/offers'
import OfferPageLayout from '@/components/shared/OfferPageLayout'

const data = offerPages.audit

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Audit opérationnel',
    description: data.meta.description,
    provider: { '@id': 'https://www.agsandco.fr/#organization' },
    areaServed: 'FR',
    serviceType: 'Audit opérationnel',
    url: 'https://www.agsandco.fr/offres/audit',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.agsandco.fr' },
      { '@type': 'ListItem', position: 2, name: 'Audit opérationnel', item: 'https://www.agsandco.fr/offres/audit' },
    ],
  },
]

export default function AuditPage() {
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