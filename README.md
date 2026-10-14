# Integration des composants UI

Projet Next.js qui rassemble des composants React personnalises avec Tailwind CSS :

- **Pop Button** : bouton avec effet de pression en relief.
- **Social Flip Button** : boutons sociaux qui pivotent au survol.
- **Fluid Morph Background** : fond anime compose de formes fluides SVG.
- **Aurora Hero** : fond anime a bandes colorees avec un titre central.

La page d'accueil utilise actuellement `AuroraHero`. Les autres composants sont disponibles dans `app/components/ui/` et peuvent etre ajoutes a la page selon les exemples ci-dessous.

## Prerequis

- Node.js et npm
- Next.js 16
- React 19
- Tailwind CSS 4

Les dependances utilisees par les composants (`framer-motion`, `react-icons`, `clsx` et `tailwind-merge`) sont declarees dans `package.json`.

## Lancer le projet

Depuis le dossier du projet :

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

Pour creer et verifier la version de production :

```bash
npm run build
npm run start
```

## Organisation des fichiers

```text
app/
  components/
    ui/
      aurora-hero.tsx
      fluid-morph-bg.tsx
      pop-button.tsx
      social-flip-button.tsx
  lib/
    utils.ts
  globals.css
  layout.tsx
  page.tsx
```

L'alias `@/*` est configure dans `tsconfig.json` pour pointer vers `app/*`. Ainsi, les imports comme `@/components/ui/pop-button` et `@/lib/utils` correspondent aux fichiers sous `app/`.

## Fond plein ecran

`app/globals.css` charge Tailwind CSS et retire les marges par defaut :

```css
@import "tailwindcss";

html,
body {
  min-height: 100%;
  margin: 0;
  background-color: #000;
}
```

Le layout racine `app/layout.tsx` doit garder les balises `<html>` et `<body>`, et rendre la page via `{children}` :

```tsx
<html lang="fr">
  <body className="min-h-dvh bg-black">{children}</body>
</html>
```

Pour qu'un fond anime couvre tout l'ecran, le composant doit lui-meme avoir une hauteur de viewport (`h-dvh`) et prendre toute la largeur (`w-full`). Evitez de le placer dans un conteneur avec une hauteur fixe ou des marges qui le limitent.

## Aurora Hero

Composant actuellement affiche sur la page d'accueil. Il prend un titre optionnel et accepte aussi les attributs HTML d'une section :

```tsx
import { AuroraHero } from "@/components/ui/aurora-hero";

export default function Home() {
  return <AuroraHero title="Nandrianina" />;
}
```

La hauteur plein ecran est definie dans `app/components/ui/aurora-hero.tsx` par les classes `h-dvh` et `w-full`.

### Changer les couleurs Aurora

Dans le meme fichier, cherchez `--rainbow` dans les styles de `.aurora-hero-bg`. Modifiez les couleurs du `repeating-linear-gradient` pour choisir la palette voulue. Par exemple :

```css
--rainbow: repeating-linear-gradient(
  100deg,
  #10110b 0%,
  #294018 8%,
  #a34b16 14%,
  #4d1715 20%,
  #0b0b0a 27%,
  #9d4a12 34%,
  #6b1c20 42%,
  #11100d 50%
);
```

La variable `--stripe-color` controle les bandes sombres. Gardez-la proche de `#080808` pour un fond presque noir. Le bloc `:is(.dark) .aurora-hero-wrapper` definit les couleurs en mode sombre ; adaptez-le aussi si vous utilisez la classe `dark` sur `<html>`.

## Pop Button

Bouton HTML accessible qui accepte les props natives d'un bouton (`onClick`, `type`, `disabled`, etc.) :

```tsx
import { PopButton } from "@/components/ui/pop-button";

export function PopButtonDemo() {
  return (
    <PopButton type="button" onClick={() => alert("Clique !")}>
      Decouvrir
    </PopButton>
  );
}
```

Sans `children`, le texte affiche par defaut est `Learn More`. La prop `className` permet d'ajouter des classes Tailwind, par exemple `w-full`.

## Social Flip Button

Le composant affiche par defaut une rangee de lettres qui se retournent pour reveler les icones sociales au survol :

```tsx
import SocialFlipButton from "@/components/ui/social-flip-button";

export function SocialDemo() {
  return <SocialFlipButton />;
}
```

Les liens de la liste par defaut utilisent `href: "#"`. Pour pointer vers vos vrais profils, transmettez une liste `items` :

```tsx
import SocialFlipButton, {
  type SocialItem,
} from "@/components/ui/social-flip-button";
import { FaGithub, FaTwitter } from "react-icons/fa";

const links: SocialItem[] = [
  {
    letter: "G",
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/votre-nom",
  },
  {
    letter: "X",
    icon: <FaTwitter />,
    label: "Twitter",
    href: "https://twitter.com/votre-nom",
  },
];

export function SocialDemo() {
  return <SocialFlipButton items={links} />;
}
```

Les classes `className`, `itemClassName`, `frontClassName` et `backClassName` permettent de personnaliser le conteneur, les boutons, les faces avant et les faces arriere.

## Fluid Morph Background

Fond SVG anime avec une palette, une couleur de fond et une duree configurables :

```tsx
import { FluidMorphBg } from "@/components/ui/fluid-morph-bg";

export function FluidBackgroundDemo() {
  return (
    <main className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden">
      <FluidMorphBg className="absolute inset-0 -z-10" />
      <h1 className="text-5xl font-serif text-white">Fluid Life</h1>
    </main>
  );
}
```

Props disponibles :

- `className` : classes Tailwind du conteneur.
- `duration` : duree de base de l'animation, en secondes (4 par defaut).
- `colors` : tableau de couleurs hexadecimales pour les formes SVG.
- `backgroundColor` : couleur de fond du composant.

## Exemple de composition

Pour afficher le bouton et les liens au-dessus du fond anime, placez le fond en absolu et l'interface dans un conteneur de premier plan :

```tsx
<main className="relative isolate flex min-h-dvh w-full flex-col items-center justify-center gap-6 overflow-hidden">
  <FluidMorphBg className="absolute inset-0 -z-10" />
  <PopButton>Learn More</PopButton>
  <SocialFlipButton />
  <h1 className="text-5xl font-serif text-white">Fluid Life</h1>
</main>
```

Utilisez `AuroraHero` ou `FluidMorphBg` comme fond principal selon le rendu souhaite ; les deux fonds peuvent aussi etre utilises separement sur des pages ou sections differentes.
