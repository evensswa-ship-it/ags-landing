import type { Metadata } from 'next'
import { accompagnementPage } from '@/data/pages'
import AccompagnementPageContent from '@/components/shared/AccompagnementPageContent'

export const metadata: Metadata = {
  title: accompagnementPage.meta.title,
  description: accompagnementPage.meta.description,
}

export default function AccompagnementPage() {
  return <AccompagnementPageContent />
}