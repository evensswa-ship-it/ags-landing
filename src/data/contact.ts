import { cta } from './site'

export const contact = {
  path: '/contact',
  breadcrumb: 'Contact',
  meta: {
    title: "Contact : parlez-nous d’un processus · AGS & Co",
    description:
      '30 minutes offertes pour parler du processus qui vous fait perdre du temps. Sans engagement.',
  },
  title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
  intro: '30 minutes pour en parler, sans engagement.',
  booking: {
    title: 'Réserver un échange',
    text: "Choisissez un créneau de 30 minutes. C’est offert.",
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
