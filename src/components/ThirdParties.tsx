'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { MicrosoftClarity } from '@/components/MicrosoftClarity'
import { site } from '@/data/site'
import { track } from '@/lib/analytics'

const WAKE_EVENTS = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'mousemove'] as const
const FALLBACK_DELAY_MS = 8000
/** Nom du service Clarity dans la configuration Axeptio (choix du visiteur). */
const AXEPTIO_CLARITY_VENDOR = 'clarity'

type AxeptioChoices = Record<string, boolean>
type AxeptioSdk = { on: (event: 'cookies:complete', callback: (choices: AxeptioChoices) => void) => void }

declare global {
  interface Window {
    _axcb?: ((sdk: AxeptioSdk) => void)[]
  }
}

/**
 * Bandeau de consentement, mesure d'audience et Clarity se chargent à la première interaction
 * du visiteur (ou après quelques secondes) : ils ne retardent plus l'affichage de la page.
 * Le consentement reste refusé par défaut tant que le visiteur n'a pas répondu au bandeau.
 */
export default function ThirdParties({
  gaId,
  clarityId,
  axeptioId,
}: {
  gaId?: string
  clarityId?: string
  axeptioId?: string
}) {
  const [ready, setReady] = useState(false)
  // Sans bandeau de consentement configuré (développement), Clarity se charge comme avant.
  const [clarityAllowed, setClarityAllowed] = useState(!axeptioId)

  // Clarity dépose des cookies : il n'est chargé qu'après l'accord du visiteur dans Axeptio.
  useEffect(() => {
    if (!axeptioId) return
    window._axcb = window._axcb || []
    window._axcb.push((sdk) => {
      sdk.on('cookies:complete', (choices) => setClarityAllowed(Boolean(choices[AXEPTIO_CLARITY_VENDOR])))
    })
  }, [axeptioId])

  // Clic vers la prise de rendez-vous, où qu'il soit sur le site.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]')
      if (link instanceof HTMLAnchorElement && link.href.startsWith(site.calendly)) {
        track({ name: 'diagnostic_click', params: { from: window.location.pathname } })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const wake = () => setReady(true)
    const timer = window.setTimeout(wake, FALLBACK_DELAY_MS)
    WAKE_EVENTS.forEach((name) =>
      window.addEventListener(name, wake, { once: true, passive: true }),
    )
    return () => {
      window.clearTimeout(timer)
      WAKE_EVENTS.forEach((name) => window.removeEventListener(name, wake))
    }
  }, [])

  if (!ready) return null

  return (
    <>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {clarityId && clarityAllowed ? <MicrosoftClarity clarityId={clarityId} /> : null}
      {axeptioId ? (
        <>
          <Script id="axeptio-init" strategy="afterInteractive">{`
            window.axeptioSettings = {
              clientId: "${axeptioId}",
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
      ) : null}
    </>
  )
}
