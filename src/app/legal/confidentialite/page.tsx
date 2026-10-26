import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'
import { pageMetadata } from '@/lib/seo'

const data = legalPages['confidentialite']

export const metadata: Metadata = pageMetadata({
  path: '/legal/confidentialite',
  breadcrumb: data.title,
  meta: { title: `${data.title} — AGS & Co.`, description: data.subtitle },
})

export default function ConfidentialitePage() {
  return <LegalPageLayout data={data} />
}