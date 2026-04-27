import React, { useEffect, useMemo, useState } from "react";
import {
  Flame,
  ShieldCheck,
  Wrench,
  CalendarDays,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  FileSignature,
  Menu,
  X,
  Camera,
  Handshake,
  BookOpen,
  Scale,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import ArticlePrintemps from "./components/ArticlePrintemps";
import { Routes, Route } from "react-router-dom";
import CGV from "./pages/CGV";

const SITE_URL = "https://toutfeutoutflamme.eu";
const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";
const PHONE = "07 61 64 77 65";
const COMPANY = "Tout Feu Tout Flamme";
const CITY = "Saint-Gaudens";
const POSTAL_CODE = "31800";

const theme = {
  navy: "#0b132b",
  navy2: "#1c2541",
  blue: "#3a86ff",
  cyan: "#4cc9f0",
  fire: "#f77f00",
  green: "#1b4332",
};

const headerMainLinks = [
  { label: "Tarifs", path: "#/tarifs" },
];

const headerInfoLinks = [
  { label: "Blog", path: "#/blog", description: "Conseils poêle à granulés" },
  { label: "Galerie", path: "#/galerie", description: "Réalisations et interventions" },
  { label: "Partenariat", path: "#/partenariat", description: "Devenir partenaire technique" },
  { label: "Contact", path: "#/contact", description: "Coordonnées et demande" },
];

const offers = [
  {
    name: "Essentiel",
    price: "139€",
    monthly: "13,90€ / mois",
    badge: "Entretien annuel",
    color: "from-emerald-400 to-green-700",
    features: [
      "Entretien annuel complet",
      "Ramonage mécanique avec certificat",
      "Contrôles de sécurité",
      "Contrôle combustion standard",
    ],
  },
  {
    name: "Confort",
    price: "189€",
    monthly: "18,90€ / mois",
    badge: "Contrat recommandé",
    color: "from-[#3a86ff] via-[#4cc9f0] to-[#f77f00]",
    featured: true,
    features: [
      "Tout le pack Essentiel",
      "1 intervention dépannage incluse",
      "Main d’œuvre + déplacement compris",
      "Rendez-vous priorisé",
      "Idéal pour éviter les mauvaises surprises",
    ],
  },
  {
    name: "Sérénité",
    price: "249€",
    monthly: "24,90€ / mois",
    badge: "Tranquillité maximale",
    color: "from-sky-400 to-blue-700",
    features: [
      "Tout le pack Confort",
      "Dépannage tout au long de la saison compris",
      "Main d’œuvre incluse, déplacement en sus",
      "Priorité dépannage 24/48h",
      "-15% sur les pièces détachées HT",
      "Accompagnement premium tout l’hiver",
    ],
  },
];

const services = [
  {
    icon: Wrench,
    title: "Entretien poêle à granulés",
    seoTitle: "Entretien poêle à granulés Saint-Gaudens",
    text: "Nettoyage complet, contrôle de sécurité, vérification des composants et réglages standards pour préserver les performances de votre appareil.",
  },
  {
    icon: ShieldCheck,
    title: "Dépannage poêle à granulés",
    seoTitle: "Dépannage poêle à granulés Comminges",
    text: "Diagnostic de panne, recherche de défaut, intervention rapide et remise en service dans la limite des prescriptions fabricant.",
  },
  {
    icon: Flame,
    title: "Ramonage mécanique",
    seoTitle: "Ramonage poêle à granulés Haute-Garonne",
    text: "Ramonage mécanique du conduit avec certificat, nettoyage et contrôle visuel pour une installation plus sûre et plus performante.",
  },
];

const zones = [
  "Saint-Gaudens 31800",
  "Comminges",
  "Haute-Garonne",
  "Cugnaux",
  "Boussens",
  "Carbonne",
  "Montréjeau",
  "Lannemezan",
  "Saint-Girons",
  "100 km autour",
];

// ===== SEO LOCAL =====

const seoCities = [
  "Saint-Gaudens",
  "Montréjeau",
  "Aspet",
  "Aurignac",
  "Boulogne-sur-Gesse",
  "Salies-du-Salat",
  "Bagnères-de-Luchon",
  "Carbonne",
  "Cazères",
  "Martres-Tolosane",
  "Muret",
  "Portet-sur-Garonne",
  "Cugnaux",
  "Tournefeuille",
  "Plaisance-du-Touch",
  "Frouzins",
  "Roques",
  "Pinsaguel",
  "Pins-Justaret",
  "Seysses",
  "Eaunes",
  "Labarthe-sur-Lèze",
  "Auterive",
  "Venerque",
  "Lagardelle-sur-Lèze"
];

function slugify(city) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .replace(/\s+/g, "-");
}

const seoPages = seoCities.map((city) => ({
  city,
  slug: `entretien-poele-granules-${slugify(city)}`,
  title: `Entretien poêle à granulés à ${city} | Tout Feu Tout Flamme`,
  description: `Entretien, ramonage mécanique avec certificat et contrats annuels pour poêle à granulés à ${city}. Intervention artisanale, sérieuse et toutes marques.`
}));

function SeoCityPage({ city }) {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Entretien poêle à granulés à {city}
      </h1>

      <p className="text-white/80 max-w-3xl mb-8">
        Tout Feu Tout Flamme intervient à {city} pour l’entretien,
        le ramonage et le dépannage de poêles à granulés toutes marques.
      </p>

      <a
        href={SUBSCRIBE_URL}
        className="bg-[#f77f00] px-6 py-3 rounded-xl font-semibold"
      >
        Voir les contrats →
      </a>
    </main>
  );
}

const tariffRows = [
  ["Entretien annuel obligatoire", "Entretien + ramonage conduit, hors pièces éventuelles", "139 € TTC"],
  ["Plus-value période hivernale", "Période de novembre à février", "+30 € TTC"],
  ["Ramonage intermédiaire mi-saison", "Si entretien annuel effectué par notre société", "80 € TTC"],
  ["Déplacement dépannage zone 1", "0 à 30 km", "30 € TTC"],
  ["Déplacement dépannage zone 2", "30 à 60 km", "60 € TTC"],
  ["Déplacement dépannage zone 3", "60 à 90 km", "80 € TTC"],
  ["Au-delà de 90 km", "Sur demande", "Nous consulter"],
  ["Main d’œuvre dépannage", "Forfait 1h puis facturation à la demi-heure commencée", "50 € / heure TTC"],
  ["Pièces détachées", "Selon diagnostic et disponibilité", "En sus"],
];

const blogArticles = [
  {
    slug: "entretien-poele-granules-printemps",
    title: "Pourquoi faire l’entretien de son poêle à granulés au printemps à Saint-Gaudens ?",
    date: "1 avril 2026",
    category: "Entretien",
    image: "/blog/entretien-printemps.jpg",
    excerpt:
      "Le printemps est la meilleure période pour entretenir son poêle à granulés, éviter la corrosion et préparer l’hiver sereinement.",
    content: `
  <p>Le printemps est de retour en Haute-Garonne ! Les températures s’adoucissent dans le Comminges, les jours rallongent et vous venez probablement d’éteindre votre poêle à granulés.</p>

  <p>C’est le moment idéal pour le nettoyer en surface et l’oublier jusqu’à l’automne prochain... N’est-ce pas ?</p>

  <p><strong>Détrompez-vous.</strong> La meilleure période pour réaliser l’entretien annuel est en réalité juste après la période de chauffe : avril, mai ou juin.</p>

  <h2>1. Protéger votre appareil contre la corrosion estivale</h2>

  <p>Pendant l’hiver, la combustion des granulés génère des cendres et de la suie dans le creuset, les passages de fumées et le conduit.</p>

  <p>Pendant l’été, l’humidité peut être présente dans nos vallées pyrénéennes. Si les résidus restent dans l’appareil, ils absorbent cette humidité. Ce mélange peut favoriser la corrosion, la rouille et l’usure prématurée des pièces métalliques.</p>

  <p>Un nettoyage complet au printemps permet de laisser votre poêle propre, sec et prêt à rester à l’arrêt plusieurs mois sans risque inutile.</p>

  <h2>2. Éviter la cohue de l’automne en Haute-Garonne</h2>

  <p>Chaque année, le scénario se répète : dès que les températures chutent à Saint-Gaudens, Lannemezan, Cazères ou dans le Comminges, les demandes d’entretien explosent.</p>

  <ul>
    <li><strong>Flexibilité totale :</strong> vous choisissez plus facilement votre date d’intervention.</li>
    <li><strong>Zéro stress :</strong> pas d’attente de plusieurs semaines en plein froid.</li>
    <li><strong>Travail plus serein :</strong> le technicien peut inspecter votre installation avec davantage de disponibilité.</li>
  </ul>

  <h2>3. Anticiper les réparations et les pièces détachées</h2>

  <p>Lors de l’entretien annuel, plusieurs éléments peuvent être contrôlés : bougie d’allumage, joints, extracteur, ventilateurs, creuset ou état général de l’appareil.</p>

  <p>Si une pièce montre des signes d’usure, le printemps laisse le temps de commander et remplacer sans urgence. En novembre, une rupture de stock peut rapidement vous priver de chauffage pendant plusieurs semaines.</p>

  <h2>4. Sécurité et conformité avant l’hiver</h2>

  <p>L’entretien annuel et le ramonage mécanique du conduit sont essentiels pour utiliser votre poêle à granulés en sécurité.</p>

  <p>En cas de sinistre, votre assurance peut vous demander une attestation d’entretien ou un certificat de ramonage délivré par un professionnel.</p>

  <p>Faire l’entretien dès le printemps permet d’être en règle bien avant la prochaine saison de chauffe.</p>

  <h2>5. Intervention autour de Saint-Gaudens</h2>

  <p>Tout Feu Tout Flamme intervient autour de Saint-Gaudens et dans un rayon d’environ 100 km : Comminges, Luchon, Tarbes, Pamiers, Cazères, Toulouse et alentours.</p>

  <blockquote>
    <p><strong>Conseil d’expert :</strong> pensez à vider entièrement votre réservoir de granulés en fin de saison. Avec l’humidité estivale, les pellets restants peuvent gonfler et bloquer la vis sans fin lors du redémarrage à l’automne.</p>
  </blockquote>

  <h2>Besoin d’un entretien ou d’un ramonage à Saint-Gaudens ?</h2>

  <p>N’attendez pas que le froid revienne. Pour un poêle propre, sécurisé et prêt à redémarrer au quart de tour, prenez rendez-vous dès le printemps.</p>
`,
    
  },
  {
    slug: "fonctionnement-poele-granules",
    title: "Comment fonctionne vraiment un poêle à granulés ?",
    date: "30 mars 2026",
    category: "Conseils",
    image: "/blog/fonctionnement-poele.jpg",
    excerpt:
      "Vis sans fin, bougie d’allumage, extracteur de fumées, échangeur thermique : comprendre les bases du fonctionnement.",
    content: `
      <p>Un poêle à granulés fonctionne grâce à une alimentation automatique en pellets, une combustion contrôlée et une ventilation de l’air chaud.</p>
      <h2>La vis sans fin</h2>
      <p>Elle dose les granulés depuis le réservoir vers le creuset.</p>
      <h2>L’allumage automatique</h2>
      <p>Une bougie chauffe l’air jusqu’à enflammer les granulés.</p>
      <h2>La diffusion de chaleur</h2>
      <p>Un ventilateur diffuse l’air chaud dans la pièce pour obtenir une chaleur régulière.</p>
    `,
  },
  {
    slug: "obligations-ramonage-poele-granules",
    title: "Ramonage poêle à granulés : quelles sont les obligations réelles ?",
    date: "27 mars 2026",
    category: "Ramonage",
    image: "/blog/ramonage.jpg",
    excerpt:
      "Entretien annuel, ramonage mécanique, certificat : ce qu’il faut savoir pour rester en règle.",
    content: `
      <p>Le ramonage mécanique du conduit et l’entretien annuel permettent de sécuriser l’installation et de conserver une preuve pour l’assurance.</p>
      <h2>Le certificat de ramonage</h2>
      <p>Il constitue la preuve officielle de l’intervention réalisée par un professionnel.</p>
      <h2>Pourquoi ne pas attendre ?</h2>
      <p>Un conduit encrassé augmente les risques d’incendie, de mauvais tirage et de panne.</p>
    `,
  },
  {
    slug: "point-de-rosee-conduit-poele-granules",
    title: "Poêle à granulés : comprendre et éviter le point de rosée",
    date: "27 mars 2026",
    category: "Technique",
    image: "/blog/point-rosee.jpg",
    excerpt:
      "Le point de rosée peut provoquer condensation, bistre et corrosion dans le conduit.",
    content: `
      <p>Le point de rosée apparaît lorsque les fumées refroidissent trop vite et que la vapeur d’eau se condense dans le conduit.</p>
      <h2>Quels sont les risques ?</h2>
      <p>Condensation, bistre, corrosion du tubage et baisse de performance.</p>
      <h2>Comment l’éviter ?</h2>
      <p>Un conduit bien dimensionné, isolé, un bon réglage de combustion et un entretien régulier limitent fortement ce phénomène.</p>
    `,
  },
  {
    slug: "entretien-annuel-technicien-poele-granules",
    title: "Entretien annuel : que fait vraiment votre technicien ?",
    date: "26 mars 2026",
    category: "Entretien",
    image: "/blog/technicien-poele.jpg",
    excerpt:
      "Nettoyage interne, sécurité, joints, extracteur, ramonage : ce que comprend une vraie révision professionnelle.",
    content: `
      <p>Le nettoyage courant par l’utilisateur est indispensable, mais il ne remplace pas l’entretien annuel réalisé par un professionnel.</p>
      <h2>Les zones invisibles</h2>
      <p>Les cendres fines s’accumulent dans des zones difficiles d’accès : échangeur, extracteur, passages de fumées.</p>
      <h2>Les contrôles importants</h2>
      <p>Le technicien vérifie les organes de sécurité, les joints, la combustion, le tirage et réalise le ramonage mécanique si prévu.</p>
    `,
  },
];

function routeToPath(route) {
  if (!route || route === "/") return "/";
  return route;
}

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

function SEO({ title, description, route = "/", keywords = [], schema }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${routeToPath(route)}`;
    document.title = title;
    document.documentElement.lang = "fr";

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords.join(", "));
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:locale"]', "content", "fr_FR");
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", COMPANY);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const id = "local-business-schema";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema || buildLocalBusinessSchema(canonicalUrl));
  }, [title, description, route, keywords, schema]);

  return null;
}

function buildLocalBusinessSchema(url = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY,
    url,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/Logoweb.png`,
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
    areaServed: seoCities.map((city) => ({ "@type": "City", name: city })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.seoTitle },
    })),
  };
}

const defaultKeywords = [
  "entretien poêle à granulés Saint-Gaudens",
  "ramonage poêle à granulés Saint-Gaudens",
  "dépannage poêle à granulés Saint-Gaudens",
  "technicien poêle à granulés 31800",
  "entretien poêle granulés Comminges",
  "ramonage mécanique poêle à granulés Haute-Garonne",
  "contrat entretien poêle à granulés",
  "réparation poêle à granulés autour Saint-Gaudens",
];

function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#1c2541] text-white shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-blue-400/30"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#4cc9f0]/50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight size={18} />
    </a>
  );
}

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = "great-vibes-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0b132b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(58,134,255,0.22),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_55%_75%,rgba(76,201,240,0.08),transparent_38%),linear-gradient(135deg,#0b132b_0%,#0a192f_44%,#1c2541_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071027]/90 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a
            href="#/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Retour accueil"
          >
            Accueil
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1 text-sm font-semibold text-white/70 shadow-inner shadow-black/20 lg:flex" aria-label="Navigation principale">
            {headerMainLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-4 py-2.5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Ouvrir le menu ressources"
              >
                Ressources
                <ChevronDown size={15} className="transition group-hover:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-3xl border border-white/10 bg-[#071027]/95 p-3 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-2 border-b border-white/10 px-3 pb-3">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-white/45">Infos utiles</p>
                </div>
                {headerInfoLinks.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <span className="block font-bold text-white">{item.label}</span>
                    <span className="mt-1 block text-xs font-medium text-white/50">{item.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={RDV_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <CalendarDays size={17} /> RDV
            </a>
            <a
              href={SUBSCRIBE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f77f00] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#f77f00]/25 transition hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
            >
              Souscrire <ChevronRight size={17} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-white shadow-lg shadow-black/20 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#071027]/95 px-5 py-5 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {[...headerMainLinks, ...headerInfoLinks].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 font-semibold text-white/85"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  href={RDV_URL}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 font-bold text-white"
                >
                  <CalendarDays size={18} /> Prendre rendez-vous
                </a>
                <a
                  href={SUBSCRIBE_URL}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f77f00] px-5 py-4 font-black text-white"
                >
                  Souscrire <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>


      {children}
      <Footer />
    </main>
  );
}

function HomePage() {

  const path = window.location.pathname.replace("/", "");
const currentSeoPage = seoPages.find((page) => page.slug === path);

if (currentSeoPage) {
  return (
    <>
      <SEO
        route={`/${currentSeoPage.slug}`}
        title={currentSeoPage.title}
        description={currentSeoPage.description}
        keywords={[`entretien poêle à granulés ${currentSeoPage.city}`, `ramonage poêle à granulés ${currentSeoPage.city}`, `dépannage poêle à granulés ${currentSeoPage.city}`, `contrat entretien poêle ${currentSeoPage.city}`]}
      />

      <main className="min-h-screen bg-[#050816] text-white">
        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,127,0,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(28,37,65,0.9),transparent_45%)]" />

          <div className="relative mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#f77f00]">
              Tout Feu Tout Flamme
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Entretien poêle à granulés à {currentSeoPage.city}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Vous recherchez un professionnel pour l’entretien de votre poêle à granulés à{" "}
              {currentSeoPage.city} ? Tout Feu Tout Flamme intervient pour le nettoyage complet,
              le ramonage mécanique avec certificat, les contrôles de sécurité et les réglages
              standards de votre appareil.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={SUBSCRIBE_URL}
                className="rounded-xl bg-gradient-to-r from-[#f77f00] to-[#ffb703] px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-105"
              >
                Voir les contrats d’entretien →
              </a>

              <a
                href="tel:0761647765"
                className="rounded-xl border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Entretien annuel</h2>
              <p className="text-white/70">
                Nettoyage complet de l’appareil, contrôle visuel de l’installation,
                vérification des organes de sécurité et réglages standards.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f77f00]/30 bg-[#f77f00]/10 p-7 shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Ramonage certifié</h2>
              <p className="text-white/70">
                Ramonage mécanique du conduit avec remise d’un certificat, selon les
                règles de l’art et les prescriptions applicables.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Contrats annuels</h2>
              <p className="text-white/70">
                Formules Essentiel, Confort et Sérénité pour sécuriser votre chauffage
                toute l’année autour de {currentSeoPage.city}.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0b132b]/80 p-8 shadow-2xl md:p-12">
            <h2 className="mb-5 text-3xl font-bold">
              Intervention à {currentSeoPage.city} et aux alentours
            </h2>

            <p className="max-w-4xl text-lg leading-relaxed text-white/75">
              Basé dans le secteur de Saint-Gaudens, Tout Feu Tout Flamme accompagne
              les particuliers pour l’entretien de poêles à granulés toutes marques.
              L’objectif : un appareil propre, sécurisé, mieux réglé et prêt pour la
              prochaine saison de chauffe.
            </p>

            <div className="mt-8">
              <a
                href="/#contact"
                className="inline-flex rounded-xl border border-[#f77f00]/40 px-6 py-3 font-semibold text-[#ffb703] transition hover:bg-[#f77f00]/10"
              >
                Demander une intervention à {currentSeoPage.city}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
  return (
    <>
      <SEO
        route="/"
        title="Entretien poêle à granulés Saint-Gaudens 31800 | Tout Feu Tout Flamme"
        description="Tout Feu Tout Flamme intervient à Saint-Gaudens 31800 et dans un rayon de 100 km pour l’entretien, le ramonage mécanique, le dépannage et les contrats de poêles à granulés."
        keywords={defaultKeywords}
      />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(58,134,255,0.20),transparent_30%),linear-gradient(135deg,#0b132b_0%,#0a192f_42%,#0f2742_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mb-10 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl md:h-32 md:w-32">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(247,127,0,0.28),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(76,201,240,0.20),transparent_50%)]" />
                <img
                  src="/Logoweb.png"
                  alt="Logo Tout Feu Tout Flamme"
                  className="relative h-42 w-42 rounded-3xl object-contain md:h-28 md:w-28"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <Flame className="absolute -bottom-2 -right-2 text-[#f77f00] drop-shadow-[0_0_16px_rgba(247,127,0,0.55)]" size={34} />
              </div>

              <p
                className="text-4xl leading-none text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.14)] md:text-7xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
               Tout Feu Tout Flamme
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.34em] text-[#4cc9f0] md:text-sm">
                 Benjamin Plessis
              </p>
              <p className="mt-3 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-white/60 md:text-base">
                Expert en poêle à granulés toutes marques
              </p>
            </motion.div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur-xl">
              <BadgeCheck size={17} className="text-[#4cc9f0]" /> Saint-Gaudens 31800 • Intervention jusqu’à 100 km autour
            </div>

            <h1 className="max-w-5xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Expert en <br />
              <span className="text-[#4cc9f0] drop-shadow-[0_0_24px_rgba(76,201,240,0.25)]">
                poêles à granulés
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-white/75">
              Entretien annuel, ramonage mécanique avec certificat, dépannage et contrats d’entretien pour poêles à granulés à Saint-Gaudens, dans le Comminges, en Haute-Garonne et dans un rayon de 100 km.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={SUBSCRIBE_URL}>
                <FileSignature size={18} /> Contrat d’entretien
              </ButtonLink>
              <ButtonLink href={RDV_URL} variant="secondary">
                <CalendarDays size={18} /> Prendre rendez-vous
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <TrustItem title="Intervention rapide" text="Saint-Gaudens + 100 km" icon={Flame} />
              <TrustItem title="Technicien qualifié" text="Entretien & dépannage" icon={ShieldCheck} />
              <TrustItem title="Contrats en ligne" text="Souscription simple" icon={Star} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-8">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Contrat recommandé</p>
                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-5xl font-black text-white">Confort</h2>
                    <p className="mt-4 text-white/70">Le meilleur équilibre entre entretien, suivi et tranquillité.</p>
                  </div>
                  <Sparkles className="text-[#f77f00]" size={42} />
                </div>

                <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-6xl font-black text-white">189€</p>
                  <p className="mt-2 text-xl font-bold text-[#4cc9f0]">ou 18,90€ / mois</p>
                  <ul className="mt-7 space-y-3 text-white/75">
                    <li>✓ Entretien + ramonage + certificat</li>
                    <li>✓ 1 intervention dépannage incluse</li>
                    <li>✓ Main d’œuvre + déplacement compris</li>
                    <li>✓ Rendez-vous priorisé</li>
                  </ul>
                </div>

                <a
                  href={SUBSCRIBE_URL}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-5 py-4 font-black text-white shadow-xl shadow-blue-500/20"
                >
                  Souscrire en ligne <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <FeaturedContract />
      <SeoTextSection />
      <ZonesSection />
      <FinalCta />
    </>
  );
}

function TrustItem({ title, text, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3a86ff]/15 text-[#4cc9f0]">
        <Icon size={22} />
      </div>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="text-sm text-white/60">{text}</p>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionTitle
        center
        kicker="Nos services"
        title="Entretien, dépannage et ramonage"
        text="Un service professionnel pour sécuriser votre installation, optimiser le rendement de votre poêle à granulés et anticiper les pannes pendant l’hiver."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#4cc9f0]/40">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a86ff]/15 text-[#4cc9f0]">
              <service.icon size={30} />
            </div>
            <h3 className="font-serif text-2xl font-black text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/65">{service.text}</p>
            <p className="mt-4 text-sm font-semibold text-[#4cc9f0]">{service.seoTitle}</p>
            <a href={RDV_URL} className="mt-7 inline-flex items-center gap-2 font-bold text-[#f77f00]">
              Prendre rendez-vous <ChevronRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedContract() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-6 text-white shadow-2xl shadow-black/30 md:grid-cols-[0.36fr_0.64fr] md:p-8">
        <div className="min-h-56 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(247,127,0,0.38),transparent_26%),radial-gradient(circle_at_70%_18%,rgba(58,134,255,0.45),transparent_30%),linear-gradient(135deg,#0b132b,#1c2541)]" />
        <div className="grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4cc9f0]">Contrat recommandé</p>
            <h2 className="mt-5 font-serif text-5xl font-black">
              Pack <span className="text-[#4cc9f0]">Confort</span>
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">
              Entretien + ramonage + certificat + 1 dépannage inclus dans l’année.
            </p>
          </div>
          <div className="text-left md:text-right">
            <Star className="mb-8 ml-auto text-[#f77f00]" size={42} />
            <p className="text-6xl font-black text-white">189€</p>
            <p className="mt-3 text-xl font-bold text-[#4cc9f0]">ou 18,90€ / mois</p>
            <div className="mt-6">
              <ButtonLink href={SUBSCRIBE_URL}>Souscrire</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeoTextSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Référencement local</p>
        <h2 className="mt-3 font-serif text-4xl font-black text-white">
          Entretien poêle à granulés à Saint-Gaudens et dans le Comminges
        </h2>
        <div className="mt-6 grid gap-6 leading-8 text-white/70 md:grid-cols-2">
          <p>
            Basée à Saint-Gaudens 31800, l’entreprise Tout Feu Tout Flamme intervient pour l’entretien annuel, le ramonage mécanique, le diagnostic et le dépannage de poêles à granulés. Les prestations s’adressent aux particuliers souhaitant conserver un appareil fiable, propre et sécurisé pendant toute la saison de chauffe.
          </p>
          <p>
            La zone d’intervention couvre Saint-Gaudens, le Comminges, la Haute-Garonne et les communes situées dans un rayon d’environ 100 km : Montréjeau, Boussens, Carbonne, Cazères, Muret, Cugnaux, Lannemezan, Saint-Girons et secteurs limitrophes.
          </p>
        </div>
      </div>
    </section>
  );
}

function TarifsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/tarifs"
        title="Tarifs entretien poêle à granulés Saint-Gaudens | Contrats 139€ 189€ 249€"
        description="Tarifs 2026 pour entretien, ramonage, dépannage et contrats de poêles à granulés à Saint-Gaudens 31800, Comminges et 100 km autour."
        keywords={[...defaultKeywords, "tarif entretien poêle à granulés", "contrat entretien poêle granulés", "prix ramonage poêle granulés"]}
      />
      <SectionTitle
        kicker="Tarifs & prestations"
        title="Contrats d’entretien poêle à granulés"
        text="Des packs clairs, pensés pour l’entretien, le ramonage, la sécurité et la tranquillité tout au long de l’hiver."
      />
      <div className="grid gap-6 lg:grid-cols-3">{offers.map((offer) => <OfferCard key={offer.name} offer={offer} />)}</div>

      <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/10 backdrop-blur-xl">
        <div className="border-b border-white/10 p-6">
          <h3 className="font-serif text-3xl font-black text-white">Tarifs prestations poêles à granulés 2026</h3>
          <p className="mt-2 text-white/60">Tarifs TTC, hors pièces éventuelles.</p>
        </div>
        <div className="divide-y divide-white/10">
          {tariffRows.map(([name, detail, price]) => (
            <div key={name} className="grid gap-3 p-5 md:grid-cols-[1fr_1.4fr_0.6fr] md:items-center">
              <p className="font-bold text-white">{name}</p>
              <p className="text-white/60">{detail}</p>
              <p className="font-black text-[#4cc9f0] md:text-right">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer }) {
  return (
    <article className={`relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl ${offer.featured ? "ring-2 ring-[#3a86ff] lg:-mt-4" : ""}`}>
      {offer.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
          Le plus choisi
        </div>
      )}
      <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${offer.color}`} />
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">{offer.badge}</p>
      <h3 className="mt-2 font-serif text-4xl font-black text-white">{offer.name}</h3>
      <p className="mt-6 text-5xl font-black text-white">{offer.price}</p>
      <p className="mt-1 font-semibold text-[#4cc9f0]">{offer.monthly}</p>
      <ul className="mt-7 space-y-3 text-sm font-medium text-white/70">
        {offer.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#4cc9f0]" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href={SUBSCRIBE_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] to-[#1c2541] px-4 py-4 font-bold text-white hover:from-[#4cc9f0] hover:to-[#3a86ff]">
        Souscrire <ChevronRight size={17} />
      </a>
    </article>
  );
}

function BlogPage({ slug }) {
  const article = slug ? blogArticles.find((item) => item.slug === slug) : null;

  if (slug) {
    if (!article) {
      return (
        <section className="mx-auto max-w-7xl px-5 py-16">
          <SEO
            route={`/blog/${slug}`}
            title="Article introuvable | Tout Feu Tout Flamme"
            description="Article de blog introuvable sur le site Tout Feu Tout Flamme."
            keywords={defaultKeywords}
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Blog</p>
            <h1 className="mt-3 font-serif text-4xl font-black text-white">Article introuvable</h1>
            <a href="#/blog" className="mt-8 inline-flex items-center gap-2 font-bold text-[#f77f00]">
              ← Retour au blog
            </a>
          </div>
        </section>
      );
    }

    return (
      <article className="mx-auto max-w-5xl px-5 py-16">
        <SEO
          route={`/blog/${article.slug}`}
          title={`${article.title} | Tout Feu Tout Flamme`}
          description={article.excerpt}
          keywords={[...defaultKeywords, article.category, article.title]}
          schema={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            image: `${SITE_URL}${article.image}`,
            datePublished: article.date,
            author: { "@type": "Person", name: "Benjamin Plessis" },
            publisher: { "@type": "Organization", name: COMPANY, logo: { "@type": "ImageObject", url: `${SITE_URL}/Logoweb.png` } },
            mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
          }}
        />

        <a href="#/blog" className="mb-8 inline-flex items-center gap-2 font-bold text-[#f77f00]">
          ← Retour au blog
        </a>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl">
          <img src={article.image} alt={article.title} className="h-72 w-full object-cover md:h-96" />
          <div className="p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
              {article.category} · {article.date}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/70">{article.excerpt}</p>
            <div
              className="mt-10 space-y-6 text-lg leading-9 text-white/75 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-[#f77f00] [&_p]:text-white/75"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#f77f00]/30 bg-[#f77f00]/10 p-8 text-center shadow-2xl shadow-black/10">
          <h2 className="font-serif text-3xl font-black text-white">Besoin d’un entretien professionnel ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Souscrivez à un contrat d’entretien Tout Feu Tout Flamme et préparez votre appareil avant la prochaine saison de chauffe.
          </p>
          <a href={SUBSCRIBE_URL} className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-6 py-4 font-black text-white shadow-xl shadow-blue-500/20">
            Souscrire maintenant <ChevronRight size={18} />
          </a>
        </div>
      </article>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/blog"
        title="Blog poêle à granulés Saint-Gaudens | Conseils entretien et ramonage"
        description="Conseils pratiques sur l’entretien, le ramonage, le dépannage, la sécurité et les économies de granulés autour de Saint-Gaudens."
        keywords={[...defaultKeywords, "blog poêle à granulés", "conseil entretien poêle granulés", "panne poêle granulés"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Tout Feu Tout Flamme",
          url: `${SITE_URL}/blog`,
          description: "Conseils d’entretien, ramonage, sécurité et dépannage pour poêles à granulés.",
        }}
      />
      <SectionTitle
        kicker="Conseils & expertise"
        title="Blog poêle à granulés"
        text="Conseils d’entretien, sécurité, ramonage et bonnes pratiques pour garder votre poêle performant toute l’année autour de Saint-Gaudens."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogArticles.map((article) => (
          <a
            key={article.slug}
            href={`#/blog/${article.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f77f00]/50"
          >
            <img src={article.image} alt={article.title} className="h-56 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
            <div className="p-7">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4cc9f0]">
                {article.category} · {article.date}
              </p>
              <h2 className="mt-4 font-serif text-2xl font-black leading-tight text-white">{article.title}</h2>
              <p className="mt-4 leading-7 text-white/65">{article.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#f77f00]">
                Lire l’article <ChevronRight size={17} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function GaleriePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/galerie"
        title="Galerie interventions poêles à granulés Saint-Gaudens | Avant / après"
        description="Galerie des interventions Tout Feu Tout Flamme : entretien, ramonage et dépannage de poêles à granulés à Saint-Gaudens et alentours."
        keywords={[...defaultKeywords, "galerie entretien poêle granulés", "photos ramonage poêle granulés", "intervention poêle à granulés Saint-Gaudens"]}
      />
      <SectionTitle kicker="Galerie" title="Réalisations et interventions" text="Une page prête à recevoir vos photos avant/après : entretien, nettoyage, ramonage, dépannage et remise en service." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {["Entretien", "Ramonage", "Dépannage", "Remise en service"].map((item) => (
          <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <Camera className="text-[#4cc9f0]" size={34} />
            <h2 className="mt-5 font-serif text-2xl font-black text-white">{item}</h2>
            <p className="mt-3 text-white/60">Intervention poêle à granulés à Saint-Gaudens et dans un rayon de 100 km.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PartenariatPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/partenariat"
        title="Partenariat station technique poêle à granulés | Saint-Gaudens"
        description="Tout Feu Tout Flamme propose des collaborations techniques avec installateurs, revendeurs et professionnels du chauffage à Saint-Gaudens et dans un rayon de 100 km."
        keywords={[...defaultKeywords, "station technique poêle à granulés", "partenariat installateur poêle granulés", "collaboration chauffage Saint-Gaudens"]}
      />
      <SectionTitle kicker="Partenariat" title="Collaborations techniques et professionnelles" text="Une page dédiée aux installateurs, revendeurs, fabricants et professionnels du chauffage souhaitant collaborer sur l’entretien, le SAV et le suivi client." />
      <div className="grid gap-6 lg:grid-cols-3">
        {["Installateurs", "Revendeurs", "Fabricants & SAV"].map((item) => (
          <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <Handshake className="text-[#4cc9f0]" size={34} />
            <h2 className="mt-5 font-serif text-2xl font-black text-white">{item}</h2>
            <p className="mt-4 leading-7 text-white/65">Collaboration possible autour de Saint-Gaudens pour l’entretien, le dépannage, le suivi client et les interventions techniques sur appareils à granulés.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MentionsPage() {
  return (
    <SimplePage
      route="/mention-legale"
      icon={Scale}
      kicker="Mentions légales"
      title="Mentions légales"
      text="Tout Feu Tout Flamme — M. Benjamin Plessis, EI — 2045 rue de la vieille serre, 31800 Saint-Gaudens — SIREN : 752 185 934. Contact : 07 61 64 77 65."
      keywords={[...defaultKeywords, "mentions légales Tout Feu Tout Flamme"]}
    />
  );
}

function CgvPage() {
  return (
    <SimplePage
      route="/cgv"
      icon={FileSignature}
      kicker="CGV"
      title="Conditions générales de vente"
      text="Conditions générales de vente applicables aux prestations d’entretien, de ramonage mécanique, de dépannage et aux contrats annuels de poêles à granulés proposés par Tout Feu Tout Flamme."
      keywords={[...defaultKeywords, "CGV entretien poêle à granulés", "contrat entretien poêle granulés"]}
    />
  );
}

function SimplePage({ route, icon: Icon, kicker, title, text, keywords }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route={route}
        title={`${title} | Tout Feu Tout Flamme Saint-Gaudens`}
        description={`${text} Intervention à Saint-Gaudens 31800 et dans un rayon de 100 km.`}
        keywords={keywords}
      />
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-12">
        <Icon className="mb-6 text-[#4cc9f0]" size={42} />
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">{kicker}</p>
        <h1 className="mt-4 font-serif text-5xl font-black text-white">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text, center = false }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">{kicker}</p>
      <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-8 text-white/65">{text}</p>}
    </div>
  );
}

function ZonesSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:items-center">
      <SectionTitle
        kicker="Secteur"
        title="Intervention locale et réactive"
        text="Basé à Saint-Gaudens, Tout Feu Tout Flamme intervient dans le Comminges, en Haute-Garonne et dans un rayon de 100 km pour l’entretien, le ramonage et le dépannage."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {zones.map((zone) => (
          <div key={zone} className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-5 text-center font-semibold text-white/75 shadow-xl shadow-black/10 backdrop-blur-xl">
            <MapPin className="mx-auto mb-2 text-[#4cc9f0]" size={18} />
            {zone}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Contact</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
              <span className="text-white">
                Votre poêle fonctionne. Votre maison est chaude. Point.
              </span>
            </h2>
            <p className="mt-5 text-white/75">
              On s’occupe du reste : entretien, ramonage, dépannage et contrats annuels à Saint-Gaudens et 100 km autour.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}>
                <Phone size={18} /> Appeler
              </ButtonLink>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white hover:bg-white/10">
                <Mail size={18} /> Envoyer un mail <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <address className="not-italic rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80">
            <p className="font-bold text-white">Tout Feu Tout Flamme</p>
            <p className="mt-3">M. Benjamin Plessis, EI</p>
            <p>2045 rue de la vieille serre</p>
            <p>31800 Saint-Gaudens</p>
            <p className="mt-3">SIREN : 752 185 934</p>
            <p className="mt-3">Tél : {PHONE}</p>
            <p>{EMAIL}</p>
          </address>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b132b]/80 px-5 py-8 text-sm text-white/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 Tout Feu Tout Flamme — Entretien, ramonage et dépannage poêles à granulés.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#/mention-legale" className="hover:text-[#4cc9f0]">Mentions légales</a>
          <a href="#/cgv" className="hover:text-[#4cc9f0]">CGV</a>
          <a href={SUBSCRIBE_URL} className="hover:text-[#4cc9f0]">Contrat d’entretien</a>
        </div>
      </div>
    </footer>
  );
}
function AppRouter() {
  const route = useRoute();
  const page = useMemo(() => {
    if (route.startsWith("/blog/")) {
      return <BlogPage slug={route.replace("/blog/", "")} />;
    }

    switch (route) {
      case "/tarifs":
        return <TarifsPage />;
      case "/blog":
        return <BlogPage />;
      case "/galerie":
        return <GaleriePage />;
      case "/partenariat":
        return <PartenariatPage />;
      case "/mention-legale":
        return <MentionsPage />;
      case "/cgv":
        return <CgvPage />;
      case "/contact":
        return <FinalCta />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return <Layout>{page}</Layout>;
}

export default AppRouter;
