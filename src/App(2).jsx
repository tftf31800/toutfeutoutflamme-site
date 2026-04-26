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
} from "lucide-react";
import { motion } from "framer-motion";

const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";
const PHONE = "07 61 64 77 65";

const navItems = [
  { label: "Accueil", path: "#/" },
  { label: "Tarifs / Prestations", path: "#/tarifs" },
  { label: "Blog", path: "#/blog" },
  { label: "Galerie", path: "#/galerie" },
  { label: "Partenariat", path: "#/partenariat" },
  { label: "Contact", path: "#/contact" },
];

const offers = [
  {
    name: "Essentiel",
    price: "139€",
    monthly: "13,90€ / mois",
    badge: "Entretien annuel",
    color: "from-emerald-600 to-green-800",
    features: ["Entretien annuel complet", "Ramonage mécanique avec certificat", "Contrôles de sécurité", "Contrôle combustion standard"],
  },
  {
    name: "Confort",
    price: "189€",
    monthly: "18,90€ / mois",
    badge: "Contrat recommandé",
    color: "from-orange-500 to-amber-600",
    featured: true,
    features: ["Tout le pack ESSENTIEL","1 intervention incluse","Main d’œuvre + déplacement compris","Rendez-vous priorisé","Idéal pour éviter les mauvaises surprises",],
  },
  {
    name: "Sérénité",
    price: "249€",
    monthly: "24,90€ / mois",
    badge: "Tranquillité maximale",
    color: "from-sky-600 to-blue-800",
    features: ["Tout le pack Confort"," Dépannage tout au long de la saisons compris (main d'œuvre incluse, déplacement en sus)","Priorité dépannage 24/48h","-15% sur les pièces détachées (H.T.)","Accompagnement premium tout l’hiver"],
  },
];

const services = [
  {
    icon: Wrench,
    title: "Entretien",
    text: "Nettoyage complet, vérification des composants et contrôle de sécurité pour garantir les performances de votre poêle.",
  },
  {
    icon: ShieldCheck,
    title: "Dépannage",
    text: "Intervention rapide pour diagnostiquer et réparer les pannes de votre poêle à granulés.",
  },
  {
    icon: Flame,
    title: "Ramonage",
    text: "Ramonage mécanique et nettoyage du conduit pour votre sécurité et le bon fonctionnement de votre appareil.",
  },
];

const zones = ["Saint-Gaudens 31800", "Comminges", "Cugnaux", "Boussens", "Carbonne", "100 km autour"];

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

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function Seo({ title, description }) {
  React.useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
  return null;
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition-all";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#3a86ff] to-[#1c2541] text-white"
      : "border border-[#3a86ff]/30 text-[#0b132b] hover:bg-blue-50";
  return <a href={href} className={`${base} ${styles}`}>{children}<ChevronRight size={18} /></a>;
}

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#0b132b]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(58,134,255,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(247,127,0,0.12),transparent_30%),linear-gradient(135deg,#f4f7fb_0%,#e6edf7_40%,#dce6f5_100%)]" />
        <header className="sticky top-0 z-50 border-b border-blue-900/10 bg-white border border-blue-900/10 shadow-md/90 backdrop-blur-xl">        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
           <img
            src="\Logoweb.png"
            alt="Tout Feu Tout Flamme - Expert en poêles à granulés à Saint-Gaudens"
            className="h-11 w-11"
            />
          <a href="#/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b132b] to-[#1c2541]-orange-600 to-emerald-700 shadow-lg shadow-orange-600/20">
              <Flame className="text-white" size={26} />
            </div>
            <div>
              <p className="font-[family-name:var(--logo-font)] text-4xl tracking-normal">Tout Feu Tout Flamme</p>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-700">Poêles à granulés</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#1c2541] lg:flex">
            {navItems.map((item) => <a key={item.path} href={item.path} className="hover:text-orange-700">{item.label}</a>)}
            <ButtonLink href={RDV_URL}><CalendarDays size={18} /> Prendre rendez-vous</ButtonLink>
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-xl border border-black/10 p-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-black/10 bg-white border border-blue-900/10 shadow-md px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => <a key={item.path} href={item.path} onClick={() => setOpen(false)} className="rounded-xl bg-orange-50 px-4 py-3 font-semibold text-slate-800">{item.label}</a>)}
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
  return (
    <>
      <Seo title="Entretien poêle à granulés Saint-Gaudens | Tout Feu Tout Flamme" description="Tout Feu Tout Flamme intervient à Saint-Gaudens 31800 et dans un rayon de 100 km pour l’entretien, le ramonage et le dépannage de poêles à granulés." />
      <section className="relative overflow-hidden py-20">
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(247,127,0,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(58,134,255,0.15),transparent_30%),linear-gradient(135deg,#0b132b_0%,#0a192f_40%,#0f2742_100%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-[48%] bg-[radial-gradient(circle_at_40%_45%,rgba(234,88,12,0.18),transparent_30%),linear-gradient(135deg,#e9dcc8,#b98a58)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white border border-blue-900/10 shadow-md/80 px-5 py-3 text-sm font-semibold text-[#1c2541] shadow-sm">
              <BadgeCheck size={17} className="text-orange-600" /> Intervention dans le Comminges et secteurs limitrophes
            </div>
              <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-[#0b132b] md:text-7xl">
                Expert en <br />
                 <span className="bg-gradient-to-r from-[#3a86ff] via-[#1c2541] to-[#1b4332] bg-clip-text text-transparent">
                  poêles à granulés
                    </span>
                 </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-[#1c2541]">
              Tout Feu Tout Flamme à Saint-Gaudens assure l’entretien et le dépannage de vos poêles à granulés pour un confort optimal. Faites confiance à notre savoir-faire pour un service rapide, efficace et personnalisé.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={SUBSCRIBE_URL}><FileSignature size={18} /> Contrat d’entretien</ButtonLink>
              <ButtonLink href={RDV_URL} variant="secondary"><CalendarDays size={18} /> Prendre rendez-vous</ButtonLink>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <TrustItem title="Intervention rapide" text="Délais courts" icon={Flame} />
              <TrustItem title="Technicien qualifié" text="Expérience & expertise" icon={ShieldCheck} />
              <TrustItem title="Satisfaction garantie" text="Service de qualité" icon={Star} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="hidden lg:block">
            <div className="relative h-[560px] rounded-[2.5rem] border border-black/10 bg-gradient-to-br from-[#0b132b] to-[#1c2541]-stone-200 via-amber-100 to-stone-400 shadow-2xl overflow-hidden">
              <div className="absolute inset-x-10 bottom-10 h-64 rounded-[2rem] bg-gradient-to-br from-[#0b132b] to-[#1c2541]-slate-950 to-slate-800 shadow-2xl" />
              <div className="absolute bottom-20 right-24 h-72 w-40 rounded-xl bg-[#111827] shadow-2xl">
                <div className="mx-auto mt-10 h-36 w-24 rounded-lg bg-gradient-to-b from-orange-300 via-orange-600 to-black shadow-inner" />
                <div className="mx-auto mt-5 h-3 w-28 rounded-full bg-black/50" />
                <div className="mx-auto mt-3 h-3 w-24 rounded-full bg-black/50" />
              </div>
              <div className="absolute left-10 top-10 rounded-2xl bg-white border border-blue-900/10 shadow-md/70 p-5 backdrop-blur">
                <p className="font-serif text-2xl font-black">Confort & sécurité</p>
                <p className="mt-1 text-sm text-[#3a4a6b]">Entretien • Ramonage • Dépannage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ServicesSection />
      <FeaturedContract />
      <ZonesSection />
      <FinalCta />
    </>
  );
}

function TrustItem({ title, text, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700"><Icon size={22} /></div>
      <div><p className="font-bold text-[#0b132b]">{title}</p><p className="text-sm text-[#3a4a6b]">{text}</p></div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-18 md:py-24">
      <SectionTitle center kicker="Nos services" title="Entretien, dépannage et ramonage" />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[2rem] border border-black/10 bg-white border border-blue-900/10 shadow-md p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-700"><service.icon size={30} /></div>
            <h3 className="font-serif text-2xl font-black text-[#0b132b]">{service.title}</h3>
            <p className="mt-4 leading-7 text-[#3a4a6b]">{service.text}</p>
            <a href={RDV_URL} className="mt-7 inline-flex items-center gap-2 font-bold text-orange-700">En savoir plus <ChevronRight size={17} /></a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedContract() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-[#0b132b] to-[#1c2541]-slate-950 to-slate-800 p-6 text-white shadow-2xl md:grid-cols-[0.36fr_0.64fr] md:p-8">
        <div className="min-h-56 rounded-[1.5rem] bg-gradient-to-br from-[#0b132b] to-[#1c2541]-orange-200 via-stone-300 to-slate-800" />
        <div className="grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-300">Contrat recommandé</p>
            <h2 className="mt-5 font-serif text-5xl font-black">Confort</h2>
            <p className="mt-5 text-[#3a86ff]">Entretien + ramonage + certificat +<br />1 dépannage inclus dans l’année</p>
          </div>
          <div className="text-left md:text-right">
            <Star className="mb-8 ml-auto text-orange-300" size={42} />
            <p className="text-6xl font-black text-orange-300">189€</p>
            <p className="mt-3 text-xl font-bold">ou 18,90€ / mois</p>
            <ButtonLink href={SUBSCRIBE_URL}>Souscrire</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function TarifsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <Seo title="Tarifs entretien poêle à granulés Saint-Gaudens | Tout Feu Tout Flamme" description="Tarifs entretien, ramonage et dépannage de poêles à granulés à Saint-Gaudens 31800 et dans un rayon de 100 km." />
      <SectionTitle kicker="Tarifs & prestations" title="Contrats d’entretien poêle à granulés" text="Intervention à Saint-Gaudens 31800 et dans un rayon de 100 km autour pour l’entretien, le ramonage mécanique et le dépannage." />
      <div className="grid gap-6 lg:grid-cols-3">{offers.map((offer) => <OfferCard key={offer.name} offer={offer} />)}</div>
      <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white border border-blue-900/10 shadow-md shadow-sm">
        <div className="border-b border-black/10 p-6"><h3 className="font-serif text-3xl font-black">Tarifs prestations poêles à granulés 2026</h3><p className="mt-2 text-[#3a4a6b]">Tarifs TTC, hors pièces éventuelles.</p></div>
        <div className="divide-y divide-black/10">{tariffRows.map(([name, detail, price]) => <div key={name} className="grid gap-3 p-5 md:grid-cols-[1fr_1.4fr_0.6fr] md:items-center"><p className="font-bold text-[#0b132b]">{name}</p><p className="text-[#3a4a6b]">{detail}</p><p className="font-black text-orange-700 md:text-right">{price}</p></div>)}</div>
      </div>
    </section>
  );
}

function OfferCard({ offer }) {
  return (
    <div className={`relative rounded-[2rem] border border-black/10 bg-white border border-blue-900/10 shadow-md p-7 shadow-sm ${offer.featured ? "ring-2 ring-orange-500 lg:-mt-4" : ""}`}>
      {offer.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-1 text-xs font-black uppercase tracking-widest text-white">Le plus choisi</div>}
      <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${offer.color}`} />
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">{offer.badge}</p>
      <h3 className="mt-2 font-serif text-4xl font-black text-[#0b132b]">{offer.name}</h3>
      <p className="mt-6 text-5xl font-black text-[#0b132b]">{offer.price}</p>
      <p className="mt-1 font-semibold text-slate-500">{offer.monthly}</p>
      <ul className="mt-7 space-y-3 text-sm font-medium text-[#1c2541]">{offer.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
      <a href={SUBSCRIBE_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-4 font-bold text-white hover:bg-orange-700">Souscrire <ChevronRight size={17} /></a>
    </div>
  );
}

function BlogPage() {
  return <SimplePage icon={BookOpen} kicker="Blog" title="Conseils entretien poêle à granulés" text="Articles à venir : entretien avant hiver, ramonage mécanique, pannes courantes, consommation et sécurité." />;
}
function GaleriePage() {
  return <SimplePage icon={Camera} kicker="Galerie" title="Réalisations et interventions" text="Photos avant/après, entretiens, ramonages et dépannages autour de Saint-Gaudens." />;
}
function PartenariatPage() {
  return <SimplePage icon={Handshake} kicker="Partenariat" title="Collaborations techniques" text="Page dédiée aux installateurs, revendeurs, fabricants et professionnels du chauffage souhaitant collaborer avec Tout Feu Tout Flamme." />;
}
function MentionsPage() {
  return <SimplePage icon={Scale} kicker="Mentions légales" title="Mentions légales" text="Tout Feu Tout Flamme — M. Benjamin Plessis, EI — 2045 rue de la vieille serre, 31800 Saint-Gaudens — SIREN : 752 185 934." />;
}
function CgvPage() {
  return <SimplePage icon={FileSignature} kicker="CGV" title="Conditions générales de vente" text="Page prévue pour intégrer les conditions générales de vente complètes, les conditions de paiement, les contrats d’entretien et les mentions RGPD." />;
}

function SimplePage({ icon: Icon, kicker, title, text }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <Seo title={`${title} | Tout Feu Tout Flamme Saint-Gaudens`} description={`${text} Intervention à Saint-Gaudens 31800 et dans un rayon de 100 km.`} />
      <div className="rounded-[2rem] border border-black/10 bg-white border border-blue-900/10 shadow-md p-8 shadow-sm md:p-12">
        <Icon className="mb-6 text-orange-700" size={42} />
        <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-700">{kicker}</p>
        <h1 className="mt-4 font-serif text-5xl font-black text-[#0b132b]">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#1c2541]">{text}</p>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text, center = false }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-700">{kicker}</p>
      <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-[#0b132b] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 leading-8 text-[#1c2541]">{text}</p>}
    </div>
  );
}

function ZonesSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:items-center">
      <SectionTitle kicker="Secteur" title="Intervention locale et réactive" text="Basé à Saint-Gaudens, Tout Feu Tout Flamme intervient dans le Comminges et dans un rayon de 100 km autour pour l’entretien, le ramonage et le dépannage." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{zones.map((zone) => <div key={zone} className="rounded-2xl border border-black/10 bg-white border border-blue-900/10 shadow-md px-4 py-5 text-center font-semibold text-[#1c2541] shadow-sm"><MapPin className="mx-auto mb-2 text-orange-700" size={18} />{zone}</div>)}</div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-5 py-20 bg-[#0b132b]">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-300">
              Contact
            </p>

            <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
              <span className="bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(58,134,255,0.4)]">
               Votre poêle fonctionne. Votre maison est chaude. Point.
              </span>              
            </h2>

            <p className="mt-5 text-white/75">
              On s’occupe du reste : entretien, ramonage, dépannage et contrats annuels.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}>
                <Phone size={18} /> Appeler
              </ButtonLink>

              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white hover:bg-white/10"
              >
                <Mail size={18} /> Envoyer un mail <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80">
            <p className="font-bold text-white">Tout Feu Tout Flamme</p>
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
    <footer className="border-t border-black/10 bg-white border border-blue-900/10 shadow-md/80 px-5 py-8 text-sm text-[#3a4a6b]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 Tout Feu Tout Flamme — Entretien et dépannage poêles à granulés.</p>
        <div className="flex flex-wrap gap-5"><a href="#/mention-legale" className="hover:text-orange-700">Mentions légales</a><a href="#/cgv" className="hover:text-orange-700">CGV</a><a href={SUBSCRIBE_URL} className="hover:text-orange-700">Contrat d’entretien</a></div>
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
      case "/contact": return <FinalCta />;
      default: return <HomePage />;
    }
  }, [route]);
  return <Layout>{page}</Layout>;
}

export default AppRouter;
