import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages["expertise-comptable"].meta.title,
  description: sectorPages["expertise-comptable"].meta.description,
}

export default function Page() {
  return <SectorPage sector="expertise-comptable" />
}