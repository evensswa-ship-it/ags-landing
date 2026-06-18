import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages.cgp.meta.title,
  description: sectorPages.cgp.meta.description,
}

export default function Page() {
  return <SectorPage sector="cgp" />
}