import type { Metadata } from 'next'
import Script from 'next/script'
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
  metadataBase: new URL('https://agsandco.fr'),
  title: "AGS & Co. – Cabinet d'optimisation des opérations métier",
  description:
    "AGS & Co. identifie vos frictions opérationnelles et déploie des copilotes métier sur mesure pour PME et ETI. Audit gratuit 60 min, sans engagement. Paris.",
  keywords: ['optimisation opérations', 'copilotes métier', 'automatisation', 'PME ETI', 'audit opérationnel', 'Paris'],
  authors: [{ name: 'Evens Augustin', url: 'https://agsandco.fr' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://agsandco.fr',
    siteName: 'AGS & Co.',
    title: "AGS & Co. – Cabinet d'optimisation des opérations métier",
    description:
      "Identifiez vos frictions opérationnelles et déployez des copilotes métier sur mesure. Audit gratuit 60 min, sans engagement.",
    images: [{ url: '/logo.png', width: 400, height: 400, alt: 'AGS & Co.' }],
  },
  twitter: {
    card: 'summary',
    title: "AGS & Co. – Cabinet d'optimisation des opérations métier",
    description:
      "Identifiez vos frictions opérationnelles et déployez des copilotes métier sur mesure. Audit gratuit 60 min, sans engagement.",
    images: ['/logo.png'],
  },
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
  description: "Cabinet d'optimisation des opérations métier, spécialisé dans les copilotes sur mesure pour PME, ETI et organisations.",
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
const AXEPTIO_ID = process.env.NEXT_PUBLIC_AXEPTIO_PROJECT_ID

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
        {AXEPTIO_ID && (
          <>
            <Script id="axeptio-init" strategy="afterInteractive">{`
              window.axeptioSettings = {
                clientId: "${AXEPTIO_ID}",
                cookiesVersion: "agsandco-fr",
              };
            `}</Script>
            <Script src="https://static.axept.io/sdk.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  )
}