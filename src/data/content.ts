export const nav = {
  logoAlt: 'AGS & Co.',
  logoSrc: '/agslogo (2).png',
  links: [
    { label: 'Notre méthode', href: '/#philosophie' },
    { label: 'Nos offres', href: '/#offre' },
    { label: 'Formation', href: '/formation' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  cta: 'Réserver un audit gratuit',
  ctaHref: 'https://calendly.com/evens-agsandco/30min',
}

export const hero = {
  eyebrow: "Cabinet d'optimisation des opérations métier",
  h1: "Identifiez vos frictions. Déployez des systèmes qui travaillent à votre place.",
  subtitle:
    "Nous accompagnons les PME, ETI et organisations à cartographier leurs opérations, concevoir des copilotes métier sur mesure, et les déployer durablement, avec formation et suivi continu.",
  primaryCta: 'Réserver un audit gratuit',
  primaryCtaHref: nav.ctaHref,
  secondaryCta: 'Voir notre méthode',
  secondaryCtaHref: '/#philosophie',
  proof: 'Audit gratuit · Sans engagement · 60 minutes',
}

export const problem = {
  title: "La vraie surcharge n'est pas visible sur un organigramme.",
  subtitle: 'Elle se cache dans les petites frictions du quotidien.',
  items: [
    { title: 'Trop de mails', text: 'Chaque matin, une pile de messages sans hiérarchie ni priorité.' },
    { title: 'Relances oubliées', text: 'Des suivis importants qui passent à travers les mailles.' },
    { title: 'Outils dispersés', text: 'Les infos sont partout. Nulle part au bon endroit.' },
    { title: 'Charge mentale', text: "Tout est dans la tête. Rien n'est structuré." },
    { title: 'Temps perdu en ressaisie', text: 'Les mêmes informations ressaisies dans trois outils.' },
    { title: 'Manque de visibilité', text: "Impossible de savoir où en sont les dossiers en cours." },
  ],
}

export const howItWorks = {
  eyebrow: 'Notre approche',
  title: "On ne vend pas de l'IA. On identifie vos frictions.",
  steps: [
    { number: '01', title: 'On écoute', text: 'Un diagnostic de 60 min pour comprendre votre organisation réelle, pas une démo générique.' },
    { number: '02', title: 'On identifie', text: 'Cartographie précise des frictions qui coûtent le plus de temps.' },
    { number: '03', title: 'On construit', text: 'Un assistant opérationnel branché sur vos outils, calqué sur votre métier.' },
    { number: '04', title: 'On suit', text: "Maintenance mensuelle avec suivi du ROI. L'outil évolue avec vous." },
  ],
}

export const cockpit = {
  eyebrow: 'Ce que nous concevons',
  title: 'Des copilotes métier conçus pour le terrain.',
  subtitle: '',
  promises: [
    {
      title: 'Relances sans oubli',
      text: 'Vos suivis et dossiers en cours sont tracés automatiquement. Plus rien ne passe à travers les mailles.',
    },
    {
      title: 'Zéro ressaisie',
      text: "Mails, comptes-rendus et rapports. Chaque tâche répétitive sans valeur ajoutée est traitée automatiquement.",
    },
    {
      title: 'Visibilité immédiate',
      text: 'Priorités, dossiers et flux centralisés. Vous savez exactement où en est chaque sujet en cours.',
    },
    {
      title: 'Outils connectés',
      text: "Vos logiciels existants reliés entre eux. L'information circule sans ressaisie ni friction.",
    },
  ],
}

export const sectors = {
  eyebrow: 'Secteurs accompagnés',
  title: 'Des assistants conçus pour votre métier.',
  items: [
    { name: 'Assurance', description: 'Visite de risque, notes de présentation, prospection.' },
    { name: 'Expertise comptable', description: 'Flux mails, suivi documentaire, relances clients.' },
    { name: 'CGP', description: 'Préparation RDV, synthèse patrimoniale, reporting.' },
    { name: 'PME', description: 'Coordination interne, suivi projets, onboarding.' },
    { name: 'Communication', description: 'Briefs, reporting clients, organisation de production.' },
  ],
}

export const philosophy = {
  eyebrow: 'Notre approche',
  title: 'Méthode avant outil',
  subtitle: "L'IA n'est pas une finalité. C'est un levier. Avant de déployer quoi que ce soit, nous comprenons votre organisation, vos contraintes et vos objectifs réels.",
  pillars: [
    {
      title: 'Comprendre avant de construire',
      text: "Chaque mission commence par un audit opérationnel. Nous cartographions vos flux, vos outils existants et vos frictions réelles avant de proposer la moindre solution.",
    },
    {
      title: 'Adapté à votre réalité métier',
      text: "Pas de solution générique. Chaque copilote est conçu pour votre secteur, vos équipes et vos processus. Ce qui fonctionne chez un CGP ne fonctionnera pas mécaniquement chez un expert-comptable.",
    },
    {
      title: 'Présent après le déploiement',
      text: "Nous ne livrons pas et ne disparaissons pas. Formation des équipes, suivi des usages, ajustements continus : nous restons mobilisables tout au long de la vie du système.",
    },
  ],
  cta: 'Réserver un audit opérationnel',
  ctaHref: nav.ctaHref,
}

export const offer = {
  eyebrow: 'Nos offres',
  title: 'De la compréhension au déploiement.',
  subtitle: "Chaque mission commence par un audit. Le déploiement ne démarre qu'une fois le premier résultat validé sur le terrain.",
  items: [
    {
      number: '01',
      label: 'AUDIT',
      title: 'Audit',
      subtitle: 'Comprendre vos opérations et valider une première piste',
      badge: 'Forfait',
      duration: '2 à 4 semaines',
      href: '/offres/audit',
      includes: [
        'Cartographie de vos opérations',
        'Identification des frictions prioritaires',
        'Conception du premier POC',
        'Tests terrain avec vos équipes',
        'Rapport de validation',
      ],
      outcomeLabel: 'En résumé',
      outcome: "On ne déploie rien sans comprendre comment vous travaillez.",
    },
    {
      number: '02',
      label: 'DÉPLOIEMENT',
      title: 'Déploiement',
      subtitle: 'Mettre en production, intégrer aux outils, former les équipes',
      badge: 'Projet',
      duration: '3 à 6 semaines',
      href: '/offres/deploiement',
      includes: [
        'Revue technique et sécurité',
        'Intégration aux outils existants',
        'Déploiement progressif',
        'Formation des utilisateurs',
        'Suivi des 30 premiers jours',
      ],
      outcomeLabel: 'En résumé',
      outcome: "Le POC est validé. On passe à l'échelle avec les bonnes intégrations.",
    },
    {
      number: '03',
      label: 'ACCOMPAGNEMENT',
      title: 'Accompagnement',
      subtitle: 'Suivi tous les 2 mois, évolutions continues, support dédié',
      badge: 'Abonnement',
      duration: 'Tous les 2 mois',
      href: '/offres/accompagnement',
      includes: [
        'Point de suivi bimestriel',
        "Analyse des métriques d'usage",
        'Résolution des frictions',
        'Évolutions fonctionnelles incluses',
        'Support dédié par email',
      ],
      outcomeLabel: 'En résumé',
      outcome: "Vos besoins évoluent. Vos copilotes aussi.",
    },
  ],
}

export const processJourney = {
  eyebrow: 'Notre parcours client',
  title: 'Comprendre, construire, évoluer.',
  phases: [
    {
      num: '01',
      title: 'Comprendre',
      subtitle: 'Audit opérationnel',
      bullets: [
        'Cartographie des flux et outils existants',
        'Identification des frictions prioritaires',
        'Conception et test du premier copilote',
      ],
    },
    {
      num: '02',
      title: 'Construire',
      subtitle: 'Déploiement & intégration',
      bullets: [
        'Mise en production et intégration outils',
        'Déploiement progressif par équipe',
        'Formation adaptée à chaque profil',
      ],
    },
    {
      num: '03',
      title: 'Évoluer',
      subtitle: 'Suivi continu',
      bullets: [
        'Suivi bimestriel des usages et des gains',
        'Résolution des frictions et évolutions',
        'Amélioration continue du copilote',
      ],
    },
  ],
}

export const formationTeaser = {
  eyebrow: 'Formation',
  title: "L'adoption, c'est aussi notre responsabilité",
  subtitle: "Un outil bien déployé mais mal compris ne sert à rien. Après chaque déploiement, AGS accompagne vos équipes pour comprendre le fonctionnement des assistants, sécuriser les bonnes pratiques et mesurer les premiers gains.",
  points: [
    "Comprendre le fonctionnement des assistants déployés",
    "Adopter les nouveaux usages au quotidien",
    "Identifier les situations où l'outil ne doit pas être utilisé",
    "Mesurer les gains et ajuster les comportements",
  ],
  cta: 'En savoir plus sur notre approche formation',
  ctaHref: '/formation',
}

export const accompagnementTeaser = {
  eyebrow: 'Accompagnement continu',
  title: 'Les assistants évoluent. Votre organisation aussi.',
  subtitle: "Vos opérations changent. Les usages évoluent. Nous faisons évoluer les copilotes en continu, sans que vous ayez à relancer un nouveau projet à chaque évolution.",
  points: [
    'Suivi bimestriel des performances',
    'Mises à jour fonctionnelles incluses',
    'Résolution des frictions opérationnelles',
    'Points réguliers avec votre équipe',
  ],
  cta: "Comprendre notre modèle d'accompagnement",
  ctaHref: '/accompagnement',
}

export const transparency = {
  eyebrow: 'Notre stack technique',
  title: 'Nous assumons nos choix technologiques',
  intro: "Nous n'utilisons pas de formule vague. Voici exactement ce que nous utilisons et comment nous gérons vos données.",
  providers: [
    { name: 'Vercel', role: 'Hébergement frontend, CDN mondial, déploiements automatisés' },
    { name: 'Supabase', role: 'Base de données et authentification (AWS EU, Francfort)' },
    { name: 'OpenAI', role: 'Modèles de langage pour les assistants génériques' },
    { name: 'Anthropic', role: 'Modèles Claude pour les tâches de raisonnement complexes' },
  ],
  principles: [
    "Minimisation des données : nous ne collectons que ce qui est strictement nécessaire",
    "Documentation : chaque flux de données est cartographié dans notre DPA",
    "Amélioration continue : nous évaluons régulièrement des alternatives européennes",
    "Pas de revente : vos données ne sont jamais transmises à des tiers à des fins commerciales",
  ],
  note: "Nous ne prétendons pas être souverains à 100 %. Nous le serons davantage à mesure que les alternatives européennes mûriront.",
}

export const contact = {
  title: 'Parlez-nous de votre organisation et de vos enjeux actuels.',
  reassurance: 'Approche confidentielle · Réponse humaine · Sans engagement',
  formspreeEndpoint: 'https://formspree.io/f/mdajrjnp',
  rgpd:
    "Vos données sont utilisées uniquement pour traiter votre demande. Conformément au RGPD, vous disposez d'un droit d'accès et de suppression : contact@agsandco.fr",
  sectors: ['Assurance', 'Expertise comptable', 'CGP', 'PME', 'Communication', 'Autre'],
  cta: 'Être recontacté',
  fields: {
    firstName: 'Prénom',
    email: 'Email professionnel',
    sector: "Secteur d'activité",
    message: "Parlez-nous de votre activité",
  },
  subject: 'Prise de contact — AGS & Co.',
  success: 'Message envoyé. On vous répond sous 24h.',
  error: "Une erreur est survenue. Réessayez ou écrivez-nous à contact@agsandco.fr.",
}

export const demo = {
  title: 'Voir le Cockpit en action',
  subtitle: 'Laissez-nous vos coordonnées, on revient vers vous sous 24h pour organiser une démonstration.',
  fields: {
    firstName: 'Prénom',
    email: 'Email professionnel',
    message: 'Votre contexte (optionnel)',
  },
  cta: 'Demander une démo',
  success: 'Demande envoyée. On vous contacte sous 24h.',
  error: "Une erreur est survenue. Réessayez ou écrivez-nous à contact@agsandco.fr.",
  subject: 'Demande de démo Cockpit — AGS & Co.',
}

export const footer = {
  tagline: "Cabinet d'optimisation des opérations métier.",
  email: 'contact@agsandco.fr',
  sectionLinks: [
    { label: 'Accueil', href: '/' },
    { label: 'Notre méthode', href: '/#philosophie' },
    { label: 'Nos offres', href: '/#offre' },
    { label: 'Formation', href: '/formation' },
    { label: 'Accompagnement', href: '/accompagnement' },
    { label: 'Contact', href: '/#contact' },
  ],
  legalLinks: [
    { label: 'Mentions légales', href: '/legal/mentions-legales' },
    { label: 'Confidentialité', href: '/legal/confidentialite' },
    { label: 'Données & RGPD', href: '/legal/rgpd' },
    { label: 'Cookies', href: '/legal/cookies' },
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
    { label: 'Adresse', value: '340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis' },
    { label: 'Site', value: 'vercel.com' },
  ],
  sections: [
    {
      title: 'Propriété intellectuelle',
      text: "Les contenus présents sur ce site sont la propriété exclusive d'AGS & Co. Toute reproduction sans autorisation est interdite.",
    },
    {
      title: 'Données personnelles',
      text: "Les données transmises via le formulaire sont utilisées uniquement pour traiter votre demande. Durée maximale : 3 ans. Droits RGPD : contact@agsandco.fr.",
    },
    {
      title: 'Cookies',
      text: "Nous utilisons Google Analytics (avec votre consentement) et Axeptio pour la gestion des préférences cookies.",
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
      answer: "L'audit opérationnel prend 2 à 4 semaines. Le déploiement, 3 à 6 semaines supplémentaires. Nos clients gagnent en moyenne 2h30 par semaine sur les tâches répétitives, soit environ 3 000 € de valeur temps par an pour un profil à 50 000 €/an.",
    },
    {
      question: "Quelle est la différence avec les outils d'automatisation ?",
      answer: "Un outil d'automatisation classique connecte des applications selon des règles fixes : si A alors B. Un copilote AGS intègre votre logique métier. Il sait qu'un dossier sinistre prioritaire ne se traite pas comme un mail commercial, que certaines relances doivent attendre, que vos comptes-rendus suivent votre format interne. Nous configurons les exceptions, les cas particuliers, et nous ajustons l'outil dans la durée.",
    },
    {
      question: 'Est-ce que mes données sont protégées ?',
      answer: "Chaque projet fait l'objet d'une cartographie des données impliquées. Nous travaillons avec des partenaires reconnus (Vercel, Supabase, OpenAI, Anthropic) et documentons chaque flux. Consultez notre politique de confidentialité pour le détail complet.",
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

export const founder = {
  eyebrow: 'Le fondateur',
  name: 'Evens Augustin',
  role: 'Fondateur, AGS & Co.',
  photo: '/founder.jpg',
  photoAlt: "Evens Augustin, fondateur d'AGS & Co.",
  bio: "Avant de fonder AGS & Co., Evens a piloté des projets métier dans des environnements exigeants : migration cloud chez Fekra Global Services et coordination de projet chez Linkt, startup dans les télécoms basée à Mont-Saint-Aignan. Il travaille depuis deux ans en prestation chez un acteur majeur de l'assurance en Normandie, au contact des réalités terrain d'une grande organisation. Ce parcours l'a conduit à une conviction : les frictions opérationnelles coûtent cher, et elles se résolvent avec méthode, pas avec de la technologie pour la technologie.",
  highlights: [
    { label: 'Insitoo freelances', detail: 'Prestataire indépendant · 2 ans' },
    { label: 'Fekra Global Services', detail: 'Project manager · Migration cloud' },
    { label: 'Linkt', detail: 'Startup télécommunication · Coordination de projets FTTH - FTTO - Cisco' },
  ],
}

export const cockpitTeaser = {
  label: 'Notre outil de gestion des flux externes et internes en action !',
}