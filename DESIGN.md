# Direction Artistique - mp-services-immo

Ce document définit l'identité visuelle et l'expérience utilisateur (UX/UI) pour la landing page de **mp-services-immo**. L'objectif est de transcender les standards de l'immobilier classique pour proposer une expérience "Architecturale, Statutaire et Cinématique".

---

## 1. Concept Créatif : "L'Élégance Structurelle"
Le design s'inspire du brutalisme raffiné et de l'architecture contemporaine. On privilégie des lignes fortes, une typographie imposante et un jeu de contrastes entre la rudesse de la construction (béton, acier) et le luxe de la finition (or, lumière).

## 2. Palette de Couleurs
Une sélection sophistiquée évoquant la solidité des matériaux et l'exclusivité des services.

*   **Noir Anthracite (`#121212`)** : La base. Évoque la profondeur, le sérieux et le luxe moderne.
*   **Or Brûlé (`#C5A059`)** : L'accent. Utilisé pour les CTA, les icônes clés et les détails de précision. Rappelle le soleil, la réussite et le métal noble.
*   **Blanc Albâtre (`#F8F8F7`)** : La clarté. Utilisé pour le fond des sections de lecture et les textes sur fond sombre.
*   **Gris Béton (`#4A4A48`)** : La structure. Pour les textes secondaires et les bordures subtiles.

## 3. Typographie
Un duo de polices qui allie caractère architectural et lisibilité parfaite.

*   **Titres : *Syne* ou *Clash Display***
    *   Style : Bold / ExtraBold.
    *   Usage : Titres de sections, accroches Hero.
    *   Pourquoi : Ses formes géométriques et audacieuses rappellent les structures de bâtiments modernes.
*   **Corps de texte : *Satoshi* ou *Inter***
    *   Style : Regular / Medium.
    *   Usage : Paragraphes, menus, formulaires.
    *   Pourquoi : Une lisibilité exceptionnelle et une neutralité élégante qui laisse respirer les visuels.

## 4. Style Visuel
*   **Grilles Asymétriques** : Sortir de la grille standard pour créer un rythme visuel dynamique, évoquant des plans d'architecte.
*   **Bordures Architecturales** : Utilisation de lignes très fines (0.5px) pour délimiter certaines sections, rappelant les dessins techniques.
*   **Effets de Matière** : Textures subtiles de béton brossé ou de papier grainé en arrière-plan pour éviter le "plat" numérique.
*   **Glassmorphism Sélectif** : Panneaux de navigation et cartes flottantes avec un flou d'arrière-plan (`backdrop-blur`) pour une sensation de profondeur et de modernité.

## 5. Guide d'Animations (Framer Motion)
L'animation n'est pas un gadget, elle guide l'œil et renforce la perception de qualité.

### Hero Section
*   **Text Reveal** : Les titres apparaissent via un masque (glissement du bas vers le haut) avec un léger délai entre chaque mot.
*   **Image Scale** : L'image de fond subit un zoom arrière très lent (Ken Burns effect) pour créer une sensation d'immensité.

### Services (Grille)
*   **Staggered Fade-in** : Les cartes de services apparaissent les unes après les autres au scroll avec un effet de "slide-up" fluide.
*   **Hover Effect** : Au survol, la carte s'élève légèrement (`y: -10`) et l'icône en Or Brûlé s'illumine via un filtre de l'éclat (`glow`).

### Scroll Effects
*   **Parallax** : Les éléments textuels et les images se déplacent à des vitesses différentes pour créer une parallaxe subtile.
*   **Progress Bar** : Une ligne fine en haut de page (Or Brûlé) indique la progression de la lecture.

## 6. Composants Clés

### Header
*   Ultra-minimaliste. Logo à gauche, navigation centrale espacée, bouton CTA "Devis" à droite avec un effet de remplissage au survol.

### Cartes de Services
*   Numérotation imposante en arrière-plan (ex: 01, 02) en opacité réduite.
*   Typographie de titre forte.
*   Description courte et précise.

### Formulaire de Contact
*   Champs épurés avec uniquement des lignes de base.
*   Focus animé : la ligne de base se transforme en Or Brûlé lors de la saisie.
*   Bouton d'envoi massif et statutaire.

## 7. Moodboard Textuel
> *Béton brut poli — Reflets dorés au crépuscule — Plans d'architecte sur papier calque — Structures d'acier noir — Silence luxueux — Précision du millimètre — Horizon urbain en construction.*
