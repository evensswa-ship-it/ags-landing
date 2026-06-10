@AGENTS.md

# AGS & Co. — Conventions projet

## Design System — Palette

| Rôle | Valeur |
|---|---|
| Background principal | `#010310` |
| Background secondaire | `#010B17` |
| Background carte | `#050E22` |
| Bordure | `#1A2E55` |
| Accent bleu | `#1660EC` |
| Texte principal | `#ffffff` |
| Texte secondaire / muted | `#8899BB` |

## Design System — Typographie

- **Headings h2** : `font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl`
- **SectionLabel eyebrow** : `font-[var(--font-montserrat)] text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]`
- **Corps principal** : `text-sm font-light leading-7 text-[#8899BB]`
- **Intro paragraph** : `text-base font-light leading-7 text-[#8899BB]`

## Design System — Layout & Cartes

- Section : `px-5 py-24 sm:px-8`
- Centrage : `mx-auto max-w-7xl`
- Carte standard : `rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6`

## Design System — Animations (Framer Motion)

```tsx
// Entrée simple
initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}

// Liste échelonnée (parent)
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ staggerChildren: 0.1 }}

// Enfant
variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
transition={{ duration: 0.5 }}
```

## Design System — Icônes SVG

- ViewBox : `0 0 24 24`, `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.8"`, `strokeLinecap="round"`, `strokeLinejoin="round"`
- Conteneur carré : `h-11 w-11 rounded-[8px] border border-[#1660EC]/35 bg-[#1660EC]/10 text-[#1660EC]`
- Conteneur rond : `h-14 w-14 rounded-full border border-[#1660EC] bg-[#050E22] text-[#1660EC]`

## Conventions Frontend

- **Textes** : 100 % dans `src/data/content.ts` — aucun texte hardcodé dans les composants
- **Directive** : `'use client'` en tête de chaque composant de section
- **Imports** : `@/data/content`, `@/components/ui/Button`, `@/components/ui/SectionLabel`
- **TypeScript strict** — interdire `any`
- **Tailwind v4** : config CSS uniquement via `@theme` dans `globals.css`, pas de `tailwind.config.ts`

## Ordre des sections (scroll)

```
Nav → Hero → Cockpit → Philosophy → Offer → DataPrivacy → Contact → Footer → LegalMentions
```

## Wording AGS — Règles éditoriales

**Ton** : premium · sobre · institutionnel moderne · sans jargon excessif

**Interdits** :
- Promesses irréalistes ("100 % sécurisé", "conformité garantie")
- "Hébergement souverain total" (faux à ce stade)
- Jargon juridique lourd

**À valoriser** :
- Pragmatisme et adaptation terrain
- Transparence sur la stack (Vercel, Supabase, OpenAI, Anthropic)
- Trajectoire européenne (objectif validé, pas promesse immédiate)
- Accompagnement responsable

## Stack technique

Next.js 16 (App Router · Turbopack) · Tailwind CSS v4 · Framer Motion 12 · TypeScript strict  
Déploiement : Vercel · Domaine : OVH
