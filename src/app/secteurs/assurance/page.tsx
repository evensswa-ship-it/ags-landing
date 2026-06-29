import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages.assurance.meta.title,
  description: sectorPages.assurance.meta.description,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agsandco.fr' },
    { '@type': 'ListItem', position: 2, name: 'Assurance', item: 'https://agsandco.fr/secteurs/assurance' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SectorPage sector="assurance" />
    </>
  )
}