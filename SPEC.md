# Spécifications Techniques et Fonctionnelles - Landing Page mp-services-immo

Ce document définit les objectifs, la structure et le plan d'implémentation pour la création de la landing page de **mp-services-immo**, entreprise spécialisée dans la construction et les services immobiliers.

## 1. Objectifs du projet

*   **Visibilité Digitale** : Établir une présence en ligne professionnelle pour l'entreprise.
*   **Présentation des Services** : Exposer clairement l'éventail des compétences (construction, rénovation, génie civil, etc.).
*   **Génération de Leads** : Faciliter la prise de contact via des appels à l'action (CTA) clairs et un formulaire de contact.
*   **Crédibilité et Confiance** : Mettre en avant l'expérience, la vision et les valeurs de l'entreprise (qualité, sécurité, professionnalisme).

## 2. Architecture de l'information (Sections)

La page sera structurée en une seule page (Single Page Application) avec les sections suivantes :

1.  **Header** : Logo, Navigation (Services, À propos, Contact), Bouton CTA "Demander un devis".
2.  **Hero Section** : Accroche percutante, sous-titre valorisant l'expertise, image de fond de haute qualité (chantier ou bâtiment moderne), bouton CTA principal.
3.  **Services** : Grille de cartes présentant les 10 services clés avec icônes descriptives.
4.  **À Propos** : Histoire de l'entreprise, Vision, Mission et mise en avant des années d'expérience.
5.  **Valeurs** : Section visuelle soulignant la Qualité, la Sécurité, le Respect des délais et le Professionnalisme.
6.  **Chiffres Clés (Optionnel)** : Nombre de projets, années d'expérience, clients satisfaits.
7.  **Contact** : Formulaire de contact, coordonnées (Email, Tel), carte de localisation (optionnelle).
8.  **Footer** : Liens rapides, réseaux sociaux, mentions légales, copyright.

## 3. Stack Technique Détailée

*   **Framework** : [Next.js 14+](https://nextjs.org/) (App Router) pour les performances et le SEO.
*   **Stylisation** : [Tailwind CSS](https://tailwindcss.com/) pour un design moderne et responsive.
*   **Animations** : [Framer Motion](https://www.framer.com/motion/) pour des transitions fluides et des effets au scroll.
*   **Icônes** : [Lucide React](https://lucide.dev/) pour une iconographie épurée.
*   **Polices** : Google Fonts (ex: Montserrat pour les titres, Inter pour le corps de texte).
*   **Déploiement** : Vercel (recommandé pour Next.js).

## 4. Parcours Utilisateur

1.  **Arrivée** : L'utilisateur arrive sur la Hero Section et comprend immédiatement l'activité de l'entreprise.
2.  **Découverte** : Il scrolle pour découvrir la diversité des services proposés.
3.  **Rassurance** : Il lit la section "À Propos" et les valeurs pour valider le sérieux de l'entreprise.
4.  **Action** : Il clique sur un bouton "Contact" ou remplit le formulaire en bas de page pour soumettre son projet.

## 5. Contenu Textuel Structuré

### Hero Section
*   **Titre** : "Bâtir votre avenir avec excellence et précision."
*   **Sous-titre** : "Expert en construction, rénovation et génie civil au Congo. Nous transformons vos visions en réalités durables."

### Services
*   **Construction de bâtiments** : Conception et réalisation de structures résidentielles et commerciales.
*   **Rénovation** : Modernisation et remise à neuf de vos espaces de vie et de travail.
*   **Génie civil** : Infrastructures robustes et solutions techniques complexes.
*   **Maçonnerie & Peinture** : Finitions impeccables et structures solides.
*   **Électricité & Plomberie** : Installations aux normes pour un confort et une sécurité optimaux.
*   **Études, Plans & Suivi** : Accompagnement de A à Z, de la conception à la livraison du chantier.
*   **Fourniture de matériaux** : Sélection de matériaux de haute qualité pour vos projets.

### À Propos
*   **Vision** : Devenir le leader de la construction innovante et durable dans la région.
*   **Mission** : Offrir des solutions immobilières et de construction de qualité supérieure, en respectant les normes de sécurité les plus strictes.
*   **Valeurs** : 
    *   *Qualité* : L'excellence dans chaque détail.
    *   *Sécurité* : La priorité absolue sur tous nos chantiers.
    *   *Respect des délais* : Votre temps est précieux, nous le respectons.
    *   *Professionnalisme* : Une équipe d'experts à votre écoute.

### Contact
*   **Email** : contact@mpservices-immo.com
*   **Tel** : +242 06 763 48 48

## 6. Plan d'implémentation

### Phase 1 : Initialisation (Jour 1)
*   Configuration du projet Next.js avec Tailwind CSS.
*   Installation des dépendances (Framer Motion, Lucide React).
*   Mise en place de la structure des dossiers (`components`, `constants`, `styles`).

### Phase 2 : Développement des composants (Jour 2-3)
*   Création du Layout (Header/Footer).
*   Développement des sections Hero, Services et À Propos.
*   Intégration des animations Framer Motion (fade-in, slide-up).

### Phase 3 : Formulaire et Interactivité (Jour 4)
*   Développement de la section Contact.
*   Validation du formulaire (côté client).
*   Optimisation du responsive (Mobile First).

### Phase 4 : Optimisation et Livraison (Jour 5)
*   Optimisation SEO (Meta tags, Open Graph).
*   Tests de performance (Lighthouse).
*   Déploiement sur Vercel.
