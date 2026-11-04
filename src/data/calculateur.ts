import { cta } from './site'
import { contact } from './contact'

/**
 * Version web simplifiée du classeur « AGS_Calculateur_Cout_Processus » (Google Sheets).
 * Cinq questions en langage courant ; charges patronales, heures annuelles et part récupérable
 * sont des hypothèses fixes, annoncées sous le résultat.
 */
export const calculateur = {
  path: cta.calculator.href,
  breadcrumb: 'Calculateur',
  meta: {
    title: 'Combien coûte votre processus ? Calculateur · AGS & Co',
    description:
      'Calculez en 2 minutes ce que coûte réellement un processus manuel : temps de travail, temps perdu autour, dossiers repris. Gratuit et sans engagement.',
  },
  hero: {
    title: { lead: 'Combien coûte votre processus ?', rest: 'Le vrai chiffre, en 2 minutes.' },
    text: 'Un processus coûte ce que coûtent ses répétitions, ses passages de main et ses erreurs. Pas seulement le temps × le salaire.',
    note: 'Gratuit · 2 minutes · résultat affiché et envoyé par email',
  },
  form: {
    sections: {
      process: '1 · Le processus',
      time: '2 · Le temps',
      errors: '3 · Les reprises',
      cost: '4 · Le salaire',
    },
    fields: {
      name: { label: 'Quel processus ? (facultatif)', placeholder: 'Ex. : traitement des devis' },
      volume: {
        label: 'Combien de dossiers par semaine ?',
        hint: 'Devis, factures, demandes clients, relances…',
        unit: 'par semaine',
      },
      direct: {
        label: 'Combien de minutes pour traiter un dossier ?',
        hint: 'Le travail lui-même.',
        unit: 'min',
      },
      around: {
        label: 'Combien de minutes perdues autour ?',
        hint: 'Chercher une information, relancer, être interrompu, attendre une réponse.',
        unit: 'min',
      },
      redo: {
        label: 'Sur 100 dossiers, combien sont à reprendre ?',
        hint: 'Erreur, pièce manquante, oubli : le dossier est à refaire.',
        unit: 'sur 100',
      },
      salary: {
        label: 'Salaire brut mensuel de la personne qui s’en occupe',
        hint: 'On ajoute les charges patronales pour obtenir le vrai coût d’une heure.',
        unit: '€ / mois',
      },
    },
    /** Hypothèses fixes : rappelées sous le résultat. */
    weeksPerMonth: 4.33,
    employerCharges: 0.45,
    hoursPerYear: 1607,
    recoverableShare: 0.4,
  },
  results: {
    title: 'Ce que coûte ce processus',
    empty: 'Indiquez le nombre de dossiers et le temps par dossier : le résultat s’affiche ici.',
    tag: 'Estimation à partir de vos chiffres',
    labels: {
      hoursMonth: 'Heures par mois',
      costMonth: 'Coût total par mois',
      costYear: 'Coût total par an',
      perMonth: 'par mois',
      invisible: 'Coût invisible',
      perItem: 'Coût par dossier',
      recoverable: 'Récupérable par an',
    },
    /** Sous le résultat : ce qui est compté et ce qui est supposé, en une phrase chacun. */
    method: [
      'Coût invisible : le temps perdu autour et les dossiers repris.',
      'Coût d’une heure : salaire brut + 45 % de charges patronales, sur 1 607 heures par an.',
      'Récupérable : 40 % du coût, une hypothèse prudente à vérifier sur un vrai cas.',
    ],
    needSalary: 'Ajoutez le salaire (étape 4) pour voir les montants en euros.',
    pending: '—',
    mobileDetail: 'Voir le détail',
    /** Les montants ne s’affichent qu’après l’envoi de l’email (formulaire dans le bloc résultat). */
    locked: {
      mask: '•••',
      ready: 'Votre résultat est prêt.',
      text: 'Indiquez votre email pour l’afficher. On vous envoie aussi le détail du calcul sous 24 h.',
      waiting: 'Complétez les étapes 1, 2 et 4 : le formulaire s’active dès que le calcul est possible.',
      mobile: 'Votre résultat est prêt',
      mobileLink: 'L’afficher',
    },
    above: 'Votre processus dépasse 20 heures ou 1 000 € par mois : il mérite probablement une analyse plus approfondie.',
    below: 'Sous 20 heures et 1 000 € par mois : gardez-le en observation et comparez-le à vos autres processus.',
    limits:
      'Le résultat vaut ce que valent vos chiffres : le plus fiable est de les noter pendant une semaine. Le montant récupérable n’est pas une économie de salaire : c’est du temps rendu à l’équipe.',
  },
  lead: {
    title: 'Parlons de ce résultat.',
    text: 'En 45 minutes, on regarde ensemble ce qui est vraiment récupérable sur ce processus. Gratuit et sans engagement.',
    primary: cta.primary,
    endpoint: contact.form.endpoint,
    subject: 'Calculateur — estimation du coût d’un processus',
    fields: {
      firstName: 'Prénom',
      email: 'Email professionnel',
      company: 'Entreprise',
    },
    rgpd: contact.form.rgpd,
    submit: 'Voir mon résultat',
    sending: 'Calcul en cours…',
    success: 'Merci. Le détail du calcul vous sera envoyé sous 24 h.',
    error: contact.form.error,
  },
  sheet: {
    text: 'Vous voulez le détail (saisonnalité, passages de main, indice de friction) ? La version complète du calculateur est un classeur, envoyé sur demande.',
  },
}
