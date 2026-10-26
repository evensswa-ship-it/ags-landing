import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'
import { pageMetadata } from '@/lib/seo'

const data = legalPages['cookies']

export const metadata: Metadata = pageMetadata({
  path: '/legal/cookies',
  breadcrumb: data.title,
  meta: { title: `${data.title} — AGS & Co.`, description: data.subtitle },
})

export default function CookiesPage() {
  return <LegalPageLayout data={data} />
}