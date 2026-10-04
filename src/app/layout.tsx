import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Inter_Tight } from 'next/font/google'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { MicrosoftClarity } from '@/components/MicrosoftClarity'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { seo } from '@/data/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#050A18',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agsandco.fr'),
  title: seo.home.title,
  description: seo.home.description,
  keywords: seo.keywords,
  authors: [{ name: 'Evens Augustin', url: 'https://www.agsandco.fr' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  verification: {
    google: 'xHZl6-yn5BBwQAYaLuoMN-TlhrWJx2fK8Yxn9ktorQU',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.agsandco.fr',
    siteName: 'AGS & Co',
    title: seo.home.title,
    description: seo.home.description,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

const siteSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    '@id': 'https://www.agsandco.fr/#organization',
    name: 'AGS & Co',
    url: 'https://www.agsandco.fr',
    email: 'contact@agsandco.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 rue de Ponthieu, Bureau 326',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
    },
    areaServed: 'FR',
    serviceType: seo.serviceType,
    description: seo.home.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Evens Augustin',
    jobTitle: 'Fondateur',
    url: 'https://www.agsandco.fr/a-propos',
    worksFor: { '@id': 'https://www.agsandco.fr/#organization' },
  },
]

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID
const AXEPTIO_ID = process.env.NEXT_PUBLIC_AXEPTIO_PROJECT_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemas) }}
        />
      </head>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-signal focus:px-5 focus:py-3 focus:font-semibold focus:text-night"
        >
          {seo.skipLabel}
        </a>
        <Nav />
        <main id="contenu">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {CLARITY_ID && <MicrosoftClarity clarityId={CLARITY_ID} />}
        {AXEPTIO_ID && (
          <>
            <Script id="axeptio-init" strategy="afterInteractive">{`
              window.axeptioSettings = {
                clientId: "${AXEPTIO_ID}",
                cookiesVersion: "8a8cf65a-9113-49cc-9955-254378b29cb9",
                googleConsentMode: {
                  default: {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    wait_for_update: 500
                  }
                }
              };
            `}</Script>
            <Script src="https://static.axept.io/sdk.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  )
}
