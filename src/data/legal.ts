export type LegalSection = { heading: string; content: string }

export type LegalPageData = {
  title: string
  subtitle: string
  sections: LegalSection[]
}

export const lastUpdated = '13 novembre 2026'

export const legalChrome = {
  eyebrow: 'Informations légales',
  updated: 'Dernière mise à jour :',
}

export const legalPages: Record<string, LegalPageData> = {
  'mentions-legales': {
    title: 'Mentions légales',
    subtitle: 'Informations légales relatives au site agsandco.fr',
    sections: [
      {
        heading: 'Éditeur du site',
        content: "Evens Augustin EI, nom commercial AGS & Co\nEntreprise individuelle, SIREN 912 066 578 (SIRET 912 066 578 00028)\nTVA intracommunautaire : FR78 912066578\nAdresse : 59 rue de Ponthieu, Bureau 326, 75008 Paris\nTéléphone : 07 49 21 35 05\nEmail : evens@agsandco.fr\nDirecteur de la publication : Evens Augustin",
      },
      {
        heading: 'Hébergement',
        content: "Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis – vercel.com",
      },
      {
        heading: 'Propriété intellectuelle',
        content: "Les contenus de ce site (textes, visuels, logo, structure) appartiennent à Evens Augustin EI (AGS & Co), sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
      },
      {
        heading: 'Liens',
        content: "Les liens vers des sites tiers sont fournis à titre informatif. AGS & Co n'est pas responsable de leur contenu.",
      },
      {
        heading: 'Responsabilité',
        content: "AGS & Co veille à l'exactitude des informations publiées, sans pouvoir garantir l'absence d'erreur ou d'interruption du site.",
      },
      {
        heading: 'Données personnelles et cookies',
        content: "Voir la politique de confidentialité (/legal/confidentialite) et la politique cookies (/legal/cookies).",
      },
      {
        heading: 'Droit applicable',
        content: "Droit français. Tribunaux compétents : ceux du ressort du siège de l'éditeur.",
      },
    ],
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    subtitle: 'Comment AGS & Co collecte, utilise et protège vos données personnelles',
    sections: [
      {
        heading: '1. Introduction',
        content: "La présente politique de confidentialité décrit la manière dont AGS & Co collecte et utilise vos données personnelles dans le cadre de l'utilisation du site agsandco.fr. AGS & Co s'engage à protéger la vie privée de ses visiteurs conformément au Règlement Général sur la Protection des Données (RGPD).",
      },
      {
        heading: '2. Responsable du traitement',
        content: "Evens Augustin EI (AGS & Co), entreprise individuelle\nSIRET : 91206657800028\n59 rue de Ponthieu, Bureau 326, 75008 Paris\nContact : evens@agsandco.fr",
      },
      {
        heading: '3. Délégué à la protection des données',
        content: "Evens Augustin\nContact : evens@agsandco.fr\n59 rue de Ponthieu, Bureau 326, 75008 Paris",
      },
      {
        heading: '4. Données collectées',
        content: "Nous collectons uniquement les données que vous nous communiquez volontairement via le formulaire de contact : prénom, adresse email, secteur d'activité et message.\n\nNous collectons également des données de navigation anonymisées via Google Analytics 4 (pages visitées, durée de session, pays de connexion), collectées uniquement avec votre consentement explicite.",
      },
      {
        heading: '5. Finalités et bases légales',
        content: "Formulaire de contact : traitement basé sur l'intérêt légitime d'AGS & Co à répondre aux demandes entrantes.\n\nAnalytics Google Analytics 4 : traitement basé sur votre consentement, recueilli via notre bandeau Axeptio.\n\nLes messages reçus par email ou via le formulaire de contact peuvent être lus, classés et préparés par un collaborateur IA d'AGS & Co. Chaque réponse est relue et validée par une personne avant envoi. Aucune décision vous concernant n'est prise de façon entièrement automatisée.",
      },
      {
        heading: '6. Sous-traitants et hébergeurs',
        content: "Vercel Inc. (USA) : hébergement du site web, couvert par clauses contractuelles types (SCCs).\nFormspree Inc. (USA) : réception des messages du formulaire de contact, couvert par SCCs.\nAnthropic PBC (USA) : modèles Claude, couvert par SCCs.\nGoogle LLC (USA) : Google Analytics 4, couvert par SCCs.",
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
        content: "Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation du traitement, opposition, portabilité, retrait du consentement.\n\nPour exercer ces droits, contactez-nous à evens@agsandco.fr. Nous répondons dans un délai de 30 jours.",
      },
      {
        heading: '11. Réclamation',
        content: "Vous avez le droit de déposer une réclamation auprès de la CNIL : cnil.fr, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.",
      },
      {
        heading: '12. Fiche offerte et page Rencontre',
        content: "Responsable du traitement : Evens Augustin, EI, AGS & Co, 59 rue de Ponthieu, Bureau 326, 75008 Paris.\n\nFinalité : vous envoyer la fiche demandée sur la page Rencontre, puis deux e-mails de suivi.\nBase légale : votre consentement, donné en cochant la case du formulaire.\nDonnées : prénom, adresse e-mail professionnelle, entreprise (facultatif) et provenance de la visite (par exemple « carte »).\n\nDestinataire : AGS & Co uniquement. Outils techniques utilisés : l'hébergeur du site, n8n (envoi et suivi des e-mails) et Google Workspace (messagerie et tableau de suivi). Vos données ne sont ni vendues ni partagées.\nDurée de conservation : 3 ans après notre dernier contact.\n\nLes visites de la page Rencontre sont comptées sans cookie et sans donnée personnelle : seules la date et la provenance sont enregistrées.\n\nVos droits : accès, rectification, effacement, opposition et retrait du consentement à tout moment, en écrivant à evens@agsandco.fr ou en cliquant sur « Ne plus recevoir ces e-mails » en bas de chaque e-mail. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).",
      },
    ],
  },
  rgpd: {
    title: 'Données personnelles & RGPD',
    subtitle: "Synthèse de nos engagements en matière de protection des données",
    sections: [
      {
        heading: 'Responsable du traitement',
        content: "Evens Augustin EI (AGS & Co)\nSIRET : 91206657800028\n59 rue de Ponthieu, Bureau 326, 75008 Paris\nevens@agsandco.fr",
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
        content: "Adressez votre demande par email à evens@agsandco.fr en précisant votre identité. Nous répondons dans un délai maximum de 30 jours.\n\nEn cas d'absence de réponse satisfaisante, vous pouvez saisir la CNIL : cnil.fr",
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
        heading: 'Cookies utilisés par AGS & Co',
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