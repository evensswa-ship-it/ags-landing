export const site = {
  name: 'AGS & Co',
  url: 'https://www.agsandco.fr',
  email: 'claude@agsandco.fr',
  linkedin: 'https://www.linkedin.com/company/agsandco/?viewAsMember=true',
  calendly: 'https://calendly.com/evens-agsandco/30min',
}

export const cta = {
  primary: { label: "Parler d’un processus", href: site.calendly },
  method: { label: 'Voir comment ça marche', href: '/methode' },
  useCases: { label: "Voir les cas d’usage", href: '/#cas-usage' },
  governance: { label: 'Comment vos données sont protégées', href: '/gouvernance' },
  write: { label: 'Ou décrivez-le par écrit', href: '/contact' },
}

export const nav = {
  mainLabel: 'Navigation principale',
  homeLabel: "AGS & Co, retour à l’accueil",
  menuLabel: 'Menu',
  closeLabel: 'Fermer le menu',
  links: [
    { label: "Cas d’usage", href: '/#cas-usage' },
    { label: 'Méthode & offres', href: '/methode' },
    { label: 'Gouvernance', href: '/gouvernance' },
    { label: 'À propos', href: '/a-propos' },
  ],
}

export const footer = {
  tagline: { lead: "L’IA au travail.", rest: 'Sous contrôle.' },
  place: 'Rouen, Normandie',
  linkedinLabel: 'LinkedIn',
  pagesLabel: 'Pages',
  legalLabel: 'Informations légales',
  contactLabel: 'Contact',
  pages: [
    { label: 'Accueil', href: '/' },
    { label: "Cas d’usage", href: '/#cas-usage' },
    { label: 'Méthode & offres', href: '/methode' },
    { label: 'Gouvernance', href: '/gouvernance' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/legal/mentions-legales' },
    { label: 'Confidentialité', href: '/legal/confidentialite' },
    { label: 'Données & RGPD', href: '/legal/rgpd' },
    { label: 'Cookies', href: '/legal/cookies' },
  ],
  partners: {
    text: 'Vous êtes ESN, cabinet, intégrateur ou expert métier ?',
    link: 'Parlons partenariat.',
    href: '/contact',
  },
  copyright: '© 2026 AGS & Co',
}

export const illustrativeTag = 'Exemple illustratif'

export const seo = {
  skipLabel: 'Aller au contenu',
  serviceType: "Intégration de l’IA et automatisation des processus",
  keywords: [
    'intégration IA',
    'agents IA',
    'automatisation des processus',
    'IA PME',
    'IA ETI',
    'gouvernance IA',
  ],
  home: {
    title: "AGS & Co · Intégration de l’IA et automatisation des processus pour PME et ETI",
    description:
      "AGS & Co connecte l’IA à vos outils pour prendre en charge les tâches répétitives : dix cas d’usage par fonction, agents IA, automatisation des processus, gouvernance IA. Pour PME et ETI, depuis Rouen.",
  },
}
