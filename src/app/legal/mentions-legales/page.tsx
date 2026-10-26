import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'
import { pageMetadata } from '@/lib/seo'

const data = legalPages['mentions-legales']

export const metadata: Metadata = pageMetadata({
  path: '/legal/mentions-legales',
  breadcrumb: data.title,
  meta: { title: `${data.title} — AGS & Co.`, description: data.subtitle },
})

export default function MentionsLegalesPage() {
  return <LegalPageLayout data={data} />
}