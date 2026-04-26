import React, { useMemo, useState } from "react";
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
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";
const PHONE = "07 61 64 77 65";

const navItems = [
  { label: "Accueil", path: "#/" },
  { label: "Tarifs", path: "#/tarifs" },
  { label: "Blog", path: "#/blog" },
  { label: "Galerie", path: "#/galerie" },
  { label: "Partenariat", path: "#/partenariat" },
  { label: "CGV", path: "#/cgv" },
];

const offers = [
  {
    name: "ESSENTIEL",
    price: "139€ / an",
    monthly: "13,90€ / mois",
    badge: "Entretien annuel",
    color: "from-emerald-500 to-green-800",
    border: "border-emerald-400/30",
    features: [
      "Entretien annuel complet",
      "Ramonage avec certificat",
      "Contrôles de sécurité",
      "Pour un besoin simple et conforme",
    ],
  },
  {
    name: "CONFORT",
    price: "189€ / an",
    monthly: "18,90€ / mois",
    badge: "Le plus choisi",
    color: "from-orange-400 to-amber-700",
    border: "border-orange-300/50",
    featured: true,
    features: [
      "Tout ESSENTIEL",
      "1 intervention incluse",
      "Main d’œuvre + déplacement compris",
      "Idéal pour éviter les mauvaises surprises",
    ],
  },
  {
    name: "SÉRÉNITÉ",
    price: "249€ / an",
    monthly: "24,90€ / mois",
    badge: "Tranquillité maximale",
    color: "from-sky-400 to-blue-800",
    border: "border-sky-300/40",
    features: [
      "Tout le pack Confort",
      " Dépannage tout au long de la saisons compris (main d'œuvre incluse, déplacement en sus)",
      "Priorité dépannage 24/48h",
      "-15% sur les pièces détachées",
      "Accompagnement premium tout l’hiver",
    ],
  },
];

const services = [
  {
    icon: ShieldCheck,
    title: "Nettoyage complet des conduits simple paroi et concentrique",
    text: "Nettoyage professionnel des conduits de fumée pour limiter les risques d’incendie et améliorer le rendement de votre poêle.",
  },
  {
    icon: Wrench,
    title: "Dépannage rapide et pièces d’origine",
    text: "Diagnostic, recherche de panne, remplacement de pièces défectueuses et remise en service de votre appareil à granulés.",
  },
  {
    icon: Flame,
    title: "Entretien périodique complet",
    text: "Vérification des composants électroniques, réglage des paramètres de fonctionnement et conseils d’utilisation.",
  },
];

const zones = ["Saint-Gaudens", "Cugnaux", "Boussens", "Carbonne", "Comminges", "Secteurs limitrophes"];

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

const blogPosts = [
  {
    title: "Pourquoi entretenir son poêle à granulés avant l’hiver ?",
    date: "Article modèle",
    text: "Performance, sécurité, consommation : l’entretien annuel permet de préparer votre appareil avant les périodes de forte utilisation.",
  },
  {
    title: "Ramonage mécanique : ce qu’il faut savoir",
    date: "Article modèle",
    text: "Le ramonage permet de nettoyer le conduit, de limiter l’encrassement et de disposer d’un certificat après intervention.",
  },
  {
    title: "Panne de poêle à granulés : les premiers contrôles",
    date: "Article modèle",
    text: "Avant une intervention, quelques symptômes peuvent orienter le diagnostic : allumage, extraction, alimentation granulés ou sécurité.",
  },
];

const cgvArticles = [
  ["Article 1 – Définitions", "TOUT FEU TOUT FLAMME désigne l’entreprise exploitée par M. Plessis Benjamin, siège social : 2045 rue de la vieille serre 31800 Saint-Gaudens. L’entreprise intervient sans sous-traitance et sous sa responsabilité exclusive. Le Client désigne toute personne physique ou morale bénéficiaire des prestations."],
  ["Article 2 – Objet", "TOUT FEU TOUT FLAMME est une entreprise qualifiée en ramonage, entretien et dépannage, intervenant sur les installations à bois et granulés, pour assurer leur sécurité. Les prestations sont réalisées conformément au DTU 24.1, au Décret n° 2023-641 du 20 juillet 2023, aux Règlements Sanitaires Départementaux concernés et aux préconisations des fabricants."],
  ["Article 3 – Commande, devis et règlement", "Toute commande implique acceptation totale des présentes CGV. Un devis peut être établi et reste valable 10 jours. Le paiement est exigible immédiatement après l’intervention, par chèque, carte bancaire ou espèces. Le certificat de ramonage est remis uniquement après règlement complet."],
  ["Article 4 – Conditions d’intervention et annulation", "Le client doit s’assurer que l’appareil est éteint et froid depuis au moins 10 heures, que l’accès au conduit et aux trappes de visite est libre et sécurisé, et que l’environnement immédiat est dégagé. En cas d’annulation à moins de 48 heures, d’absence, d’accès impossible ou d’installation chaude, un forfait de 30 € TTC peut être facturé."],
  ["Article 5 – Certificat et duplicata", "Un certificat de ramonage ou rapport de visite est remis à la fin de chaque prestation. Il atteste du passage et doit être conservé. En cas de perte, un duplicata peut être envoyé par e-mail moyennant 10 € TTC. L’envoi postal entraîne des frais supplémentaires de 5 € TTC."],
  ["Article 6 – Responsabilité et limites d’intervention", "TOUT FEU TOUT FLAMME est tenu à une obligation de moyens, non de résultat. L’entreprise ne peut être tenue responsable d’une installation non conforme, vétuste, modifiée ou défectueuse, d’un vice caché, d’une malfaçon d’origine, d’un usage inadapté ou de l’usure normale des composants."],
  ["Article 7 – Poêles à granulés", "La remise à zéro du compteur est effectuée uniquement si l’accès constructeur est possible et conformément aux directives techniques. Cette opération ne remplace pas la maintenance complète d’une station technique agréée."],
  ["Article 8 – Engagements du client", "Le client s’engage à fournir des informations exactes, garantir un accès libre et sécurisé, utiliser un combustible conforme et signaler toute anomalie constatée après intervention dans un délai maximum de 48 heures."],
  ["Article 9 – Non-conformité et rapport technique", "Si une non-conformité manifeste est constatée, TOUT FEU TOUT FLAMME peut refuser l’intervention ou établir un rapport de non-conformité facturé 50 € TTC. En cas de danger grave imminent, l’entreprise recommandera fortement de ne pas utiliser le moyen de chauffage."],
  ["Article 10 – Données visuelles et communication", "Des photos ou vidéos peuvent être réalisées pendant l’intervention à des fins techniques, de traçabilité ou de communication, dans le respect de l’anonymat du client. Aucune donnée personnelle identifiable n’est publiée."],
  ["Article 11 – Obligations réglementaires", "Les prestations sont effectuées selon les règles de l’art et les normes DTU en vigueur. Le client est responsable du respect des fréquences d’entretien prévues par le Décret 2023-641 et le RSDT applicable."],
  ["Article 12 – Conservation des documents", "Les factures, certificats et rapports remis doivent être conservés par le client afin de prouver l’entretien régulier de son installation auprès des assurances, installateurs ou autorités."],
  ["Article 13 – Loi applicable et litiges", "Les présentes CGV sont régies par le droit français. En cas de désaccord, une solution amiable sera recherchée. À défaut, le litige relèvera du Tribunal de Commerce de Toulouse."],
];

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-orange-400 to-amber-600 text-slate-950 shadow-lg shadow-orange-500/20 hover:scale-[1.02]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight size={18} />
    </a>
  );
}

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(247,127,0,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.13),transparent_30%),linear-gradient(135deg,#07111f_0%,#05070b_45%,#0b1018_100%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <img
            src="\Logoweb.png"
            alt="Tout Feu Tout Flamme - Expert en poêles à granulés à Saint-Gaudens"
            className="h-11 w-11"
            />
          <a href="#/" className="flex items-center gap-3" title="Tout feu tout flamme - Acceuil">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-emerald-700 shadow-lg shadow-orange-500/20">
              <Flame className="text-white" size={25} aria-hidden="true" />
            </div>
            <div>
              <p className="font-[family-name:var(--logo-font)] text-4xl tracking-normal">
  Tout Feu Tout Flamme
</p>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">Poêles à granulés</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} className="hover:text-white">{item.label}</a>
            ))}
            <ButtonLink href={RDV_URL} variant="secondary">Rendez-vous</ButtonLink>
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#05070b] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.path} href={item.path} onClick={() => setOpen(false)} className="rounded-xl bg-white/5 px-4 py-3 text-white/80">{item.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>
      {children}
      <Footer />
    </main>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-orange-300">{kicker}</p>
      <h2 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-5 leading-8 text-white/65">{text}</p>}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-700/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
              <BadgeCheck size={17} className="text-orange-300" /> Intervention dans le Comminges et secteurs limitrophes
            </div>
            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight md:text-7xl text-white">
              <span className="bg-gradient-to-r from-orange-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent">Expert en poêles à granulés à Saint-Gaudens</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Tout Feu Tout Flamme, votre spécialiste à Saint-Gaudens (31), assure l’entretien, le nettoyage complet et le dépannage toutes marques de vos poêles à granulés. Profitez d'un confort optimal et d'un service rapide dans toute la région du Comminges. Faites confiance à notre savoir-faire pour un service rapide, efficace et personnalisé.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={SUBSCRIBE_URL}><FileSignature size={18} /> Contrat d’entretien</ButtonLink>
              <ButtonLink href={RDV_URL} variant="secondary"><CalendarDays size={18} /> Prendre rendez-vous</ButtonLink>
            </div>
          </motion.div>
          <HeroCard />
        </div>
      </section>
      <ServicesPreview />
      <ZonesSection />
      <FinalCta />
    </>
  );
}

function HeroCard() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-black p-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Contrat recommandé</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">CONFORT</h2>
            </div>
            <Star className="text-orange-300" size={34} />
          </div>
          <p className="text-5xl font-black">189€</p>
          <p className="mt-1 text-white/55">ou 18,90€ / mois</p>
          <ul className="mt-7 space-y-3 text-white/75">
            <li>✓ Entretien + ramonage + certificat</li>
            <li>✓ 1 dépannage inclus dans l’année</li>
            <li>✓ Déplacement + 1h de main d’œuvre inclus</li>
            <li>✓ Rendez-vous priorisé</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle kicker="Services" title="Entretien et dépannage de poêles à granulés" />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20">
            <service.icon className="mb-5 text-orange-300" size={34} />
            <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
            <p className="mt-3 leading-7 text-white/65">{service.text}</p>
            <a href={RDV_URL} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">Prendre rendez-vous <ChevronRight size={16} /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

function TarifsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle
        kicker="Tarifs & prestations"
        title="Expertise et services à Saint-Gaudens"
        text="Tout Feu Tout Flamme est votre partenaire de confiance pour l’entretien et le dépannage des poêles à granulés dans le Comminges et ses environs. Les prestations couvrent l’entretien périodique, la réparation urgente, le nettoyage des conduits, la vérification des composants électroniques, le réglage des paramètres de fonctionnement et le remplacement des pièces défectueuses."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {offers.map((offer) => <OfferCard key={offer.name} offer={offer} />)}
      </div>
      <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
        <div className="border-b border-white/10 p-6">
          <h3 className="font-serif text-3xl font-bold">Tarifs prestations poêles à granulés 2026</h3>
          <p className="mt-2 text-white/60">Tarifs TTC, hors pièces éventuelles.</p>
        </div>
        <div className="divide-y divide-white/10">
          {tariffRows.map(([name, detail, price]) => (
            <div key={name} className="grid gap-3 p-5 md:grid-cols-[1fr_1.4fr_0.6fr] md:items-center">
              <p className="font-semibold text-white">{name}</p>
              <p className="text-white/60">{detail}</p>
              <p className="font-bold text-orange-300 md:text-right">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer }) {
  return (
    <div className={`relative rounded-[2rem] border ${offer.border} bg-[#090d14] p-6 shadow-2xl shadow-black/30 ${offer.featured ? "lg:-mt-4" : ""}`}>
      {offer.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-300 to-amber-500 px-4 py-1 text-xs font-black uppercase tracking-widest text-slate-950">Le plus choisi</div>}
      <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${offer.color}`} />
      <p className="text-sm uppercase tracking-[0.25em] text-white/45">{offer.badge}</p>
      <h3 className="mt-2 font-serif text-3xl font-bold">{offer.name}</h3>
      <p className="mt-6 text-4xl font-black">{offer.price}</p>
      <p className="mt-1 text-white/50">{offer.monthly}</p>
      <ul className="mt-7 space-y-3 text-sm text-white/70">{offer.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
      <a href={SUBSCRIBE_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold hover:bg-white/10">Souscrire <ChevronRight size={17} /></a>
    </div>
  );
}

function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle kicker="Blog" title="Conseils, entretien et sécurité" text="Page prête pour publier des articles utiles : entretien avant l’hiver, ramonage, pannes courantes, économies de granulés et bonnes pratiques." />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <BookOpen className="mb-5 text-orange-300" />
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">{post.date}</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">{post.title}</h3>
            <p className="mt-4 leading-7 text-white/65">{post.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-6 text-white/75">
        <p className="font-semibold text-orange-200">Intégration blog recommandée</p>
        <p className="mt-2">Pour un site React/Vite statique, le plus simple est de créer un dossier <code className="rounded bg-black/30 px-2 py-1">src/posts</code> avec un fichier par article, ou d’utiliser Markdown/MDX. Pour publier sans toucher au code, on peut brancher un CMS léger comme Decap CMS, Notion, Sanity ou WordPress headless.</p>
      </div>
    </section>
  );
}

function GaleriePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle kicker="Galerie" title="Réalisations et interventions" text="Structure prête pour intégrer tes photos avant/après, conduits, appareils entretenus, diagnostics et interventions atelier." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {zones.slice(0, 4).map((zone, index) => (
          <div key={zone} className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 shadow-xl shadow-black/20">
            <Camera className="mb-4 text-orange-300" />
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">Photo {index + 1}</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">Intervention {zone}</h3>
            <p className="mt-3 text-white/60">Emplacement prêt pour image.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PartenariatPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle kicker="Partenariat" title="Collaborations techniques et professionnelles" text="Page prévue pour présenter tes collaborations avec fabricants, installateurs, revendeurs, stations techniques ou partenaires locaux." />
      <div className="grid gap-6 lg:grid-cols-3">
        {["Installateurs", "Fabricants", "Professionnels locaux"].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <Handshake className="mb-5 text-orange-300" size={34} />
            <h3 className="font-serif text-2xl font-bold">{item}</h3>
            <p className="mt-3 leading-7 text-white/65">Mise en avant des partenariats, demandes de collaboration technique, SAV, suivi client et complémentarité des métiers.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MentionsPage() {
  return (
    <LegalShell title="Mentions légales" icon={Scale}>
      <LegalBlock title="Présentation du site internet">
        Selon les dispositions de la loi sur l’économie numérique, il est précisé aux utilisateurs du site https://toutfeutoutflamme.eu l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
      </LegalBlock>
      <LegalBlock title="Éditeur">
        Adresse du siège social : 2045 rue de la vieille serre, 31800 Saint-Gaudens. Téléphone : 07 61 64 77 65. Email : {EMAIL}. SIREN : 752185934.
      </LegalBlock>
      <LegalBlock title="Direction de la publication">
        Responsable de la publication : Plessis Benjamin. Courrier électronique : tftf31800@gmail.com.
      </LegalBlock>
      <LegalBlock title="Hébergement">
        Hébergement assuré par IONOS, 7 place de la Gare BP 70109, 57200 Sarreguemines Cedex France. Téléphone : 09 70 808 911. Site web : https://www.ionos.fr.
      </LegalBlock>
      <LegalBlock title="Gestion des données personnelles">
        Le responsable du traitement est Tout feu tout flamme, représentée par Benjamin Plessis, 2045 rue de la vieille serre, 31800 Saint-Gaudens. L’utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition. Pour exercer ces droits : {EMAIL}.
      </LegalBlock>
      <LegalBlock title="Sécurité et cookies">
        Le site met en œuvre des mesures raisonnables de sécurité. En continuant la navigation, l’utilisateur peut être informé de l’usage des cookies selon les dispositifs en place.
      </LegalBlock>
      <LegalBlock title="Juridiction compétente">
        La loi française s’applique à tout différend relatif au site.
      </LegalBlock>
    </LegalShell>
  );
}

function CgvPage() {
  return (
    <LegalShell title="Conditions générales de vente" icon={FileSignature}>
      {cgvArticles.map(([title, body]) => <LegalBlock key={title} title={title}>{body}</LegalBlock>)}
      <LegalBlock title="Politique de confidentialité – contrats annuels et abonnements">
        Les données personnelles collectées sont traitées par Tout feu tout flamme, représentée par Benjamin Plessis. Elles peuvent comprendre nom, prénom, adresse, email, téléphone, informations liées à l’appareil, données de facturation et informations nécessaires à la gestion des contrats. Les données bancaires ne sont jamais stockées par Tout feu tout flamme ; les paiements sont traités via Stripe.
      </LegalBlock>
      <LegalBlock title="Droits RGPD">
        Conformément au RGPD, l’utilisateur dispose des droits d’accès, de rectification, de suppression, d’opposition et de portabilité. Contact : {EMAIL}.
      </LegalBlock>
    </LegalShell>
  );
}

function LegalShell({ title, icon: Icon, children }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
        <Icon className="mb-5 text-orange-300" size={38} />
        <h1 className="font-serif text-5xl font-bold">{title}</h1>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function LegalBlock({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="font-serif text-2xl font-bold text-white">{title}</h2>
      <p className="mt-3 leading-8 text-white/65">{children}</p>
    </div>
  );
}

function ZonesSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Secteur</p>
        <h2 className="mt-3 font-serif text-4xl font-bold">Intervention locale et réactive</h2>
        <p className="mt-5 leading-8 text-white/65">Basé à Saint-Gaudens, Tout Feu Tout Flamme intervient dans le Comminges et les secteurs limitrophes pour l’entretien, le ramonage et le dépannage de vos appareils à granulés.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {zones.map((zone) => (
          <div key={zone} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center text-white/75">
            <MapPin className="mx-auto mb-2 text-orange-300" size={18} />{zone}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-5 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 shadow-2xl shadow-black/30 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Contact</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">Votre poêle fonctionne. Votre maison est chaude. Point.</h2>
            <p className="mt-4 text-white/65">On s’occupe du reste : entretien, ramonage, dépannage et contrats annuels.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}><Phone size={18} /> Appeler</ButtonLink>
              <ButtonLink href={`mailto:${EMAIL}`} variant="secondary"><Mail size={18} /> Envoyer un mail</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/25 p-6 text-white/70">
            <p className="font-semibold text-white">Tout Feu Tout Flamme</p>
            <p className="mt-3">M. Benjamin Plessis, EI</p>
            <p>2045 rue de la vieille serre</p>
            <p>31800 Saint-Gaudens</p>
            <p className="mt-3">SIREN : 752 185 934</p>
            <p className="mt-3">Tél : {PHONE}</p>
            <p>{EMAIL}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-sm text-white/45">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 Tout Feu Tout Flamme — Entretien et dépannage poêles à granulés.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#/mention-legale" className="hover:text-white">Mention légale</a>
          <a href="#/cgv" className="hover:text-white">CGV</a>
          <a href={SUBSCRIBE_URL} className="hover:text-white">Contrat d’entretien</a>
        </div>
      </div>
    </footer>
  );
}

function AppRouter() {
  const route = useRoute();
  const page = useMemo(() => {
    switch (route) {
      case "/tarifs": return <TarifsPage />;
      case "/blog": return <BlogPage />;
      case "/galerie": return <GaleriePage />;
      case "/partenariat": return <PartenariatPage />;
      case "/mention-legale": return <MentionsPage />;
      case "/cgv": return <CgvPage />;
      default: return <HomePage />;
    }
  }, [route]);
  return <Layout>{page}</Layout>;
}

export default AppRouter;
