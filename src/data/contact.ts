import { cta } from './site'

export const contact = {
  path: '/contact',
  breadcrumb: 'Contact',
  meta: {
    title: "Contact : réservez un diagnostic gratuit · AGS & Co",
    description:
      'Un diagnostic initial gratuit de 45 minutes pour parler du processus qui vous fait perdre du temps. Sans engagement.',
  },
  title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
  intro: "Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.",
  booking: {
    title: 'Réserver un diagnostic',
    text: "Choisissez un créneau de 45 minutes. C’est gratuit et sans engagement.",
    button: cta.primary,
  },
  form: {
    title: 'Ou décrivez-le par écrit',
    endpoint: 'https://formspree.io/f/mdajrjnp',
    subject: 'Prise de contact — AGS & Co',
    placeholder: 'Sélectionner',
    fields: {
      firstName: 'Prénom',
      email: 'Email professionnel',
      audience: 'Vous êtes',
      size: 'Taille',
      message: 'Le processus qui vous coûte le plus de temps',
    },
    audience: ['Une entreprise', 'Un partenaire potentiel'],
    sizes: ['Moins de 50 salariés', '50 à 250', '250 à 5 000', 'Plus de 5 000'],
    rgpd: "Vos données sont utilisées uniquement pour traiter votre demande. Conformément au RGPD, vous disposez d’un droit d’accès et de suppression : evens@agsandco.fr",
    aiNotice: 'Votre message peut être préparé par un collaborateur IA ; une personne valide chaque réponse.',
    submit: 'Envoyer',
    sending: 'Envoi en cours…',
    success: 'Message envoyé. On vous répond sous 24 h.',
    error: 'Le message n’est pas parti. Réessayez, ou écrivez-nous à evens@agsandco.fr.',
  },
}
