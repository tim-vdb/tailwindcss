# Tailwind exo3 — Reproduction d'une page Pricing & Testimonials

Ce projet est une reproduction responsive d'une [landing page](https://dribbble.com/shots/26292700-Website-Landing-Page-Design-Pixel-Powerhouse) contenant une grille de plans (pricing) et une section de témoignages (testimonials), réalisée avec Next.js (app directory) et Tailwind CSS. L'objectif était d'appliquer les bonnes pratiques d'ergonomie, d'accessibilité et d'architecture CSS moderne.

## Présentation rapide

- Page reproduite : section "Pricing" avec trois plans, un panneau de détails pour le plan sélectionné et une section "Testimonials" avec un carrousel horizontal de cartes.
- Stack : Next.js (app router), React, Tailwind CSS, `lucide-react` pour les icônes, `next/image` pour les images.
- Fichiers clés : `src/components/PricingSection.tsx`, `src/components/TestimonialsSection.tsx`, `src/app/globals.css`.

---

## 1. Description rapide de la page reproduite

La page affiche :
- Un header de section avec titre et bascule Monthly/Yearly.
- Une zone principale divisée en deux (desktop) : à gauche la liste des plans, à droite le panneau de détail du plan sélectionné (prix, liste de fonctionnalités, CTA).
- En mobile, l'ordre est réorganisé pour mettre l'information clé (Basic → détails → autres plans) dans un flux vertical lisible.
- Une section Testimonials en dessous, avec des cartes défilantes en horizontal (scroll + snap).

## Structure générale choisie

- `src/app/` : point d'entrée de l'application (Next.js app dir).
- `src/components/` : composants réutilisables :
	- `PricingSection.tsx` : logique et rendu de la grille de plans.
	- `TestimonialsSection.tsx` : carrousel horizontal des témoignages.
	- `PingInfo.tsx`, `Button.tsx`, `Header.tsx`, etc.
- `src/app/globals.css` : styles globaux et utilities (définitions de gradients/custom utilities).
- Données : arrays locaux (`plans`, `features`, `dataTestimonials`) pour permettre le rendu via `.map()` et garder les composants data-driven.

---

## 2. Application des concepts d'ergonomie

Comment j'ai respecté la hiérarchie visuelle
- Titrage clair : `h2` visible en haut de section, typographie plus grande pour les prix (`text-4xl`) afin de les faire ressortir.
- Contrastes : accent couleur bleu (`text-primary`) pour éléments importants (prix, CTA).
- Espacements : marges et paddings cohérents (`p-6`, `gap-6`) pour séparer visuellement les blocs.

Comment j'ai limité la charge cognitive
- Présentation progressive : d'abord le nom du plan et le prix, puis les détails (liste de fonctionnalités) — évite d'afficher trop d'infos simultanément.
- Réduction des choix immédiats : mise en valeur d'un plan par défaut (Basic) et boutons d'action clairs.
- Icônes combinées au texte pour faciliter la reconnaissance.

Quel pattern de lecture est utilisé (F ou Z)
- Le design suit majoritairement un pattern en "F" pour la lecture primaire (titre → éléments à gauche → détails à droite). Sur les écrans larges, le regard balaie horizontalement; l'usage des éléments visuels (prix, icônes, CTA) oriente le scan selon un parcours proche du Z pour les éléments secondaires. En résumé : F pour la hiérarchie principale, Z pour les parcours de comparaison.

Comment les CTA sont mis en avant
- Bouton principal `Get Started Now` : couleur pleine (`bg-primary`), pleine largeur sur mobile (`w-full`), contraste élevé et padding suffisant.
- Position stratégique : placé directement sous la liste des fonctionnalités pour faciliter la conversion.

Comment j'ai appliqué les heuristiques de Nielsen
- Visibilité du statut du système : retour visuel pour le plan sélectionné (gradient/ring).
- Correspondance entre le système et le monde réel : labels clairs et familiers (Basic, Premium, Enterprise).
- Contrôle utilisateur et liberté : bascule Monthly/Yearly visible (état simple).
- Consistance et standards : tokens de couleur et classes communes.
- Prévention des erreurs : pas d'actions destructrices dans la zone, CTA explicite.
- Reconnaissance plutôt que rappel : listes d'items avec icônes et libellés courts.

---

## 3. Accessibilité

Décisions prises pour respecter WCAG
- Utilisation d'éléments sémantiques (`section`, `h2`, `ul`/`li`, `button`) pour une lecture accessible par les aides techniques.
- Textes alternatifs pour les images (`alt` sur `next/image`), icônes décoratives marquées `aria-hidden="true"`.
- Contraste : choix de `text-primary` et blancs sur panneaux clairs ; les fonds blancs rendent le texte lisible. 

Comment j'ai géré le focus
- Les CTA sont des `button`/éléments interactifs natifs ; Tailwind `focus-visible` (ou `focus:outline`) garde la visibilité du focus clavier.
- Les contrôles du carrousel sont visibles et accessibles au clavier

Choix de contraste
- Éviter d'utiliser le gradient comme seule indication de contraste : les panneaux blancs contiennent le texte principal pour garantir un contraste suffisant.
- Recommandation : tester avec des outils (Lighthouse/axe) et ajuster les couleurs si besoin.

Choix sémantiques HTML
- Listes de fonctionnalités en `<ul>`/`<li>` pour structure logique ; titres en `<h2>`/`<h3>` selon le rôle.
- Emploi de boutons (et non de `div`) pour actions cliquables.

---

## 4. Choix techniques Tailwind

Comment j'ai structuré mes sections
- Sections découplées en composants réutilisables (`PricingSection`, `TestimonialsSection`, `HeroSection`) pour une maintenance plus simple et un rendu testable.
- Layout responsive géré via utilitaires Tailwind (`sm:`, `md:`) et classes utilitaires (`flex`, `grid`, `order-*`).

Pourquoi j'ai créé certaines `@utility` (ex. gradients)
- Les utilitaires personnalisés (ex. `bg-linear-to-t`, `bg-radial-to-t`) évitent la répétition de longues classes CSS et permettent d'appliquer des dégradés cohérents dans tout le projet.
- Un utilitaire container pour gérer les espaces correctement 

Comment j'ai géré le responsive
- Breakpoints Tailwind (`sm`, `md`) pour adapter le layout : inversion d'ordre (`order-*`) pour présenter le panneau features avant/au-dessus sur mobile.
- Pour le carrousel testimonials : `overflow-x-auto`, `snap-x`, `snap-start` et `min-w` pour garantir un scroll fluide et des points d'arrêt visuels.
- Des classes hidden et block/flex pour gérer les éléments dans mon layout

---

## 5. Difficultés rencontrées

Problèmes techniques
- Aligner visuellement la colonne de gauche (plans) avec le panneau de droite (détails) : résolu avec `items-stretch` + `md:h-full` et `md:justify-between`.
- Gestion des gradients et contraste : adaptation pour préserver lisibilité.

Problèmes responsive
- Ordre du contenu sur mobile (mettre le détail Basic en premier) : nécessité d'utiliser `order-*` et des cartes mobile-only (`block md:hidden`) pour conserver l'expérience visuelle la plus fidèle.
- Carrousel testimonials : scrollbar native, gestion du snap et du clavier -> solution partielle en CSS (snap), JS possible pour contrôle programmatique des flèches.

Arbitrages faits
- Duplication contrôlée d'un bloc (mobile-only) pour préserver l'UX mobile plutôt que de complexifier trop la logique de rendu une seule fois.
- Priorisation : accessibilité et lisibilité avant d'avoir des effets visuels lourds.

---

## Lancer le projet (localement)

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir http://localhost:3000

Pour la production :

```bash
npm run build
npm start
```

