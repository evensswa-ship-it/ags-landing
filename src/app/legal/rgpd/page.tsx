import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'

const data = legalPages['rgpd']

export const metadata: Metadata = {
  title: `${data.title} — AGS & Co.`,
  description: data.subtitle,
}

export default function RgpdPage() {
  return <LegalPageLayout data={data} />
}