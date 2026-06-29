import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages["expertise-comptable"].meta.title,
  description: sectorPages["expertise-comptable"].meta.description,
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agsandco.fr' },
    { '@type': 'ListItem', position: 2, name: 'Expertise comptable', item: 'https://agsandco.fr/secteurs/expertise-comptable' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SectorPage sector="expertise-comptable" />
    </>
  )
}