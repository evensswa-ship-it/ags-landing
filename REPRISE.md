# Reprise de contexte — site AGS & Co (agsandco.fr)

## À lire avant toute chose

1. `CLAUDE.md` et `AGENTS.md` à la racine du projet. `CLAUDE.md` contient le positionnement, les règles de wording, le design system « Flux » et les conventions frontend. `AGENTS.md` impose de lire la doc Next embarquée (`node_modules/next/dist/docs/`) avant d'écrire du code Next : cette version (16.2.6) diffère de ce que tu connais.
2. `git log --oneline main..HEAD` pour voir ce qui a été fait.

## Avec qui tu travailles

Evens Augustin, fondateur d'AGS & Co. Il n'est pas technique : c'est un profil commercial et chef de projet.

- Écris-lui en français, sans jargon. Explique ce que ça change pour le site ou le visiteur, pas comment c'est codé.
- Quand une décision lui revient, pose une question claire avec une recommandation.
- Montre-lui le résultat (captures, site en local) plutôt que du code.
- Le site est commercial : chaque texte s'adresse à un dirigeant de PME, pas à un développeur. Seule la page `/gouvernance` tolère du vocabulaire technique, entre parenthèses.

## Le projet

- Dossier : `C:\Users\Utilisateur\Documents\AGS landing\ags-landing` (le dépôt git est ce sous-dossier, pas le dossier parent).
- Stack : Next.js 16 (App Router, Turbopack), Tailwind v4 (`@theme` dans `globals.css`), TypeScript strict, ESLint. Pas de librairie d'animation : tout est en CSS.
- Branche de travail : `refonte-complete` (créée depuis `main`). Elle contient toute la refonte. `refonte-wording` est une ancienne branche, obsolète.
- Règle absolue : ne rien pousser, déployer ni merger sans l'accord explicite d'Evens. Un commit par étape.

## État actuel

Refonte terminée et commitée : design system « Flux », 6 pages (`/`, `/cas-usage`, `/methode`, `/gouvernance`, `/a-propos`, `/contact`), 4 pages légales, redirections permanentes des anciennes URL, logo SVG, deux fondateurs (Evens et Naomie).

Build et lint verts. Lighthouse mobile : performance 91-95, accessibilité 100, SEO 100.

Où sont les choses :

- Textes : `src/data/` (`site.ts` pour nav, footer, CTA ; un fichier par page ; `legal.ts` pour les pages légales). Aucun texte en dur dans les composants.
- Composants : `src/components/ui`, `visuals`, `layout`. Nav et Footer sont rendus par `src/app/layout.tsx`, ne pas les répéter dans les pages.
- Marque : `brand/` (logos, photos sources). Ne jamais redessiner le logo.
- Redirections : `next.config.ts`.

## Points en attente de décision d'Evens

1. Page Confidentialité, section 6 (sous-traitants) : Formspree n'y figure pas alors que le formulaire passe par lui ; Supabase et OpenAI y figurent alors que le site ne les utilise pas (seul Anthropic est utilisé). À corriger s'il confirme.
2. Formspree : les messages du formulaire arrivent à l'adresse configurée dans son compte Formspree, pas à `claude@agsandco.fr`. Il a choisi de laisser ainsi pour l'instant.
3. Le formulaire de contact n'a jamais été testé en envoi réel.
4. Le bandeau cookies (Axeptio) et les scripts de mesure se chargent à la première interaction du visiteur ou après 8 s (`src/components/ThirdParties.tsx`). C'est ce qui tient le score de performance au-dessus de 90. Il n'a pas encore validé ce choix.
5. Le logo mobile fait 24 px de haut ; « & CO » y est fin. Il peut vouloir 28 px.
6. `src/lib/analytics.ts` : ancien code commenté, jamais utilisé, laissé en l'état.

## Règles de contenu à ne pas enfreindre

- « Collaborateur IA » dans les textes commerciaux ; « agent IA » pour expliquer ou pour le SEO. Jamais « copilote » ni « assistant ».
- Aucun chiffre, client, logo ou témoignage inventé. Tout chiffre d'exemple porte l'étiquette « Exemple illustratif ».
- Pas de segmentation par secteur, pas de logos d'outils ou de fournisseurs d'IA.
- Adresse de contact unique : `claude@agsandco.fr` (boîte de son collaborateur IA, qui ne répond jamais seul : une personne valide chaque réponse). L'ancienne adresse `contact@` n'existe pas, ne pas la réintroduire.
- Apostrophes typographiques (’) dans les textes affichés.
- Couleurs uniquement via les tokens (`night`, `deep`, `ink`, `mist`, `line`, `signal`, `human`). La couleur `human` ne sert qu'à « une personne valide ».
- Pages légales : ne modifier le contenu que sur demande explicite.

## Pour travailler

- Vérifier : `npx tsc --noEmit`, `npm run lint`, `npx next build`.
- Voir le site : `npx next start -p 3100` après un build (ou `npm run dev`). Ne pas lancer `next build` pendant que `next dev` tourne : ça casse le serveur de dev.
- Captures et contrôle responsive : outils Playwright, aux largeurs 375, 768, 1280, 1440. Les captures se rangent dans le dossier parent (`../shots/`), hors du dépôt.
- Lighthouse : `npx lighthouse http://localhost:3100/ --form-factor=mobile` (Chrome est installé sur la machine).
- Piège rencontré : dans une commande shell, les accents graves et les `\n` d'un texte sont interprétés. Pour écrire du Markdown ou du texte long, utiliser l'outil d'écriture de fichier plutôt qu'une commande shell.

Commence par lire `CLAUDE.md` et `AGENTS.md`, puis demande à Evens ce qu'il veut modifier.
