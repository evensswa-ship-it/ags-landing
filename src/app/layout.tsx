import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Montserrat } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'AGS & Co. | Assistants opérationnels intelligents',
  description:
    'AGS & Co. conçoit des assistants opérationnels sur mesure pour réduire la charge mentale, structurer les flux et rendre du temps aux équipes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
