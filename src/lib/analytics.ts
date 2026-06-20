// Custom GA4 events — AGS & Co.
// Structure documentée, PAS encore active.
// Activer après validation du tracking de base dans le dashboard GA4.
//
// Étapes d'activation :
// 1. Vérifier que les pages vues remontent dans GA4 Temps réel
// 2. Décommenter les fonctions ci-dessous
// 3. Appeler chaque fonction à l'endroit indiqué dans le commentaire

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

// ─── audit_booking_click ────────────────────────────────────────────────────
// Déclencheur : click sur "Réserver un appel découverte"
//   → Nav.tsx (bouton CTA), Hero.tsx (primaryCta), Philosophy.tsx (CTA), Offer.tsx (items)
//
// export function trackAuditBookingClick(source: 'nav' | 'hero' | 'philosophy' | 'offer') {
//   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
//     window.gtag('event', 'audit_booking_click', {
//       event_category: 'conversion',
//       event_label: source,
//     })
//   }
// }

// ─── cockpit_demo_click ─────────────────────────────────────────────────────
// Déclencheur : click sur "Voir comment ça fonctionne" (CTA secondaire Hero)
//   → Hero.tsx (secondaryCta)
//
// export function trackCockpitDemoClick() {
//   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
//     window.gtag('event', 'cockpit_demo_click', {
//       event_category: 'engagement',
//       event_label: 'CTA secondaire Hero',
//     })
//   }
// }

// ─── contact_form_submit ─────────────────────────────────────────────────────
// Déclencheur : succès du submit Formspree dans Contact.tsx (callback onSuccess)
//   → Contact.tsx (après fetch vers formspree.io/f/mdajrjnp réponse 200)
//
// export function trackContactFormSubmit(sector?: string) {
//   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
//     window.gtag('event', 'contact_form_submit', {
//       event_category: 'conversion',
//       event_label: sector ?? 'Secteur non renseigné',
//     })
//   }
// }

export {}
