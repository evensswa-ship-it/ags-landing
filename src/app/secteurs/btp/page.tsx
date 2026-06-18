import type { Metadata } from 'next'
import { sectorPages } from '@/data/content'
import SectorPage from '@/components/SectorPage'

export const metadata: Metadata = {
  title: sectorPages.btp.meta.title,
  description: sectorPages.btp.meta.description,
}

export default function Page() {
  return <SectorPage sector="btp" />
}