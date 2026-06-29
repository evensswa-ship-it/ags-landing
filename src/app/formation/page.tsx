import type { Metadata } from 'next'
import { formationPage } from '@/data/pages'
import FormationPageContent from '@/components/shared/FormationPageContent'

export const metadata: Metadata = {
  title: formationPage.meta.title,
  description: formationPage.meta.description,
}

export default function FormationPage() {
  return <FormationPageContent />
}