import type { Metadata } from 'next'
import { legalPages } from '@/data/legal'
import LegalPageLayout from '@/components/shared/LegalPageLayout'

const data = legalPages['mentions-legales']

export const metadata: Metadata = {
  title: `${data.title} — AGS & Co.`,
  description: data.subtitle,
}

export default function MentionsLegalesPage() {
  return <LegalPageLayout data={data} />
}