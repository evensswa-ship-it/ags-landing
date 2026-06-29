export type OfferStep = { num: number; title: string; detail: string }
export type BeforeAfter = { before: string; after: string }
export type OfferFAQItem = { q: string; a: string }

export type OfferPageData = {
  meta: { title: string; description: string }
  title: string
  tagline: string
  duration: string
  problems: string[]
  process: OfferStep[]
  deliverables: string[]
  comparison: BeforeAfter[]
  faq: OfferFAQItem[]
}

export const offerPages: Record<string, OfferPageData> = {
  audit: {
    meta: {
      title: "Audit opérationnel | AGS & Co.",
      description: "Cartographiez vos opérations, identifiez vos frictions prioritaires et obtenez un premier copilote testé terrain en 2 à 4 semaines. Forfait, sans engagement.",
    },
    title: 'Audit',
    tagline: "On ne déploie rien sans comprendre comment vous travaillez.",
    duration: '2 à 4 semaines',
    problems: [
      "Budget IA sans direction claire",
      "Temps perdu non mesuré et non priorisé",
      "Hésitation à investir sans preuve concrète",
      "Processus manuels non documentés",
      "Incertitude sur la faisabilité technique",
    ],
    process: [
      { num: 1, title: 'Entretien de cadrage', detail: 'Périmètre, outils utilisés, équipes concernées. Durée : 60 min.' },
      { num: 2, title: 'Cartographie des opérations', detail: 'Schéma de vos flux réels, identification des points de friction.' },
      { num: 3, title: 'Priorisation', detail: 'Frictions classées par impact et faisabilité, estimation des gains.' },
      { num: 4, title: 'Conception du POC', detail: "Premier copilote conçu sur le cas d'usage prioritaire." },
      { num: 5, title: 'Tests terrain', detail: '2 à 5 utilisateurs réels, rapport de validation des résultats.' },
    ],
    deliverables: [
      'Cartographie des opérations',
      'Rapport des frictions priorisées',
      'POC fonctionnel',
      'Rapport de tests',
    ],
    comparison: [
      { before: "On ne sait pas par où commencer", after: "On a une direction claire et un premier outil testé" },
      { before: "L'équipe est sceptique sur la valeur de l'IA", after: "On a une preuve concrète avant d'aller plus loin" },
      { before: "Le budget IA est flou", after: "Le potentiel est chiffré et priorisé" },
    ],
    faq: [
      {
        q: "Faut-il préparer quelque chose avant ?",
        a: "Non. Un accès à vos outils principaux et la disponibilité des bonnes personnes suffisent. Nous prenons en charge l'ensemble de la démarche.",
      },
      {
        q: "Qui doit être disponible côté client ?",
        a: "Idéalement le dirigeant ou le responsable des opérations, et les utilisateurs directs des outils concernés. Les entretiens durent 45 à 90 minutes au total.",
      },
      {
        q: "La suite est-elle obligatoire après l'audit ?",
        a: "Non. L'audit est un livrable complet. Si les résultats vous convainquent, nous pouvons enchaîner sur le déploiement. Mais vous êtes libre de vous arrêter là.",
      },
    ],
  },
  deploiement: {
    meta: {
      title: "Déploiement | AGS & Co.",
      description: "Mettez votre copilote en production, intégrez-le à vos outils existants et formez vos équipes. Déploiement progressif en 3 à 6 semaines, sans rupture de vos processus.",
    },
    title: 'Déploiement',
    tagline: "Le POC est validé. On passe à l'échelle, avec les bonnes intégrations et les équipes formées.",
    duration: '3 à 6 semaines',
    problems: [
      "Intégrations techniques bloquantes",
      "Résistance au changement des équipes",
      "Manque de documentation opérationnelle",
      "Absence de formation structurée",
      "Risque de régression sur les processus existants",
    ],
    process: [
      { num: 1, title: 'Revue technique et sécurité', detail: 'Audit de la configuration avant mise en production.' },
      { num: 2, title: 'Intégration aux outils existants', detail: 'Connexion aux APIs, logiciels métier et flux de données.' },
      { num: 3, title: 'Déploiement progressif', detail: 'Mise en production par équipe ou service, à votre rythme.' },
      { num: 4, title: 'Formation des utilisateurs', detail: 'Sessions adaptées à chaque profil : dirigeant, manager, utilisateur quotidien.' },
      { num: 5, title: 'Suivi des 30 premiers jours', detail: 'Mesure des premiers gains et ajustements si nécessaire.' },
    ],
    deliverables: [
      'Système en production',
      'Documentation technique',
      'Compte-rendus formation',
      'Rapport J+30',
    ],
    comparison: [
      { before: "Le POC marche mais personne ne l'utilise vraiment", after: "Les équipes sont formées et autonomes" },
      { before: "L'intégration technique fait peur", after: "Le système est connecté à vos outils existants" },
      { before: "On ne sait pas comment former les équipes", after: "Chaque profil a reçu une formation adaptée" },
    ],
    faq: [
      {
        q: "Faut-il changer nos outils existants ?",
        a: "Non. Le déploiement s'appuie sur ce que vous utilisez déjà. Si une intégration spécifique n'est pas possible, nous vous en informons dès la phase d'audit.",
      },
      {
        q: "La formation est-elle incluse dans le déploiement ?",
        a: "Oui. La formation des équipes fait partie intégrante du déploiement. Elle est adaptée à chaque profil d'utilisateur et se déroule avant la mise en production complète.",
      },
      {
        q: "Que se passe-t-il après les 30 premiers jours ?",
        a: "Nous proposons un accompagnement bimestriel pour maintenir, faire évoluer et optimiser le système. Mais rien n'est obligatoire. Vous êtes libre de gérer la suite en autonomie.",
      },
    ],
  },
  accompagnement: {
    meta: {
      title: "Accompagnement continu | AGS & Co.",
      description: "Maintenez et faites évoluer vos copilotes métier sur la durée. Suivi bimestriel, mises à jour incluses, support dédié. Sans engagement minimum.",
    },
    title: 'Accompagnement',
    tagline: "Vos besoins évoluent. Vos outils aussi.",
    duration: 'Tous les 2 mois, sans engagement minimum',
    problems: [
      "Dégradation progressive de la pertinence du système",
      "Nouveaux besoins sans référent technique disponible",
      "Absence de visibilité sur les usages réels",
      "Coût de relancer un nouveau projet à chaque évolution",
    ],
    process: [
      { num: 1, title: 'Point de suivi bimestriel', detail: 'Usages, retours terrain, points de friction rencontrés. Durée : 60 min.' },
      { num: 2, title: "Analyse des métriques d'usage", detail: "Fréquence d'utilisation, gains mesurés, tendances." },
      { num: 3, title: 'Résolution des frictions', detail: 'Ajustements fonctionnels basés sur les retours terrain.' },
      { num: 4, title: 'Évolutions fonctionnelles', detail: "Nouvelles fonctionnalités si pertinent, incluses dans l'abonnement." },
      { num: 5, title: 'Veille et recommandations', detail: 'Nouvelles opportunités, alertes sur les évolutions technologiques.' },
    ],
    deliverables: [
      "Rapport bimestriel d'usage",
      'Mises à jour incluses',
      'Support par email',
      'Accès dédié à votre référent',
    ],
    comparison: [
      { before: "On ne sait plus comment faire évoluer le système", after: "Un référent technique disponible chaque mois" },
      { before: "On repart de zéro à chaque nouveau besoin", after: "Les évolutions s'intègrent en continu" },
      { before: "On n'a aucune visibilité sur les gains réels", after: "Un rapport bimestriel avec les métriques d'usage" },
    ],
    faq: [
      {
        q: "Peut-on arrêter à tout moment ?",
        a: "Oui. L'accompagnement est sans engagement minimum. Vous pouvez arrêter à tout moment avec un préavis de 30 jours.",
      },
      {
        q: "Que couvre exactement une mise à jour ?",
        a: "Les évolutions fonctionnelles du copilote (nouvelles règles, nouveaux cas d'usage, ajustements de logique). Les intégrations techniques majeures font l'objet d'un devis séparé.",
      },
      {
        q: "Peut-on ajouter un nouveau cas d'usage en cours d'abonnement ?",
        a: "Oui, si la complexité le permet. Les ajouts simples sont inclus dans l'accompagnement bimestriel. Les nouveaux copilotes complets sont traités comme un nouveau projet d'audit. En cas d'urgence, vous pouvez nous contacter à tout moment en dehors du cycle.",
      },
    ],
  },
}