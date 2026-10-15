# Intégration des composants UI

Projet Next.js qui regroupe plusieurs composants React/Tailwind en une landing page interactive et moderne.

## Aperçu

Le projet met en avant des éléments d'interface animés et réutilisables :

- `AuroraHero` : fond animé avec dégradé et bandes colorées
- `PopButton` : bouton 3D avec effet de pression
- `SocialFlipButton` : boutons sociaux qui se retournent au hover
- `FaqAccordion` : accordéon accessible pour FAQ
- `ImageRevealList` : liste avec révélation d'image au survol

La page d'accueil actuelle combine `AuroraHero` en fond avec plusieurs composants superposés.

## Stack technique

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- react-icons
- clsx
- tailwind-merge

## Prérequis

- Node.js 18+
- npm

## Installation

Depuis la racine du projet :

```bash
npm install
```

## Démarrage

```bash
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

## Build de production

```bash
npm run build
npm run start
```

## Structure du projet

```text
integration-composants/
├── app/
│   ├── components/
│   │   └── ui/
│   │       ├── aurora-hero.tsx
│   │       ├── faq-accordion.tsx
│   │       ├── fluid-morph-bg.tsx
│   │       ├── image-reveal-list.tsx
│   │       ├── pop-button.tsx
│   │       └── social-flip-button.tsx
│   ├── data/
│   │   └── image-reveal-items.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── package-lock.json
```

L'alias `@/*` pointe vers le dossier `app/` via `tsconfig.json`.

## Page d'accueil actuelle

La page principale est située dans `app/page.tsx` et suit ce principe :

```tsx
import { PopButton } from "@/components/ui/pop-button";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { AuroraHero } from "@/components/ui/aurora-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { items } from "@/data/image-reveal-items";
import { ImageRevealList } from "@/components/ui/image-reveal-list";

export default function PopButtonDemo() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AuroraHero title="" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6">
        <FaqAccordion />
        <PopButton>Learn More</PopButton>
        <SocialFlipButton platform="twitter" href="https://twitter.com" />
        <ImageRevealList items={items} />
      </div>
    </main>
  );
}
```

## Composants

### `PopButton`

Bouton accessible et personnalisable avec effet de profondeur.

```tsx
import { PopButton } from "@/components/ui/pop-button";

export default function Demo() {
  return <PopButton type="button">Découvrir</PopButton>;
}
```

### `SocialFlipButton`

Boutons sociaux qui affichent une lettre au recto et une icône au verso lors du survol.

```tsx
import SocialFlipButton from "@/components/ui/social-flip-button";

export default function Demo() {
  return <SocialFlipButton />;
}
```

### `FaqAccordion`

Accordéon simple avec gestion d'état interne et support de `ReactNode` dans les réponses.

```tsx
import { FaqAccordion } from "@/components/ui/faq-accordion";

export default function Demo() {
  return <FaqAccordion title="Questions fréquentes" />;
}
```

### `ImageRevealList`

Liste de cartes avec image qui apparaît au survol de chaque item.

```tsx
import { ImageRevealList } from "@/components/ui/image-reveal-list";

const items = [
  {
    id: "1",
    title: "The Great Gatsby",
    subtitle: "F. Scott Fitzgerald",
    image: "/covers/example.png",
    number: "01",
    href: "/books/gatsby",
  },
];

export default function Demo() {
  return <ImageRevealList items={items} />;
}
```

## Personnalisation

### Couleurs Aurora

Dans `app/components/ui/aurora-hero.tsx`, les variables CSS comme `--rainbow` et `--stripe-color` permettent de modifier la palette et le rendu du fond.

### Layout plein écran

Pour un fond qui couvre la fenêtre, le composant doit avoir des classes de type :

```tsx
className="h-dvh w-full"
```

et être placé dans un conteneur avec `relative` / `overflow-hidden` si besoin.

## Notes

- Les composants sont pensés pour être réutilisés dans des pages ou sections distinctes.
- Le projet est idéal pour prototyper des interfaces modernes en Next.js sans dépendre d'un package externe complet.
- Les styles sont principalement gérés par Tailwind CSS, avec de petites animations Framer Motion pour les effets visuels.

## Auteur

Projet de démonstration UI / intégration de composants modernes pour Next.js.
