import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Montserrat, Geist, Geist_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { MicrosoftClarity } from '@/components/MicrosoftClarity'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'AGS & Co. – Automatisation opérationnelle pour dirigeants et cabinets',
  description:
    "AGS & Co. conçoit des assistants IA opérationnels pour PME, courtiers et cabinets. Moins de tâches répétitives, plus de temps sur l'essentiel. Audit gratuit de 60 min.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AGS & Co.',
  url: 'https://agsandco.fr',
  email: 'contact@agsandco.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '59 rue de Ponthieu, Bureau 326',
    addressLocality: 'Paris',
    postalCode: '75008',
    addressCountry: 'FR',
  },
  description: 'Cabinet IA opérationnel spécialisé en automatisation pour PME, courtiers et cabinets.',
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {CLARITY_ID && <MicrosoftClarity clarityId={CLARITY_ID} />}
      </body>
    </html>
  )
}
