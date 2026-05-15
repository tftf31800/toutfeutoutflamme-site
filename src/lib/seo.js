import { seoCities } from "../data/cities";
export const SITE_URL = "https://toutfeutoutflamme31.fr";
export const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
export const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
export const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";
export const PHONE = "07 61 64 77 65";
export const COMPANY = "Tout Feu Tout Flamme";
export const CITY = "Saint-Gaudens";
export const POSTAL_CODE = "31800";
export const defaultKeywords = [
  "entretien poêle à granulés Saint-Gaudens",
  "ramonage poêle à granulés Saint-Gaudens",
  "dépannage poêle à granulés Saint-Gaudens",
  "technicien poêle à granulés 31800",
  "entretien poêle granulés Comminges",
  "ramonage mécanique poêle à granulés Haute-Garonne",
  "contrat entretien poêle à granulés",
  "réparation poêle à granulés autour Saint-Gaudens"
];
export const seoFaqs = [
  {
    question: "L’entretien d’un poêle à granulés est-il obligatoire ?",
    answer:
      "L’entretien annuel d’un poêle à granulés est indispensable pour conserver un fonctionnement sûr, limiter l’encrassement et préserver le rendement. Il est aussi généralement demandé par les assurances et les fabricants.",
  },
  {
    question: "Le ramonage mécanique est-il compris dans vos contrats ?",
    answer:
      "Oui, les contrats d’entretien Tout Feu Tout Flamme comprennent le ramonage mécanique avec certificat, en complément de l’entretien complet de l’appareil.",
  },
  {
    question: "Intervenez-vous dans le Comminges et en Haute-Garonne ?",
    answer:
      "Oui, nous intervenons autour de Saint-Gaudens, Montréjeau, Cazères, Carbonne, Muret, Lannemezan, Aurignac, Saint-Girons et dans un rayon d’environ 100 km selon disponibilité.",
  },
  {
    question: "Quelles pannes fréquentes peuvent être évitées avec un bon entretien ?",
    answer:
      "Un entretien régulier limite les défauts d’allumage, les vitres noires, les pertes de tirage, l’encrassement de l’extracteur, les problèmes de combustion et la surconsommation de granulés.",
  },
  {
    question: "Intervenez-vous sur toutes les marques ?",
    answer:
      "Nous intervenons sur de nombreuses marques de poêles à granulés, notamment Palazzetti, Jolly Mec, Solzaima, Invicta, MCZ, Edilkamin, Extraflame, Piazzetta et autres appareils toutes marques selon configuration.",
  },
];
export function routeToPath(route) {
  if (!route || route === "/") return "/";
  return route;
}

export function buildLocalBusinessSchema(url = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY,
    url,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "€€",
    description:
      "Entretien, ramonage mécanique et dépannage de poêles à granulés à Saint-Gaudens 31800 et dans un rayon de 100 km.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2045 rue de la vieille serre",
      postalCode: POSTAL_CODE,
      addressLocality: CITY,
      addressCountry: "FR",
    },
    areaServed: seoCities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entretien poêle à granulés",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ramonage mécanique poêle à granulés",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage poêle à granulés",
        },
      },
    ],
  };
}

export function buildFaqSchema(faqs = seoFaqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(route = "/") {
  const path = routeToPath(route);

  const labels = {
    "/": "Accueil",
    "/tarifs": "Tarifs",
    "/contact": "Contact",
    "/blog": "Blog",
    "/zones-intervention": "Zones d’intervention",
    "/realisations": "Réalisations",
    "/partenariats": "Partenariats",
    "/faq": "FAQ",
    "/cgv": "CGV",
    "/mentions-legales": "Mentions légales",
    "/politique-confidentialite": "Politique de confidentialité",
    "/cookies": "Cookies",
  };

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
  ];

  if (path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: labels[path] || path.replace("/", "").replaceAll("-", " "),
      item: `${SITE_URL}${path}`,
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function buildSeoGraph(url, faqs = seoFaqs) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildLocalBusinessSchema(url),
      buildFaqSchema(faqs),
      buildBreadcrumbSchema(routeToPath(new URL(url).pathname)),
    ],
  };
}