import { cta } from './site'

export const gouvernance = {
  path: '/gouvernance',
  breadcrumb: 'Gouvernance',
  meta: {
    title: 'IA de confiance et AI Act : notre gouvernance · AGS & Co',
    description:
      'Ce que voit chaque agent IA, ce qu’il peut faire, qui valide, où vont vos données et comment l’AI Act est pris en compte. Une IA de confiance pour PME et ETI.',
  },
  title: {
    lead: 'Un collaborateur IA capable de tout faire',
    rest: 'ne doit pas avoir le droit de tout faire.',
  },
  intro:
    "Avant d’automatiser, on décide qui voit quoi, qui fait quoi et qui valide. Cette page le détaille pour vos équipes informatique, sécurité et conformité.",
  domains: [
    {
      title: 'Vos données sont-elles prêtes ?',
      term: 'AI & Data Readiness',
      text: 'On vérifie quelles données existent, où elles sont, leur qualité et qui y a accès. On ne branche rien sur une donnée douteuse.',
    },
    {
      title: 'Une identité par collaborateur IA',
      term: '',
      text: 'Chacun a son propre compte et ses propres droits, comme un salarié.',
    },
    {
      title: 'Le strict nécessaire',
      term: 'Moindre privilège',
      text: "Il n’accède qu’aux données et aux actions utiles à sa mission.",
    },
    {
      title: 'Une personne valide',
      term: 'Human-in-the-loop',
      text: "Plus l’action est sensible, plus le contrôle est fort. Certaines actions sont automatiques, d’autres attendent une validation, d’autres sont interdites.",
      human: true,
    },
    {
      title: 'Chaque action est tracée',
      term: 'Journalisation',
      text: 'Historisation, journal de bord et logs techniques permettent de retrouver qui a fait quoi, quand et sur quelle base.',
    },
    {
      title: 'Cycle de vie des données',
      term: '',
      text: "Ce qui est conservé, combien de temps, où, et comment c’est supprimé.",
    },
    {
      title: 'Sécurité',
      term: '',
      text: 'Hébergement, chiffrement, gestion des secrets et choix du modèle sont décidés selon la sensibilité de vos données.',
    },
  ],
  sheet: {
    title: { lead: 'Chaque collaborateur IA a sa fiche,', rest: 'validée avec vous.' },
    intro:
      'Avant la mise en place, on écrit ensemble ce que le collaborateur IA voit, ce qu’il fait, ce qu’il n’a pas le droit de faire et qui décide. Voici la fiche d’un collaborateur IA commercial qui relance vos devis.',
    kind: 'Fiche de gouvernance',
    name: 'Collaborateur IA · Commercial',
    mission: 'Relance des devis et des prospects',
    rows: [
      {
        label: 'Mission',
        value: 'Repérer chaque devis resté sans réponse après 7 jours, préparer une relance adaptée au client et la proposer au commercial qui suit le dossier.',
      },
      {
        label: 'Responsable chez vous',
        value: 'Votre responsable commercial. Il fixe les règles de relance et tranche les cas particuliers.',
      },
      {
        label: 'Données visibles',
        value: 'Devis envoyés, fiches clients et historique des échanges dans votre CRM, grille tarifaire en vigueur.',
      },
      {
        label: 'Données interdites',
        value: 'Paie, dossiers RH, comptabilité, coordonnées bancaires des clients.',
      },
      {
        label: 'Actions autorisées',
        value: 'Lire les devis et les fiches clients, rédiger un brouillon de relance, créer une tâche de rappel dans le CRM.',
      },
      {
        label: 'Actions interdites',
        value: 'Envoyer un email sans validation, modifier un prix ou une remise, supprimer une fiche client.',
      },
      {
        label: 'Passage de relais à une personne',
        value: 'Chaque relance est validée par le commercial avant l’envoi. Un client mécontent, une demande de remise ou un devis de plus de 10 000 € HT passent directement à une personne.',
        human: true,
      },
      {
        label: 'Traçabilité',
        value: 'Chaque relance proposée, validée, modifiée ou refusée est enregistrée : qui, quand, sur quelle base.',
      },
      {
        label: 'Revue trimestrielle',
        value: 'Devis relancés, relances validées sans retouche, ventes récupérées. On ajuste les règles avec vous.',
      },
    ],
  },
  notes: [
    {
      title: 'Secteurs réglementés',
      text: 'Assurance, banque, finance : nous concevons des architectures qui facilitent vos exigences de contrôle interne et de traçabilité.',
    },
    {
      title: 'Ce que nous ne sommes pas',
      text: "AGS n’est pas un cabinet juridique et ne garantit pas la conformité. Nous travaillons avec vos équipes conformité, sécurité et votre DPO, qui gardent la validation finale.",
    },
    {
      title: 'Trajectoire européenne',
      text: "Notre objectif est de privilégier, quand c’est possible, des solutions hébergées en Europe. C’est une trajectoire, pas une promesse.",
      more: "Chaque collaborateur IA est conçu en lisant le règlement européen sur l’IA (AI Act) : niveau de risque qualifié dès l’audit, usages interdits écartés, personnes informées quand elles échangent avec une IA, contrôle humain et documentation tenus à jour.",
    },
  ],
  closing: {
    title: { lead: 'Une question sur vos données ?', rest: 'Parlons-en.' },
    primary: cta.primary,
    secondary: cta.write,
  },
}
