export const nav = {
  logoAlt: 'AGS & Co.',
  logoSrc: '/agslogo (2).png',
  links: [
    { label: 'Systèmes IA', href: '#cockpit' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: 'Réserver un appel découverte',
  ctaHref: 'https://calendly.com/evens-agsandco/30min',
}

export const hero = {
  eyebrow: 'Cabinet IA opérationnel · France',
  h1: 'Gagnez du temps sur les tâches qui freinent vos opérations chaque jour.',
  subtitle:
    'Nous identifions les frictions qui coûtent du temps à vos équipes et déployons des assistants opérationnels sur mesure pour les résoudre.',
  stat: 'Nos clients peuvent récupérer en moyenne 2h30 par semaine.',
  secondaryCta: 'Voir comment ça fonctionne',
  secondaryCtaHref: '#cockpit',
  primaryCta: 'Réserver un appel découverte',
  primaryCtaHref: nav.ctaHref,
  proof: 'Audit stratégique • Analyse terrain • Recommandations exploitables',
}

export const problem = {
  title: "La vraie surcharge n'est pas visible sur un organigramme.",
  subtitle: 'Elle se cache dans les petites frictions du quotidien.',
  items: [
    {
      title: 'Trop de mails',
      text: 'Chaque matin, une pile de messages sans hiérarchie ni priorité.',
    },
    {
      title: 'Relances oubliées',
      text: 'Des suivis importants qui passent à travers les mailles.',
    },
    {
      title: 'Outils dispersés',
      text: 'Les infos sont partout. Nulle part au bon endroit.',
    },
    {
      title: 'Charge mentale',
      text: "Tout est dans la tête. Rien n'est structuré.",
    },
    {
      title: 'Temps perdu en ressaisie',
      text: 'Les mêmes informations ressaisies dans trois outils.',
    },
    {
      title: 'Manque de visibilité',
      text: "Impossible de savoir où en sont les dossiers en cours.",
    },
  ],
}

export const howItWorks = {
  eyebrow: 'Notre approche',
  title: "On ne vend pas de l'IA. On identifie vos frictions.",
  steps: [
    {
      number: '01',
      title: 'On écoute',
      text: 'Un diagnostic de 60 min pour comprendre votre organisation réelle, pas une démo générique.',
    },
    {
      number: '02',
      title: 'On identifie',
      text: 'Cartographie précise des frictions qui coûtent le plus de temps.',
    },
    {
      number: '03',
      title: 'On construit',
      text: 'Un assistant opérationnel branché sur vos outils, calqué sur votre métier.',
    },
    {
      number: '04',
      title: 'On suit',
      text: "Maintenance mensuelle avec suivi du ROI. L'outil évolue avec vous.",
    },
  ],
}

export const cockpit = {
  eyebrow: 'Ce que nous concevons',
  title: 'Des systèmes IA pensés pour le terrain.',
  subtitle: '',
  promises: [
    {
      title: 'Relances sans oubli',
      text: 'Vos suivis et dossiers en cours sont tracés automatiquement. Plus rien ne passe à travers les mailles.',
    },
    {
      title: 'Zéro ressaisie',
      text: 'Mails, comptes-rendus et rapports. Chaque tâche répétitive sans valeur ajoutée est traitée automatiquement.',
    },
    {
      title: 'Visibilité immédiate',
      text: 'Priorités, dossiers et flux centralisés. Vous savez exactement où en est chaque sujet en cours.',
    },
    {
      title: 'Outils connectés',
      text: 'Vos logiciels existants reliés entre eux. L’information circule sans ressaisie ni friction.',
    },
  ],
}

export const sectors = {
  eyebrow: 'Secteurs accompagnés',
  title: 'Des assistants conçus pour votre métier.',
  items: [
    {
      name: 'Assurance',
      description: 'Visite de risque, notes de présentation, prospection.',
    },
    {
      name: 'Expertise comptable',
      description: 'Flux mails, suivi documentaire, relances clients.',
    },
    {
      name: 'CGP',
      description: 'Préparation RDV, synthèse patrimoniale, reporting.',
    },
    {
      name: 'PME',
      description: 'Coordination interne, suivi projets, onboarding.',
    },
    {
      name: 'Communication',
      description: 'Briefs, reporting clients, organisation de production.',
    },
  ],
}

export const philosophy = {
  eyebrow: 'Notre approche',
  title: 'Un échange offert de 60 min pour identifier ce qui ralentit réellement votre organisation.',
  cta: 'Réserver un appel découverte',
  ctaHref: nav.ctaHref,
}

export const offer = {
  eyebrow: "L'offre",
  title: 'Quatre offres pour passer du besoin au cockpit opérationnel.',
  notes: [
    'Les évolutions spécifiques, nouvelles fonctionnalités ou intégrations complémentaires font l’objet d’un accompagnement séparé.',
    'Support et SAV par email pendant les jours ouvrés.',
    'Délai moyen de prise en charge : 48h ouvrées.',
  ],
  items: [
    {
      number: '01',
      label: 'AGS DISCOVERY',
      title: 'Échange découverte',
      price: 'Offert',
      badge: '60 min',
      includes: [
        'Échange découverte',
        'Compréhension organisation',
        'Identification premières frictions',
        'Premières pistes d’optimisation',
      ],
      outcomeLabel: 'Objectif',
      outcome: 'Comprendre votre fonctionnement et identifier les premières pistes d’amélioration.',
    },
    {
      number: '02',
      label: 'AGS AUDIT',
      title: 'Audit opérationnel',
      price: '2 000€ HT',
      badge: 'Étude stratégique',
      includes: [
        'Audit opérationnel',
        'Analyse workflows',
        'Cartographie frictions',
        'Quick wins',
        'Recommandations',
        'Proposition cockpit',
      ],
      outcomeLabel: 'Livrable',
      outcome: 'Bilan complet stratégique et opérationnel.',
    },
    {
      number: '03',
      label: 'AGS COCKPIT',
      title: 'Votre assistant opérationnel',
      price: 'À partir de 3 500€ HT',
      badge: 'Agent IA',
      includes: [
        'Setup cockpit',
        'Connexion outils',
        'Configuration IA',
        'Personnalisation',
        'Onboarding',
        'Dashboard',
        'Logique métier initiale',
      ],
      outcomeLabel: 'Objectif',
      outcome: 'Déployer un assistant opérationnel adapté à votre organisation.',
    },
    {
      number: '04',
      label: 'AGS CLOUD',
      title: 'Plateforme AGS Cloud',
      price: '350€/mois HT',
      badge: 'Mensuel',
      includes: [
        'Accès à AGS Cockpit',
        'Hébergement cloud',
        'Maintenance corrective',
        'SAV technique',
        'Surveillance connecteurs',
        'Mises à jour techniques mineures',
      ],
      outcomeLabel: 'Support',
      outcome: 'Maintenir un cockpit stable, accessible et opérationnel au quotidien.',
    },
  ],
}

export const dataPrivacy = {
  eyebrow: 'Données & Confidentialité',
  title: 'Vos opérations, vos données. Leur confidentialité est notre point de départ.',
  intro:
    "Les agents IA et automatisations qu'on construit accèdent parfois à des données professionnelles sensibles. Mails, dossiers clients, documents internes. Ce constat guide l'architecture de chaque projet.",
  items: [
    {
      title: 'Réflexion par projet',
      text: "Avant de déployer quoi que ce soit, on cartographie les données impliquées : ce qui transite, où ça va et pourquoi. L'architecture mise en place dépend de la réalité du client, pas d'un template qu'on applique partout.",
    },
    {
      title: 'Confidentialité des flux',
      text: "On limite l'exposition des données à ce qui est strictement nécessaire. Les flux sont identifiés, les accès maîtrisés et les traitements documentés dès la phase de conception.",
    },
    {
      title: 'Approche RGPD',
      text: "On aborde le RGPD comme un enjeu métier, pas comme une case à cocher. Dès le cadrage, on identifie avec vous les données traitées, les flux concernés et les mesures adaptées à votre situation.",
    },
    {
      title: 'Transparence sur la stack',
      text: "On travaille aujourd'hui avec Vercel, Supabase, OVH, OpenAI et Anthropic. Des partenaires reconnus. Notre objectif une fois les cas d'usage validés terrain : migrer vers une infrastructure et des modèles d'IA pleinement européens.",
    },
  ],
  note: "On ne prétend pas à une infrastructure 100 % internalisée. On construit avec des partenaires fiables et on trace une trajectoire vers les standards européens.",
}

export const contact = {
  title: 'Parlez-nous de votre organisation et de vos enjeux actuels.',
  reassurance: 'Approche confidentielle • Réponse humaine • Sans engagement',
  formspreeEndpoint: 'https://formspree.io/f/mdajrjnp',
  rgpd:
    "Vos données sont utilisées uniquement pour traiter votre demande. Conformément au RGPD, vous disposez d'un droit d'accès et de suppression : contact@agsandco.fr",
  sectors: ['Assurance', 'Expertise comptable', 'CGP', 'PME', 'Communication', 'Autre'],
  cta: 'Être recontacté',
}

export const footer = {
  tagline: 'Ne remplace pas le décideur, l’augmente.',
  email: 'contact@agsandco.fr',
  sectionLinks: [
    { label: 'Accueil', href: '#hero' },
    { label: 'Systèmes IA', href: '#cockpit' },
    { label: 'Notre approche', href: '#philosophie' },
    { label: 'Offre', href: '#offre' },
    { label: 'Données & IA', href: '#donnees' },
    { label: 'Contact', href: '#contact' },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/agsandco/?viewAsMember=true' },
  ],
}

export const legal = {
  editor: [
    { label: 'Éditeur', value: 'Evens Augustin, entrepreneur individuel' },
    { label: 'Nom commercial', value: 'AGS & Co.' },
    { label: 'SIREN', value: '912 066 578' },
    { label: 'SIRET du siège', value: '912 066 578 00028' },
    { label: 'Adresse', value: 'Bureau 326, 59 rue de Ponthieu, 75008 Paris' },
    { label: 'Code APE', value: '70.22Z, Conseil pour les affaires et autres conseils de gestion' },
    { label: 'Contact', value: 'contact@agsandco.fr' },
  ],
  hosting: [
    { label: 'Hébergeur', value: 'Vercel Inc.' },
    { label: 'Adresse', value: '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis' },
    { label: 'Site', value: 'vercel.com' },
  ],
  sections: [
    {
      title: 'Propriété intellectuelle',
      text: 'Les contenus, textes, images et éléments graphiques présents sur ce site sont la propriété d’AGS & Co. Toute reproduction non autorisée est interdite.',
    },
    {
      title: 'Données personnelles',
      text: 'Les données transmises via le formulaire sont utilisées uniquement pour traiter votre demande de contact. Elles sont conservées pour une durée maximale de 3 ans. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression en écrivant à contact@agsandco.fr. Vous pouvez également saisir la CNIL.',
    },
    {
      title: 'Cookies',
      text: 'Aucun cookie de tracking n’est utilisé sur ce site.',
    },
  ],
}

export const faq = {
  eyebrow: 'Questions fréquentes',
  title: 'Ce que nos clients nous demandent avant de commencer.',
  items: [
    {
      question: "Concrètement, c'est quoi un assistant opérationnel ?",
      answer: "Un système automatisé connecté à vos outils existants. Il trie les mails entrants, relance un client, génère un compte-rendu ou synthétise un dossier. Pas un chatbot générique : un assistant construit pour votre métier et votre organisation spécifique.",
    },
    {
      question: 'Faut-il changer nos logiciels ou notre organisation ?',
      answer: "Non. On se connecte à ce que vous utilisez déjà : messagerie, CRM, outils métier. L'assistant s'intègre à votre environnement sans migration ni rupture dans vos habitudes de travail.",
    },
    {
      question: 'Quel est le ROI et en combien de temps ?',
      answer: "L'audit opérationnel prend 5 à 10 jours ouvrés. Le déploiement d'un premier assistant, 2 à 4 semaines. Nos clients peuvent récupérer en moyenne 2h30 par semaine sur les tâches répétitives, soit environ 3 000 € de valeur temps par an pour un profil à 50 000 €/an, hors gains en réactivité et charge mentale.",
    },
    {
      question: "Quelle est la différence avec les outils d'automatisation ?",
      answer: "Un outil d'automatisation classique connecte des applications selon des règles fixes : si A alors B. Un assistant AGS intègre votre logique métier. Il sait qu'un dossier sinistre prioritaire ne se traite pas comme un mail commercial, que certaines relances doivent attendre, que vos comptes-rendus suivent votre format interne. Nous configurons les exceptions, les cas particuliers, et nous ajustons l'outil dans la durée.",
    },
    {
      question: 'Est-ce que mes données sont protégées ?',
      answer: "Chaque projet fait l’objet d’une cartographie des données impliquées. Nous travaillons avec des partenaires reconnus (Vercel, Supabase, OpenAI, Anthropic) et documentons chaque flux. Notre approche RGPD est détaillée dans la section Données & Confidentialité.",
    },
  ],
}

export const sectorPages = {
  assurance: {
    meta: {
      title: "AGS & Co. – IA opérationnelle pour courtiers et agents généraux",
      description: "Automatisez la gestion administrative en assurance : visites de risque, notes de présentation, relances clients. Moins de charge, plus de temps pour développer votre portefeuille.",
    },
    eyebrow: "Assurance",
    h1: "Moins de charge administrative pour les courtiers et agents généraux.",
    subtitle: "Visites de risque, notes de présentation, relances clients. Nous automatisons les tâches qui vous éloignent de votre cœur de métier.",
    painPoints: [
      { title: "Visites de risque chronophages", text: "La rédaction des rapports prend autant de temps que la visite elle-même." },
      { title: "Notes de présentation à refaire", text: "Chaque dossier nécessite une synthèse manuelle pour le client ou la compagnie." },
      { title: "Relances oubliées", text: "Les suivis de renouvellement et les rappels de pièces passent à travers les mailles." },
      { title: "Prospection ralentie", text: "Le temps administratif empiète sur la prospection et le développement du portefeuille." },
    ],
    cta: "Réserver un audit gratuit",
    ctaHref: "https://calendly.com/evens-agsandco/30min",
  },
  cgp: {
    meta: {
      title: "AGS & Co. – IA opérationnelle pour Conseillers en Gestion de Patrimoine",
      description: "Préparez vos rendez-vous patrimoniaux, automatisez les synthèses et le reporting. AGS & Co. libère les CGP des tâches répétitives pour se concentrer sur leurs clients.",
    },
    eyebrow: "CGP",
    h1: "Vos rendez-vous mieux préparés. Vos clients mieux suivis.",
    subtitle: "Préparation RDV, synthèses patrimoniales, reporting. Nous structurons l'information pour que vous passiez plus de temps à conseiller, moins à rédiger.",
    painPoints: [
      { title: "Préparation des rendez-vous", text: "Rassembler les éléments patrimoniaux avant chaque entretien prend un temps considérable." },
      { title: "Synthèses patrimoniales", text: "La rédaction des synthèses après chaque rendez-vous mobilise des heures sans valeur conseil." },
      { title: "Reporting clients", text: "Les rapports périodiques sont chronophages et souvent repoussés au détriment de la relation client." },
      { title: "Suivi des alertes", text: "Les événements déclencheurs (revalorisations, échéances, alertes marchés) sont difficiles à suivre manuellement." },
    ],
    cta: "Réserver un audit gratuit",
    ctaHref: "https://calendly.com/evens-agsandco/30min",
  },
  "expertise-comptable": {
    meta: {
      title: "AGS & Co. – IA opérationnelle pour cabinets d'expertise comptable",
      description: "Automatisez les relances clients, le suivi documentaire et les flux mails en cabinet comptable. Moins de ressaisie, dossiers qui avancent, collaborateurs libérés.",
    },
    eyebrow: "Expertise comptable",
    h1: "Moins de relances, moins de ressaisie. Vos dossiers avancent.",
    subtitle: "Flux mails, suivi documentaire, relances clients. Nous réduisons la friction administrative pour que vos collaborateurs se concentrent sur l'analyse et le conseil.",
    painPoints: [
      { title: "Relances de pièces", text: "Chasser les documents manquants auprès des clients est une tâche chronophage et répétitive." },
      { title: "Flux mails entrants", text: "Le volume de mails reçus par dossier mobilise un temps significatif pour le tri et le routage." },
      { title: "Ressaisie entre outils", text: "Les mêmes informations transitent entre plusieurs logiciels sans automatisation." },
      { title: "Suivi des dossiers en cours", text: "La visibilité sur l'état d'avancement des dossiers est difficile à maintenir sans outil dédié." },
    ],
    cta: "Réserver un audit gratuit",
    ctaHref: "https://calendly.com/evens-agsandco/30min",
  },
  pme: {
    meta: {
      title: "AGS & Co. – IA opérationnelle pour PME",
      description: "Coordination interne, suivi de projets, onboarding. AGS & Co. libère vos équipes PME des tâches répétitives pour se concentrer sur la croissance.",
    },
    eyebrow: "PME",
    h1: "Votre équipe se concentre sur la croissance, pas sur l'administratif.",
    subtitle: "Coordination interne, suivi de projets, onboarding collaborateurs. Nous automatisons les tâches sans valeur ajoutée pour que votre équipe avance sur l'essentiel.",
    painPoints: [
      { title: "Coordination interne", text: "Les informations circulent mal entre les équipes, générant des doublons et des oublis." },
      { title: "Suivi des projets", text: "L'état d'avancement des projets est difficile à suivre sans ressaisie constante." },
      { title: "Onboarding collaborateurs", text: "Chaque nouvel arrivant mobilise du temps encadrant pour des tâches répétitives et documentables." },
      { title: "Reporting et comptes-rendus", text: "Les réunions génèrent des comptes-rendus chronophages qui retardent l'action." },
    ],
    cta: "Réserver un audit gratuit",
    ctaHref: "https://calendly.com/evens-agsandco/30min",
  },
  btp: {
    meta: {
      title: "AGS & Co. – IA opérationnelle pour le BTP",
      description: "Rapports de chantier, suivi sous-traitants, appels d'offres. AGS & Co. automatise la gestion administrative du BTP pour piloter vos chantiers efficacement.",
    },
    eyebrow: "BTP",
    h1: "Moins de paperasse chantier. Plus de temps pour piloter.",
    subtitle: "Rapports de chantier, suivi sous-traitants, coordination terrain et bureau. Nous réduisons la charge documentaire pour que vous restiez concentré sur l'avancement.",
    painPoints: [
      { title: "Rapports de chantier", text: "La rédaction des comptes-rendus de chantier mobilise des heures sur le terrain et au bureau." },
      { title: "Suivi sous-traitants", text: "Centraliser les avancements, les retards et les documents sous-traitants est une tâche manuelle chronophage." },
      { title: "Appels d'offres et devis", text: "La constitution des dossiers d'appel d'offres et la rédaction des devis sont répétitives." },
      { title: "Coordination terrain / bureau", text: "Les remontées terrain se perdent dans des échanges mail ou téléphoniques non structurés." },
    ],
    cta: "Réserver un audit gratuit",
    ctaHref: "https://calendly.com/evens-agsandco/30min",
  },
}