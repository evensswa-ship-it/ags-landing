import type { Article } from '../blog'
import { site } from '../site'

export const iaDevoirDeConseilCourtier: Article = {
  slug: 'ia-devoir-de-conseil-courtier',
  meta: {
    title: 'IA et devoir de conseil (DDA) : ce que garde le courtier',
    description:
      'DDA, RGPD, AI Act : comment un agent IA prépare vos dossiers sans toucher à votre devoir de conseil. Le courtier décide. Diagnostic gratuit de 45 min.',
  },
  category: 'Courtage en assurance',
  title: {
    lead: 'IA et devoir de conseil :',
    rest: 'pourquoi, dans un cabinet de courtage, l’agent prépare et le courtier décide',
  },
  lede:
    'Vendredi, 18 h. Il reste trois fiches conseil à compléter avant le week-end, et vous vous demandez si l’IA dont tout le monde parle pourrait les faire à votre place. Puis une question vous arrête : et mon devoir de conseil, si c’est une machine qui écrit ? Bonne question. La réponse tient en une règle : l’agent prépare, le courtier décide.',
  published: '2026-11-16',
  updated: '2026-11-16',
  readingMinutes: 7,
  blocks: [
    {
      type: 'image',
      src: '/blog/ia-devoir-de-conseil-courtier/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Des pièces et documents épars convergent vers un dossier unique avec sa liste de contrôle, passent par un sceau de validation doré, puis rejoignent un dossier archivé suivi d’une frise de traçabilité.',
      caption: 'L’agent prépare le dossier, le courtier valide, chaque étape est tracée',
    },
    { type: 'h2', text: 'Le devoir de conseil prend du temps, et ce temps se compte' },
    {
      type: 'p',
      text: 'Depuis la directive sur la distribution d’assurances (DDA), transposée dans le Code des assurances en 2018, le courtier doit recueillir les exigences et les besoins du client, l’informer de façon objective, et lui proposer un contrat cohérent avec ce qu’il a exprimé (article L. 521-4). Il doit aussi pouvoir le **montrer** : une recommandation sans trace écrite est une recommandation fragile en cas de contrôle ou de litige.',
    },
    {
      type: 'p',
      text: 'Le conseil lui-même, c’est votre métier. Ce qui coûte, c’est tout ce qu’il y a autour : reprendre les réponses du client, remplir la fiche de recueil, rédiger la justification, ranger les pièces, vérifier que rien ne manque. Un travail qu’on ne peut pas bâcler, et qui ne rapporte rien en soi.',
    },
    {
      type: 'example',
      title: 'Le temps passé à formaliser le conseil (à refaire avec vos chiffres)',
      rows: [
        { label: 'Contrats placés ou renouvelés avec conseil formalisé, par mois', value: '60' },
        { label: 'Temps de formalisation par dossier (recueil, fiche conseil, classement)', value: '20 min' },
        { label: 'Temps passé par mois', value: '20 h', strong: true },
        { label: 'Coût horaire chargé d’un chargé de clientèle', value: '35 €' },
        { label: 'Coût par an', value: 'environ 8 400 €', strong: true },
      ],
      note: 'Hypothèses à remplacer par les vôtres : nombre de dossiers, temps réel par dossier, coût horaire de la personne qui s’en charge.',
    },
    {
      type: 'p',
      text: 'Vingt heures par mois, c’est presque trois jours de travail. Et ce chiffre ne compte pas le temps perdu à reprendre une fiche incomplète, ni le stress d’un dossier qu’on ne retrouve plus le jour où on vous le demande.',
    },
    { type: 'h2', text: 'Pourquoi les solutions habituelles ne suffisent pas' },
    {
      type: 'p',
      text: '**Les modèles de fiches.** Ils font gagner du temps à la mise en page, pas au remplissage. Quelqu’un doit toujours reprendre chaque réponse du client, une par une.',
    },
    {
      type: 'p',
      text: '**Les cases à cocher de votre logiciel de gestion.** Elles prouvent qu’une étape a été franchie, rarement pourquoi tel contrat a été recommandé plutôt qu’un autre. C’est pourtant ce « pourquoi » qui protège le courtier.',
    },
    {
      type: 'p',
      text: '**L’IA grand public, utilisée en copier-coller.** C’est la tentation du vendredi soir : coller les réponses du client dans une fenêtre de discussion et demander une fiche conseil. Les données personnelles partent on ne sait où, rien n’est tracé, et le texte produit peut sembler juste sans l’être. Le gain de temps est réel, le risque aussi.',
    },
    { type: 'h2', text: 'Comment un agent IA prend en charge le dossier, sans prendre la décision' },
    {
      type: 'p',
      text: 'Un agent IA n’est pas une fenêtre où l’on pose des questions. C’est un collaborateur formé à votre processus, qui travaille dans vos logiciels, avec vos règles. Pour le devoir de conseil, il suit toujours le même chemin :',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Il reçoit** les éléments du client : réponses au questionnaire, e-mail, pièces envoyées, notes du rendez-vous.',
        '**Il lit et vérifie** : une réponse manque, une date ne colle pas, un besoin exprimé ne correspond à aucune garantie demandée. Il le signale au lieu de deviner.',
        '**Il prépare** la fiche de recueil des besoins, le brouillon de justification de la recommandation, et la liste des pièces à réclamer.',
        '**Vous décidez** : vous relisez, corrigez, choisissez le contrat et validez. Rien ne part chez le client ni chez la compagnie avant.',
        '**Il exécute et trace** : envoi après validation, classement dans le dossier client, et un journal de qui a validé quoi, et quand.',
      ],
    },
    {
      type: 'callout',
      title: 'Ce que le courtier garde, toujours',
      items: [
        'L’analyse des besoins et le choix du contrat recommandé.',
        'La relecture et la validation de chaque document avant envoi.',
        'La signature et la relation avec le client.',
      ],
    },
    {
      type: 'p',
      text: 'Le même principe vaut pour un CGP qui distribue de l’assurance vie : l’agent prépare le compte-rendu et les projets de documents, le conseiller relit, ajuste et signe. Et c’est la même logique que pour la ressaisie sur les extranets, dont nous avons fait le calcul dans un précédent article : l’agent prend le travail répétitif, jamais le conseil.',
    },
    {
      type: 'cta',
      text: 'Quel processus vous fait perdre le plus de temps ? Réservez votre diagnostic gratuit de 45 minutes, en visio et sans engagement. On repère ensemble le processus qui vous coûte le plus et on le chiffre. Vous repartez avec le chiffre, même si vous n’allez pas plus loin.',
      link: { label: 'Réserver mon diagnostic gratuit', href: site.calendly },
    },
    { type: 'h2', text: 'Les garde-fous : ce qui protège votre devoir de conseil' },
    {
      type: 'p',
      text: '**Une personne décide.** Le RGPD (article 22) donne à chacun le droit de ne pas faire l’objet d’une décision fondée uniquement sur un traitement automatisé lorsqu’elle l’affecte de manière significative. Avec un agent qui prépare et un courtier qui tranche, la décision reste humaine. C’est aussi ce que le devoir de conseil attend de vous.',
    },
    {
      type: 'p',
      text: '**Vos accès restent les vôtres.** L’agent travaille avec vos accès, dans votre session, sans stocker vos mots de passe d’extranet.',
    },
    {
      type: 'p',
      text: '**Chaque action est tracée.** Ce que l’agent a lu, ce qu’il a préparé, ce que vous avez modifié, qui a validé et quand. Le jour d’un contrôle ou d’une réclamation, vous montrez comment le conseil a été construit, pièce par pièce.',
    },
    {
      type: 'p',
      text: '**Le client sait à qui il parle.** Le règlement européen sur l’intelligence artificielle (AI Act, article 50) impose d’informer une personne qu’elle échange avec un système d’IA. Quand l’agent écrit au client, par exemple pour réclamer une pièce, il le dit, et le client peut toujours joindre un membre du cabinet.',
    },
    {
      type: 'p',
      text: '**L’agent ne fixe ni prix ni risque.** Le même règlement classe parmi les usages « à haut risque » l’évaluation des risques et la tarification des personnes en assurance vie et santé. Un agent qui prépare un dossier et laisse le choix au courtier reste du bon côté de cette ligne. Nous concevons chaque agent avec vous, et avec votre responsable conformité ou votre DPO quand vous en avez un.',
    },
    { type: 'h2', text: 'Par où commencer' },
    {
      type: 'p',
      text: 'Pas par tout le cabinet. Par un seul processus, celui où le devoir de conseil vous coûte le plus de temps. Trois questions pour le repérer :',
    },
    {
      type: 'list',
      items: [
        'Quel document de conseil rédigez-vous le plus souvent, chaque semaine ?',
        'Quel dossier revient le plus souvent parce qu’il manquait une pièce ou une réponse ?',
        'Si on vous demandait demain de justifier une recommandation d’il y a deux ans, combien de temps vous faudrait-il pour la retrouver ?',
      ],
    },
    {
      type: 'p',
      text: 'La réponse à ces trois questions désigne en général le premier agent à modéliser. On le met en place sur ce seul processus, on mesure le temps gagné, puis on décide de la suite. L’IA ne remplace pas votre devoir de conseil : bien encadrée, elle vous laisse plus de temps pour l’exercer.',
    },
    {
      type: 'callout',
      title: 'À retenir',
      items: [
        '**L’agent prépare, le courtier décide** : analyse, recommandation et signature restent chez vous.',
        'Validation humaine avant tout envoi, accès sans mot de passe stocké, journal de chaque action.',
        'On commence par un seul processus, celui qui coûte le plus, et on mesure.',
      ],
    },
    {
      type: 'faq',
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Un agent IA est-il compatible avec la DDA et mon devoir de conseil ?',
          answer:
            'Oui, s’il est conçu pour préparer et non pour décider. L’agent rassemble les informations, signale ce qui manque et rédige des brouillons ; vous analysez, recommandez, validez et signez. Rien ne part chez le client ou la compagnie sans votre validation.',
        },
        {
          question: 'Et nos données clients, nos mots de passe d’extranet ?',
          answer:
            'L’agent travaille avec vos accès, dans votre session, sans stocker vos mots de passe. Tout est journalisé : ce qui a été lu, préparé, validé, par qui et quand.',
        },
        {
          question: 'L’IA, ce n’est pas pour un cabinet comme le nôtre ?',
          answer:
            'C’est justement l’objet du diagnostic gratuit : regarder vos vrais dossiers et voir si un agent vous fait gagner du temps. Si ce n’est pas le cas, on vous le dit.',
        },
      ],
    },
    {
      type: 'signature',
      text: 'Evens Augustin, fondateur d’AGS & Co. AGS & Co intègre des collaborateurs IA dans les PME, avec validation humaine et traçabilité à chaque étape. L’IA au travail. Sous contrôle.',
    },
  ],
  landing: { label: 'Agents IA pour courtiers et CGP', href: '/courtiers' },
  closing: {
    title: 'Quel processus vous fait perdre le plus de temps ?',
    text: 'Réservez votre diagnostic gratuit de 45 minutes, en visio et sans engagement. On repère ensemble le processus qui vous coûte le plus et on le chiffre. Vous repartez avec le chiffre, même si vous n’allez pas plus loin.',
    label: 'Réserver mon diagnostic gratuit',
  },
}
