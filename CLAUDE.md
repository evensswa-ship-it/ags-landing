@AGENTS.md

# AGS & Co. — Conventions projet

## Statut : refonte complète en cours (branche `refonte-complete`)

- Design system « Flux » en place (voir plus bas). Architecture : Accueil (Hero, cas d’usage, équipe, appel final), Méthode & offres, Gouvernance, À propos, Contact. Les cas d’usage sont une section de l’accueil (`/#cas-usage`), pas une page : l’accueil montre ce qu’AGS fait, le détail du processus vit sur Méthode & offres.
- Ne pousse rien, ne déploie rien, ne merge rien sans validation explicite d'Evens.

## Positionnement (référence pour tout texte)

- AGS transforme des processus métier en opérations augmentées et automatisées par l'IA. On vend une capacité opérationnelle avec des résultats mesurables, pas un agent.
- Cibles : PME et ETI, de façon transversale. **Pas de segmentation par secteur** : on segmente par situation, processus, capacité, résultat. Les secteurs n'apparaissent que dans des cas clients.
- Offre : Audit (forfait) → Setup initial (projet) → Abonnement mensuel avec 4 revues trimestrielles incluses (feuille de route remplie par le client avant chaque revue).
- AGS est basé à Rouen (Normandie). Premier échange : https://calendly.com/evens-agsandco/30min

## Wording — règles éditoriales

**Ton** : premium · sobre · direct · business · concret. Chaque phrase dit au lecteur ce qu'il y gagne.

**Simplicité PME (règle prioritaire)** :
- Une section = un message. Titre court + 1 à 2 phrases. Listes de 3 à 5 éléments maximum.
- Deux niveaux de lecture : homepage et offres en langage de dirigeant ; vocabulaire technique réservé à la page Gouvernance / sécurité.
- Traductions au niveau 1 : human-in-the-loop → « une personne valide » ; orchestration → « vos outils travaillent ensemble » ; logs → « chaque action est tracée » ; data readiness → « vos données sont-elles prêtes ? ».

**Vocabulaire** :
- « Collaborateur IA » dans les textes commerciaux ; « agent IA » pour expliquer et pour le SEO. Jamais « copilote » ni « assistant ».
- Résultats dans cet ordre : volume traité, temps gagné, erreurs évitées, ventes récupérées, puis le coût.

**Interdits** :
- Promesses irréalistes (« 100 % sécurisé », « conformité garantie », « hébergement souverain total »).
- Formules creuses : révolutionner, réinventer, puissance de l'IA, entrez dans le futur, solution innovante, magique, 100 % automatisé.
- Le mot « problème » dans les textes affichés : dire « aujourd’hui », « la situation », « ce qui prend du temps ».
- Arguments de remplacement : « remplace N salariés », « moins cher qu'un salarié ».
- Chiffres, clients, logos clients ou témoignages inventés. Tout exemple chiffré est étiqueté « Exemple illustratif ».
- Logos d'outils ou de fournisseurs d'IA sur le site. AGS est agnostique technologiquement.
- Jargon juridique lourd. AGS ne garantit pas la conformité : il conçoit, gouverne et accompagne, en lien avec les équipes conformité et le DPO du client.

**À valoriser** :
- Pragmatisme, compréhension des processus avant la technologie.
- Contrôle humain, permissions, traçabilité, mesure des gains.
- Transparence sur les données (où elles sont traitées, ce qui est conservé) : sur la page Gouvernance / sécurité, sans logos. La trajectoire européenne s'y présente comme un objectif, pas comme une promesse.

## Conventions frontend

- **Textes** : 100 % dans `src/data/` (`site.ts` pour la navigation, le footer et les CTA ; un fichier par page). Aucun texte en dur dans les composants.
- **Server Components par défaut.** `'use client'` uniquement sur les composants qui en ont besoin (animation, état, interaction), et le plus bas possible dans l'arbre.
- **TypeScript strict** : `any` interdit.
- **Tailwind v4** : configuration uniquement via `@theme` dans `globals.css`, pas de `tailwind.config.ts`. Couleurs, typographies, espacements et rayons passent par des tokens `@theme` : pas de valeurs hexadécimales en dur dans les classes.
- **Animations** : CSS en priorité. Toujours respecter `prefers-reduced-motion`. Aucune animation ne doit dégrader les Core Web Vitals.
- **Accessibilité** : contraste AA, navigation clavier, focus visibles, hiérarchie de titres correcte.
- **Performance** : objectif Lighthouse mobile 90+ (performance, accessibilité, SEO). Images via `next/image`, polices via `next/font`.
- Toute URL supprimée reçoit une redirection 301.
- Pages légales : contenu inchangé.

## Design system « Flux »

Thème sombre uniquement. Le futurisme vient de la précision et du mouvement, jamais des effets.

### Tokens (`@theme` dans `src/app/globals.css`)

| Token | Valeur | Usage |
|---|---|---|
| `night` | `#050A18` | Fond principal |
| `deep` | `#081226` | Fond de section alternatif, fond des cartes |
| `glow` | `#12244D` | Halo du dégradé du hero (`.hero-bg`), nulle part ailleurs |
| `ink` | `#F1F4FA` | Texte principal, titres |
| `mist` | `#9DABC8` | Texte secondaire, seconde partie des titres |
| `line` | `#22325A` | Filets, lignes du flux, bordures de cartes (jamais du texte) |
| `signal` | `#7CC4FF` | Accent unique : flux, bouton principal, liens |
| `human` | `#F2C46D` | Un seul sens : « une personne valide » |

Classes Tailwind : `bg-night`, `text-mist`, `border-line`, `rounded-pill`, `rounded-card`, `max-w-page`. Aucune valeur hexadécimale dans les composants. Contours de champs et de boutons secondaires : `border-mist/40` (`line` est trop peu contrasté pour délimiter un contrôle).

### Typographie

| Usage | Police | Classe |
|---|---|---|
| H1 à H3, grands chiffres | Inter Tight 600-700, approche -0,02 à -0,035 em | `t-h1`, `t-h2`, `t-h3`, `font-display` |
| Texte courant, sous-titres | Inter 400, 17 à 19 px, interligne 1,5 | `t-lede` (défaut du `body` sinon) |
| Navigation, boutons, liens, labels | Inter 500-600, casse normale | `t-small` + `font-medium` |
| Chiffres, durées, étapes | Inter, chiffres tabulaires | `t-num` |

- Titres sur deux tons via `<Title lead rest />` : la promesse en `ink`, la suite en `mist`.
- Apostrophes typographiques (’) dans tous les textes affichés.
- Interdits : empattements, monospace, Montserrat, texte en light, labels en petites majuscules espacées.

### Composants

- `ui/Button` : pilule. `primary` (fond `signal`, texte `night`), `secondary` (contour), `link`. Un seul CTA principal sur le site : « Parler d’un processus ».
- `ui/Title`, `ui/Section` (fond `night` ou `deep`, sans dégradé), `ui/Tag` (« Exemple illustratif », obligatoire sur tout chiffre non issu d’un vrai cas).
- `visuals/Flow` : étapes numérotées reliées par une ligne ; l’étape marquée `human` est en couleur `human` avec halo. Horizontal dès 1024 px, vertical en dessous.
- `visuals/Equation`, `visuals/BeforeAfter`, `visuals/PersonCard`, `visuals/Results` (masqué par `results.enabled`).
- `layout/Nav` et `layout/Footer` sont rendus par `app/layout.tsx` : ne pas les répéter dans les pages.
- `visuals/AgentAvatar` : portrait rond d’un collaborateur IA, avec la mention « Collaborateur IA · métier ». Il identifie un collaborateur IA : ce n’est pas une icône décorative.
- Cartes rares : seulement pour un objet réel (fiche de collaborateur IA, offre, exemple). Pas de grille de cartes identiques, pas d’icône décorative.

### Avatars des collaborateurs IA

Seule exception aux interdits visuels ci-dessous : chaque collaborateur IA de la section Cas d’usage de l’accueil a un avatar à visage humain réaliste.

- Un avatar par fonction (Commercial, Service client, Administration & finance, Opérations, Direction). Même cadrage, même lumière, fond sombre proche de `night`.
- Toujours accompagné de la mention « Collaborateur IA · métier ». Jamais de prénom.
- Jamais présenté comme un salarié, un client ou un témoignage. Ne ressemble à aucune personne réelle.
- La mention « Visages générés par IA » est visible sur la page.
- Sources dans `brand/photos/agents/`, versions recadrées dans `public/agents/`.

### Motion

- Le contenu est visible au repos : jamais de contenu bloqué à `opacity: 0`. `lib/useInView` « arme » puis « allume » un bloc ; sans JavaScript ou avec `prefers-reduced-motion`, l’état final s’affiche directement.
- Tout est en CSS (`@keyframes flux-*`, transitions `.eq-*` et `.ba-*` dans `globals.css`). N’ajouter une librairie de motion que pour une séquence impossible en CSS, et le justifier.
- Une animation doit raconter quelque chose (un flux, une étape supprimée, un résultat). Pas d’apparition décorative sur chaque section.

### Logo

Logo : `/brand`, ne jamais le recréer en texte ou le redessiner. Navigation et footer utilisent `components/ui/Logo` (tracé de `brand/logo-dark.svg`) ; `brand/logo-light.svg` est réservé aux fonds clairs. Icônes et image de partage : fichiers `src/app/` (`favicon.ico`, `icon.*`, `apple-icon.png`, `opengraph-image.png`). Photos sources dans `brand/photos/`, versions recadrées dans `public/team/`.

### Interdits visuels

Robot, cerveau, main robotique, circuit, globe, particules, réseau neuronal décoratif, néons, photos stock, logos d’outils ou de fournisseurs d’IA, faux logos clients, faux témoignages. Les avatars des collaborateurs IA sont la seule exception (voir « Avatars des collaborateurs IA »).

## Stack technique

Next.js 16 (App Router · Turbopack) · Tailwind CSS v4 · TypeScript strict · ESLint (`npm run lint`)
Déploiement : Vercel · Domaine : OVH