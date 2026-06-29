import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'

const data = legalPages['cookies']

export const metadata: Metadata = {
  title: `${data.title} — AGS & Co.`,
  description: data.subtitle,
}

export default function CookiesPage() {
  return <LegalPageLayout data={data} />
}