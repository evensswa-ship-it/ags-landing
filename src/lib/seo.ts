import type { Metadata } from 'next'
import { site } from '@/data/site'

type PageInfo = { path: string; breadcrumb: string; meta: { title: string; description: string } }

export function pageMetadata({ path, meta }: PageInfo): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: site.name,
      url: path,
      title: meta.title,
      description: meta.description,
    },
  }
}

export function breadcrumbSchema({ path, breadcrumb }: PageInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
      { '@type': 'ListItem', position: 2, name: breadcrumb, item: `${site.url}${path}` },
    ],
  }
}
