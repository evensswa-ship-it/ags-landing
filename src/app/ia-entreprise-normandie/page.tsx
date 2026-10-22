import type { Metadata } from 'next'
import LocalPage from '@/components/layout/LocalPage'
import { normandie } from '@/data/local'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(normandie)

export default function NormandiePage() {
  return <LocalPage data={normandie} />
}
