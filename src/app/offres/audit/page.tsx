import type { Metadata } from 'next'
import { offerPages } from '@/data/offers'
import OfferPageLayout from '@/components/shared/OfferPageLayout'

const data = offerPages.audit

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
}

export default function AuditPage() {
  return <OfferPageLayout data={data} />
}