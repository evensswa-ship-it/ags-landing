import { cta } from './site'
import { contact } from './contact'

/**
 * Version web simplifiée du classeur « AGS_Calculateur_Cout_Processus » (Google Sheets).
 * Mêmes formules, moins de champs : temps direct et temps indirect sont saisis en un total chacun.
 */
export const calculateur = {
  path: cta.calculator.href,
  breadcrumb: 'Calculateur',
  meta: {
    title: 'Combien coûte votre processus ? Calculateur · AGS & Co',
    description:
      'Calculez en 2 minutes ce que coûte réellement un processus manuel : temps direct, temps perdu autour, erreurs. Gratuit, sans inscription.',
  },
  hero: {
    title: { lead: 'Combien coûte votre processus ?', rest: 'Le vrai chiffre, en 2 minutes.' },
    text: 'Un processus coûte ce que coûtent ses répétitions, ses passages de main et ses erreurs. Pas seulement le temps × le salaire.',
    note: 'Gratuit · sans inscription · le calcul se fait dans votre navigateur',
  },
  form: {
    sections: {
      process: '1 · Le processus',
      time: '2 · Le temps passé',
      errors: '3 · Les erreurs',
      cost: '4 · Le coût d’une heure',
    },
    fields: {
      name: { label: 'Nom du processus', placeholder: 'Ex. : traitement des demandes de devis' },
      fonction: { label: 'Fonction' },
      volume: { label: 'Volume', hint: 'Dossiers, demandes, factures ou devis traités' },
      period: { label: 'Par' },
      direct: {
        label: 'Temps de travail par dossier',
        hint: 'Traitement, contrôle, validation, recherche, ressaisie, relance. Toutes personnes confondues.',
        unit: 'min',
      },
      indirect: {
        label: 'Temps perdu autour',
        hint: 'Interruptions, reprises après un passage de main, coordination, dossiers à reprendre.',
        unit: 'min',
      },
      errorRate: { label: 'Dossiers avec une erreur à corriger', unit: '%' },
      errorTime: { label: 'Temps de correction d’une erreur', unit: 'min' },
      errorCost: { label: 'Coût externe d’une erreur', hint: 'Avoir, pénalité, geste commercial. 0 si inconnu.', unit: '€' },
      salary: {
        label: 'Coût annuel chargé d’un salarié',
        hint: 'Salaire brut annuel + charges patronales. Base : 1 607 heures par an.',
        unit: '€ / an',
      },
      manual: {
        label: 'Part du travail faite à la main',
        hint: 'Hors ce qui est déjà outillé ou automatisé. 100 % si rien ne l’est.',
        unit: '%',
      },
      reduction: { label: 'Part du travail manuel que vous visez à réduire' },
    },
    placeholder: 'Sélectionner',
    fonctions: ['Commercial', 'Service client', 'Administration', 'Finance', 'RH', 'Opérations', 'Direction'],
    periods: [
      { value: 'day', label: 'jour', perMonth: 21 },
      { value: 'week', label: 'semaine', perMonth: 4.33 },
      { value: 'month', label: 'mois', perMonth: 1 },
    ],
    reductions: [0.2, 0.4, 0.6, 0.8],
    defaultReduction: 0.4,
    hoursPerYear: 1607,
  },
  results: {
    title: 'Ce que coûte ce processus',
    empty: 'Renseignez le volume et le temps par dossier : le résultat s’affiche ici.',
    tag: 'Estimation à partir de vos chiffres',
    labels: {
      hoursMonth: 'Heures par mois',
      costMonth: 'Coût total par mois',
      costYear: 'Coût total par an',
      invisible: 'Part du coût invisible',
      invisibleHint: 'Temps perdu autour + erreurs',
      perItem: 'Coût par dossier',
      recoverable: 'Valeur récupérable par an',
      recoverableHint: 'Selon la part visée, sur le travail fait à la main : temps récupéré × coût horaire + erreurs évitées.',
    },
    needSalary: 'Ajoutez le coût annuel chargé pour voir les montants en euros.',
    above: 'Votre processus dépasse 20 heures ou 1 000 € par mois : il mérite probablement une analyse plus approfondie.',
    below: 'Sous 20 heures et 1 000 € par mois : gardez-le en observation et comparez-le à vos autres processus.',
    limits:
      'Les résultats ne valent que ce que valent vos chiffres : mesurez-les sur une à deux semaines plutôt que de mémoire. La valeur récupérable n’est pas une économie de salaire : le temps libéré devient une valeur s’il est réalloué.',
  },
  lead: {
    title: 'Recevez votre estimation et parlons-en.',
    text: 'On vous renvoie le calcul et on regarde ensemble ce qui est vraiment récupérable. Ou réservez directement un diagnostic gratuit de 45 minutes.',
    primary: cta.primary,
    endpoint: contact.form.endpoint,
    subject: 'Calculateur — estimation du coût d’un processus',
    fields: {
      firstName: 'Prénom',
      email: 'Email professionnel',
      company: 'Entreprise',
    },
    rgpd: contact.form.rgpd,
    submit: 'Recevoir mon estimation',
    sending: 'Envoi en cours…',
    success: 'C’est envoyé. On vous répond sous 24 h avec votre estimation.',
    error: contact.form.error,
  },
  sheet: {
    text: 'Vous voulez le détail (saisonnalité, passages de main, indice de friction) ? La version complète du calculateur est un classeur, envoyé sur demande.',
  },
}
