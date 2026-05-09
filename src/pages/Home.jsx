import { motion } from "framer-motion";
import TrustItem from "../components/TrustItem";
import ButtonLink from "../components/ButtonLink";
import ServicesSection from "../components/ServicesSection";
import FeaturedContract from "../components/FeaturedContract";
import ZonesInterventionSection from "../components/ZonesInterventionSection";
import { offers } from "../data/offers";
import { services } from "../data/services";
import PageContainer from "../components/PageContainer";
import StationTechniqueSection from "../components/StationTechniqueSection";
import GoogleReviewsBlock from "../components/GoogleReviewsBlock";
import SeoTextSection from "../components/SeoTextSection";
import LocalSeoPowerSection from "../components/LocalSeoPowerSection";
import {
  SITE_URL,
  defaultKeywords,
  seoFaqs,
  buildSeoGraph,
} from "../lib/seo";
import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  FileSignature,
  Flame,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
const RDV_URL = "/contact";

export default function Home() {
  return (
    <>
      {/* <SEO
        route="/"
        title="Entretien poêle à granulés Saint-Gaudens 31800 | Tout Feu Tout Flamme"
        description="Tout Feu Tout Flamme intervient à Saint-Gaudens 31800 et dans un rayon de 100 km pour l’entretien, le ramonage mécanique, le dépannage et les contrats de poêles à granulés."
        keywords={defaultKeywords}
        schema={buildSeoGraph(`${SITE_URL}/`, seoFaqs)}
      /> */}
      
     
      {/* CONTENU */}
      <section className="relative z-10 overflow-x-hidden py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative text-center lg:text-left"
          >

{/* NOM CENTRÉ */}
<div className="relative z-20 mx-auto mb-10 flex w-full max-w-full justify-center overflow-hidden px-4">
  <p
    className="max-w-full text-center text-4xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl"
    style={{ fontFamily: "'Great Vibes', cursive" }}
  >
    Tout Feu Tout Flamme
  </p>
</div>
      <p className="text-center font-black uppercase tracking-[0.34em] text-[#4cc9f0] md:text-sm">
        Benjamin Plessis
      </p>

      <p className="scintillant mt-3 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-white/60 md:text-base">
        25 ans d'expérience en maintenance, dont 5 sur les appareils granulés. 
      </p>

      <div className="mt-10 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur-xl">
        <BadgeCheck size={17} className="text-[#4cc9f0]" />
        Saint-Gaudens 31800 • Intervention jusqu’à 100 km autour
      </div>

      <h1 className="max-w-5xl font-serif text-4xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
        Expert en poêles<br />
        <span className="text-[#4cc9f0] drop-shadow-[0_0_24px_rgba(76,201,240,0.25)]">
           à granulés toutes marques.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-white/75">
        Entretien annuel, ramonage mécanique avec certificat, dépannage et contrats d’entretien pour poêles à granulés à Saint-Gaudens, dans le Comminges, en Haute-Garonne et dans un rayon de 100 km.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <a
  href={SUBSCRIBE_URL}
  className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-4 font-bold text-white"
>
          <FileSignature size={18} /> Contrat d’entretien
        </a>
        <a
  href={RDV_URL}
  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-4 font-bold text-white"
>
          <CalendarDays size={18} /> Prendre rendez-vous
        </a>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        <TrustItem title="Intervention rapide" text="Saint-Gaudens + 100 km" icon={Flame} />
        <TrustItem title="Technicien qualifié" text="Entretien & dépannage" icon={ShieldCheck} />
        <TrustItem title="Contrats en ligne" text="Souscription simple" icon={Star} />
      </div>
    </motion.div>

    

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-8">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
            Contrat recommandé
          </p>

          <div className="mt-8 flex items-start justify-between gap-6">
            <div>
              <h2 className="font-serif text-5xl font-black text-white">Confort</h2>
              <p className="mt-4 text-white/70">
                Le meilleur équilibre entre entretien, suivi et tranquillité.
              </p>
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

         <ButtonLink href={SUBSCRIBE_URL}>
         <FileSignature size={18} /> Contrat d’entretien
         </ButtonLink>

          <ButtonLink href={RDV_URL} variant="secondary">
        <CalendarDays size={18} /> Prendre rendez-vous
        </ButtonLink>
        </div>
      </div>
    </motion.div>
</div>
<PageContainer className="text-center text-white">
  <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
    Zones d’intervention
  </p>

  <h2 className="mt-4 font-serif text-4xl font-black text-white md:text-5xl">
    Entretien poêle à granulés autour de Saint-Gaudens
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
    Tout Feu Tout Flamme intervient dans le Comminges, la Haute-Garonne,
    l’Ariège, le Gers et les Hautes-Pyrénées pour l’entretien, le dépannage
    et le ramonage mécanique de poêles à granulés.
  </p>

  <a
    href="/zones-intervention"
    className="mt-10 inline-flex rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-black text-white backdrop-blur-xl transition hover:bg-white/10"
  >
    Voir toutes les villes couvertes
  </a>
</PageContainer>
</section>
      <StationTechniqueSection />
      <GoogleReviewsBlock />
      <ServicesSection />
      <FeaturedContract />
      <SeoTextSection />
      <LocalSeoPowerSection />
      {/* <ZonesSection /> */}
      {/* <FinalCta /> */}
      
    </>
  );
}