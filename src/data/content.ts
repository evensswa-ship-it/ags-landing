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
  h1: 'Des agents IA spécialisés conçus pour assister vos opérations métier.',
  subtitle:
    'AGS & Co conçoit des systèmes intelligents permettant de structurer l’information, automatiser certaines tâches et réduire les frictions opérationnelles.',
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
      title: 'Agents IA internes',
      text: 'Des agents spécialisés intégrés à vos opérations.',
    },
    {
      title: 'Copilotes métier',
      text: 'Une assistance intelligente pour certaines tâches métier.',
    },
    {
      title: 'Automatisation opérationnelle',
      text: 'Réduction des tâches répétitives et amélioration des flux.',
    },
    {
      title: 'Workflows intelligents',
      text: 'Des systèmes conçus pour fluidifier la circulation d’information.',
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
