/**
 * Page /rencontre : arrivée du QR code des cartes de visite (https://agsandco.fr/rencontre?src=carte).
 * Non indexée, absente du menu et du sitemap. Textes fournis par Evens, à reprendre mot pour mot.
 */
export const rencontre = {
  path: '/rencontre',
  metaTitle: 'Ravi de vous avoir rencontré | AGS & Co',
  metaDescription: 'Evens Augustin, fondateur d’AGS & Co : votre fiche offerte et un échange de 45 minutes.',
  title: 'Ravi de vous avoir rencontré.',
  intro:
    'Je suis Evens Augustin, fondateur d’AGS & Co. J’installe des collaborateurs IA dans les cabinets de courtage en assurance et les entreprises de services. Ils prennent en charge les tâches répétitives, vos équipes gardent le contrôle.',
  fiche: {
    title: 'Votre fiche offerte : vos devis à relancer, prêts chaque lundi à 8 h.',
    text: 'Une page, une consigne à copier. Chaque lundi, vous trouvez la liste des devis sans réponse, avec un projet de relance pour chacun. Vous relisez, vous envoyez. Rien ne part sans vous.',
    pdf: '/fiches/devis-a-relancer-chaque-lundi.pdf',
  },
  form: {
    firstName: 'Prénom',
    email: 'E-mail professionnel',
    company: 'Entreprise',
    optional: '(facultatif)',
    consent:
      'J’accepte de recevoir la fiche par e-mail ainsi que deux e-mails de suivi d’AGS & Co. Je peux me désinscrire à tout moment.',
    submit: 'Recevoir la fiche',
    sending: 'Envoi…',
    emailError: 'Vérifiez l’adresse e-mail.',
    privacy:
      'Vos données sont utilisées uniquement par AGS & Co (Evens Augustin, EI) pour vous envoyer la fiche et deux e-mails de suivi. Elles ne sont ni vendues ni partagées, et sont conservées 3 ans au plus après notre dernier échange. Vous pouvez y accéder, les corriger ou les supprimer en écrivant à evens@agsandco.fr.',
    privacyLink: { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
    success: 'C’est envoyé. Vous recevez la fiche dans quelques minutes. Vous pouvez aussi la télécharger ici :',
    download: 'Télécharger la fiche',
  },
  meeting: {
    title: 'Vous préférez en parler directement ?',
    text: '45 minutes pour regarder vos tâches qui reviennent chaque semaine, et ce qu’un collaborateur IA pourrait reprendre.',
    label: 'Réserver un échange de 45 min',
    href: 'https://calendly.com/evens-agsandco/45min',
  },
  footer: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/evens-augustin-3b6b65256/' },
    site: { label: 'Le site', href: 'https://agsandco.fr' },
    phone: { label: '07 49 21 35 05', href: 'tel:+33749213505' },
  },
}

/** Valeur de ?src= nettoyée (lettres, chiffres, tirets), « direct » par défaut. */
export function cleanSrc(value: unknown): string {
  const raw = Array.isArray(value) ? value[0] : value
  if (typeof raw !== 'string') return 'direct'
  const src = raw.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)
  return src || 'direct'
}
