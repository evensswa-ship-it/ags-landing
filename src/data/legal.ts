export type LegalSection = { heading: string; content: string }

export type LegalPageData = {
  title: string
  subtitle: string
  sections: LegalSection[]
}

export const lastUpdated = '29 juin 2026'

export const legalPages: Record<string, LegalPageData> = {
  'mentions-legales': {
    title: 'Mentions légales',
    subtitle: 'Informations légales relatives au site agsandco.fr',
    sections: [
      {
        heading: 'Éditeur du site',
        content: "AGS & Co. est une entreprise individuelle enregistrée sous le numéro SIRET 91206657800028.\n\nDirecteur de publication : Evens Augustin\nAdresse : 59 rue de Ponthieu, Bureau 326, 75008 Paris\nContact : contact@agsandco.fr",
      },
      {
        heading: 'Hébergement',
        content: "Ce site est hébergé par Vercel Inc.\n340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis\nSite : vercel.com",
      },
      {
        heading: 'Propriété intellectuelle',
        content: "L'ensemble des contenus présents sur ce site (textes, visuels, logo, structure) sont la propriété exclusive d'AGS & Co. Toute reproduction, représentation ou utilisation sans autorisation préalable est interdite.",
      },
      {
        heading: 'Liens hypertextes',
        content: "La création de liens hypertextes vers le site agsandco.fr est soumise à autorisation préalable. AGS & Co. décline toute responsabilité quant aux contenus des sites tiers vers lesquels des liens pourraient être établis.",
      },
      {
        heading: 'Limitation de responsabilité',
        content: "AGS & Co. s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois, AGS & Co. ne saurait être tenu responsable des erreurs, omissions ou indisponibilités du site.",
      },
      {
        heading: 'Droit applicable',
        content: "Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Paris.",
      },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    subtitle: 'Comment AGS & Co. collecte, utilise et protège vos données personnelles',
    sections: [
      {
        heading: '1. Introduction',
        content: "La présente politique de confidentialité décrit la manière dont AGS & Co. collecte et utilise vos données personnelles dans le cadre de l'utilisation du site agsandco.fr. AGS & Co. s'engage à protéger la vie privée de ses visiteurs conformément au Règlement Général sur la Protection des Données (RGPD).",
      },
      {
        heading: '2. Responsable du traitement',
        content: "AGS & Co., entreprise individuelle\nSIRET : 91206657800028\n59 rue de Ponthieu, Bureau 326, 75008 Paris\nContact : contact@agsandco.fr",
      },
      {
        heading: '3. Délégué à la protection des données',
        content: "Evens Augustin\nContact : contact@agsandco.fr\n59 rue de Ponthieu, Bureau 326, 75008 Paris",
      },
      {
        heading: '4. Données collectées',
        content: "Nous collectons uniquement les données que vous nous communiquez volontairement via le formulaire de contact : prénom, adresse email, secteur d'activité et message.\n\nNous collectons également des données de navigation anonymisées via Google Analytics 4 (pages visitées, durée de session, pays de connexion), collectées uniquement avec votre consentement explicite.",
      },
      {
        heading: '5. Finalités et bases légales',
        content: "Formulaire de contact : traitement basé sur l'intérêt légitime d'AGS & Co. à répondre aux demandes entrantes.\n\nAnalytics Google Analytics 4 : traitement basé sur votre consentement, recueilli via notre bandeau Axeptio.",
      },
      {
        heading: '6. Sous-traitants et hébergeurs',
        content: "Vercel Inc. (USA) : hébergement du site web, couvert par clauses contractuelles types (SCCs).\nSupabase Inc. (AWS EU, Francfort) : base de données.\nOpenAI LP (USA) : modèles de langage, couvert par SCCs.\nAnthropic PBC (USA) : modèles Claude, couvert par SCCs.\nGoogle LLC (USA) : Google Analytics 4, couvert par SCCs.",
      },
      {
        heading: '7. Transferts hors Union Européenne',
        content: "Certains de nos prestataires sont établis aux États-Unis. Ces transferts sont encadrés par des clauses contractuelles types (SCCs) approuvées par la Commission Européenne, conformément à l'article 46 du RGPD.",
      },
      {
        heading: '8. Durée de conservation',
        content: "Données du formulaire de contact : 3 ans à compter du dernier contact.\nDonnées analytics Google Analytics 4 : 13 mois (paramètre par défaut).\nConsentement Axeptio : 13 mois.",
      },
      {
        heading: '9. Sécurité',
        content: "L'ensemble des communications sont chiffrées via HTTPS/TLS. Les accès aux données sont strictement limités aux personnes autorisées. Nous sélectionnons nos prestataires selon leurs garanties de sécurité.",
      },
      {
        heading: '10. Vos droits',
        content: "Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation du traitement, opposition, portabilité, retrait du consentement.\n\nPour exercer ces droits, contactez-nous à contact@agsandco.fr. Nous répondons dans un délai de 30 jours.",
      },
      {
        heading: '11. Réclamation',
        content: "Vous avez le droit de déposer une réclamation auprès de la CNIL : cnil.fr, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
      },
    ],
  },
  rgpd: {
    title: 'Données personnelles & RGPD',
    subtitle: "Synthèse de nos engagements en matière de protection des données",
    sections: [
      {
        heading: 'Responsable du traitement',
        content: "Evens Augustin, AGS & Co.\nSIRET : 91206657800028\n59 rue de Ponthieu, Bureau 326, 75008 Paris\ncontact@agsandco.fr",
      },
      {
        heading: 'Catégories de données traitées',
        content: "Coordonnées (formulaire de contact) : prénom, email, secteur d'activité, message.\nDonnées de navigation (analytics) : pages vues, durée, pays, sans identification personnelle.",
      },
      {
        heading: 'Base légale de chaque traitement',
        content: "Formulaire de contact : base légale, intérêt légitime. Durée de conservation : 3 ans.\nAnalytics GA4 : base légale, consentement. Durée de conservation : 13 mois.\nConsentement cookies (Axeptio) : base légale, obligation légale. Durée : 13 mois.",
      },
      {
        heading: 'Vos droits',
        content: "Vous disposez des droits suivants :\nDroit d'accès à vos données\nDroit de rectification\nDroit à l'effacement (droit à l'oubli)\nDroit à la portabilité\nDroit d'opposition au traitement\nDroit à la limitation du traitement\nDroit de retrait du consentement\nDirectives relatives au sort de vos données post-mortem",
      },
      {
        heading: 'Exercer vos droits',
        content: "Adressez votre demande par email à contact@agsandco.fr en précisant votre identité. Nous répondons dans un délai maximum de 30 jours.\n\nEn cas d'absence de réponse satisfaisante, vous pouvez saisir la CNIL : cnil.fr",
      },
      {
        heading: 'Réclamation auprès de la CNIL',
        content: "Commission Nationale de l'Informatique et des Libertés\ncnil.fr, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07",
      },
    ],
  },
  cookies: {
    title: 'Politique de cookies',
    subtitle: 'Comment nous utilisons les cookies sur agsandco.fr',
    sections: [
      {
        heading: "Qu'est-ce qu'un cookie ?",
        content: "Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet au site de mémoriser certaines informations sur votre navigation.",
      },
      {
        heading: 'Cookies utilisés par AGS & Co.',
        content: "Cookies analytiques (Google Analytics 4) :\n_ga (Google) : distinguer les utilisateurs, conservé 13 mois.\n_gid (Google) : distinguer les utilisateurs, conservé 24 heures.\nCes cookies ne sont déposés qu'après votre consentement.\n\nCookies de consentement (Axeptio) :\naxeptio_cookies (Axeptio) : mémoriser vos préférences de consentement, conservé 13 mois.\nCes cookies sont nécessaires au fonctionnement du bandeau de consentement.",
      },
      {
        heading: 'Cookies strictement nécessaires',
        content: "Le site agsandco.fr ne dépose pas de cookies strictement nécessaires à la navigation (pas de session utilisateur, pas d'authentification). Les cookies Axeptio (consentement) sont exemptés de consentement au titre de l'article 82 de la loi Informatique et Libertés.",
      },
      {
        heading: 'Gérer vos préférences',
        content: "Lors de votre première visite, un bandeau Axeptio vous permet d'accepter ou de refuser les cookies analytiques. Vous pouvez modifier vos préférences à tout moment via le lien « Gérer mes cookies » en bas de page.",
      },
      {
        heading: 'Refuser les cookies',
        content: "Si vous refusez les cookies analytiques, Google Analytics ne se chargera pas et aucune donnée de navigation ne sera collectée. Le site fonctionne normalement sans ces cookies.",
      },
    ],
  },
}