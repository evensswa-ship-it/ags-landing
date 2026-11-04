/**
 * Événements GA4. Sans gtag (script pas encore chargé, bloqueur) : rien n’est envoyé.
 * Le consentement reste géré par Google Consent Mode : refusé, GA4 ne dépose aucun cookie.
 */
export type TrackEvent =
  | { name: 'diagnostic_click'; params: { from: string } }
  | { name: 'calculator_result'; params: { processus: string } }
  | { name: 'generate_lead'; params: { form: 'calculateur' | 'contact' } }

export function track({ name, params }: TrackEvent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
