import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages.pme.meta.title,
  description: sectorPages.pme.meta.description,
}

export default function Page() {
  return <SectorPage sector="pme" />
}