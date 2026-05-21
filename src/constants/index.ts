export const SERVICES = [
  {
    id: "01",
    title: "Construction de bâtiments",
    description: "Conception et réalisation de structures résidentielles et commerciales de haute qualité.",
    icon: "Building2",
  },
  {
    id: "02",
    title: "Rénovation",
    description: "Modernisation et remise à neuf de vos espaces de vie et de travail avec une finition d'exception.",
    icon: "Hammer",
  },
  {
    id: "03",
    title: "Génie civil",
    description: "Infrastructures robustes et solutions techniques complexes pour vos projets d'envergure.",
    icon: "HardHat",
  },
  {
    id: "04",
    title: "Maçonnerie & Peinture",
    description: "Finitions impeccables et structures solides pour un rendu esthétique et durable.",
    icon: "Paintbrush",
  },
  {
    id: "05",
    title: "Électricité & Plomberie",
    description: "Installations aux normes pour un confort et une sécurité optimaux dans vos bâtiments.",
    icon: "Zap",
  },
  {
    id: "06",
    title: "Études, Plans & Suivi",
    description: "Accompagnement de A à Z, de la conception architecturale à la livraison du chantier.",
    icon: "Ruler",
  },
  {
    id: "07",
    title: "Fourniture de matériaux",
    description: "Sélection rigoureuse de matériaux de haute qualité pour garantir la pérennité de vos ouvrages.",
    icon: "Truck",
  },
];

export const VALUES = [
  {
    title: "Qualité",
    description: "L'excellence dans chaque détail de nos réalisations.",
  },
  {
    title: "Sécurité",
    description: "La priorité absolue sur tous nos chantiers pour nos équipes et nos clients.",
  },
  {
    title: "Respect des délais",
    description: "Votre temps est précieux, nous nous engageons à livrer dans les temps impartis.",
  },
  {
    title: "Professionnalisme",
    description: "Une équipe d'experts passionnés et à votre écoute.",
  },
];

export type Location = {
  city: string;
  shortLabel: string;
  address: string;
  /** Texte de recherche si pas de coordonnées GPS. */
  mapsQuery: string;
  lat?: number;
  lng?: number;
};

export const LOCATIONS: Location[] = [
  {
    city: "Brazzaville",
    shortLabel: "BZV",
    address: "1302 Avenue de la base Batignolles",
    mapsQuery: "1302 Avenue de la base Batignolles, Brazzaville, Congo",
    lat: -4.265736400051503,
    lng: 15.244241188844596,
  },
  {
    city: "Pointe-Noire",
    shortLabel: "PNR",
    address: "Sympathique vers le rond point",
    mapsQuery: "Sympathique vers le rond point, Pointe-Noire, Congo",
    lat: -4.781472582276666,
    lng: 11.874919995634821,
  },
];

const formatMapsCoords = (location: Location) =>
  location.lat != null && location.lng != null
    ? `${location.lat},${location.lng}`
    : encodeURIComponent(location.mapsQuery);

export const getMapsPlaceUrl = (location: Location) =>
  `https://www.google.com/maps/search/?api=1&query=${formatMapsCoords(location)}`;

export const getMapsDirectionsUrl = () => {
  const [brazzaville, pointeNoire] = LOCATIONS;
  return `https://www.google.com/maps/dir/?api=1&origin=${formatMapsCoords(brazzaville)}&destination=${formatMapsCoords(pointeNoire)}&travelmode=driving`;
};

export const CONTACT_INFO = {
  email: "contact@mpservices-immo.com",
  phone: "BZV : +242 06 763 48 48 | PNR : +242 05 021 03 03",
  locations: LOCATIONS,
};
