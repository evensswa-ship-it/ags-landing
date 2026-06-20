'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname()

  // Fires gtag('config') on each client-side navigation — tracks page views in SPA mode
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', gaId, { page_path: pathname })
    }
  }, [pathname, gaId])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
