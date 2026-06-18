import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages.assurance.meta.title,
  description: sectorPages.assurance.meta.description,
}

export default function Page() {
  return <SectorPage sector="assurance" />
}