import type { Metadata } from 'next'
import LocalPage from '@/components/layout/LocalPage'
import { paris } from '@/data/local'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(paris)

export default function ParisPage() {
  return <LocalPage data={paris} />
}
