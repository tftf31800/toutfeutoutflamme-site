import { Link } from "react-router-dom";
import {
  Flame,
  ShieldCheck,
  Wrench,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";
import BackButton from "../components/BackHomeButton";

const services = [
  "Nettoyage complet de l’appareil",
  "Ramonage mécanique avec certificat",
  "Contrôle des sécurités",
  "Vérification des joints",
  "Contrôle combustion & fonctionnement",
  "Nettoyage échangeurs et conduits accessibles",
];

const problems = [
  "Poêle qui s’allume difficilement",
  "Bruit anormal ventilation ou extracteur",
  "Encrassement rapide",
  "Mauvaise combustion",
  "Consommation excessive de granulés",
  "Messages d’alarme ou défauts",
];

export default function EntretienMCZ() {
  return (
    <>
      <BackButton />

      <SEO
        route="/entretien-poele-mcz"
        title="Entretien poêle MCZ | Ramonage & dépannage | Tout Feu Tout Flamme"
        description="Entretien, ramonage et dépannage de poêles à granulés MCZ autour de Saint-Gaudens. Intervention sérieuse et conforme aux recommandations fabricant."
        keywords={[
          "entretien MCZ",
          "poêle MCZ entretien",
          "ramonage poêle MCZ",
          "dépannage MCZ",
          "MCZ Saint-Gaudens",
          "poêle granulés MCZ",
          "artisan MCZ",
        ]}
      />

      <PageContainer className="text-white">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-16 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-12 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f77f00]/10 via-transparent to-[#4cc9f0]/10" />

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f77f00]/20 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4cc9f0]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 flex h-28 w-56 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
  <img
    src="/brands/mcz.webp"
    alt="MCZ"
    className="max-h-16 object-contain opacity-95"
  />
</div>

            

            <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
              Entretien poêle MCZ
            </h1>

            <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-[#ffd6a5] backdrop-blur-xl">
  5 années d’expérience sur les appareils MCZ
</div>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Entretien, ramonage, nettoyage et dépannage de poêles à granulés
              MCZ autour de Saint-Gaudens et du Comminges.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-24">
          <SectionTitle
            eyebrow="Pourquoi entretenir un MCZ ?"
            title="Un entretien régulier reste essentiel"
            text="Même les appareils haut de gamme nécessitent un entretien rigoureux afin de préserver performances, sécurité et durée de vie."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <ShieldCheck className="text-[#f77f00]" size={30} />

              <h3 className="mt-5 text-xl font-black text-white">
                Sécurité
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Un appareil encrassé peut entraîner une mauvaise combustion,
                des défauts d’allumage ou des problèmes de sécurité.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <Flame className="text-[#f77f00]" size={30} />

              <h3 className="mt-5 text-xl font-black text-white">
                Performance
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Un entretien sérieux permet de conserver un bon rendement et
                une combustion plus propre.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <Wrench className="text-[#f77f00]" size={30} />

              <h3 className="mt-5 text-xl font-black text-white">
                Longévité
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Le nettoyage régulier limite l’usure prématurée des composants
                mécaniques et électroniques.
              </p>
            </div>
          </div>
        </section>

        {/* ENTRETIEN */}
        <section className="mt-24">
          <SectionTitle
            eyebrow="Intervention"
            title="Ce qui est réalisé pendant l’entretien"
            text="Chaque intervention dépend du modèle, de l’état de l’appareil et de son installation."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-white/10 bg-white/[0.04] text-white">
                  <ChevronRight size={18} />
                </div>

                <p className="font-medium text-white/85">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PANNES */}
        <section className="mt-24">
          <SectionTitle
            eyebrow="Pannes fréquentes"
            title="Quelques problèmes rencontrés sur les poêles MCZ"
            text="Certains symptômes doivent être pris rapidement en charge afin d’éviter une aggravation."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4cc9f0]/10 text-[#4cc9f0]">
                  <AlertTriangle size={18} />
                </div>

                <p className="font-medium text-white/85">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] via-white/[0.045] to-[#4cc9f0]/10 p-8 text-center shadow-2xl shadow-black/30 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f77f00]">
            Besoin d’une intervention ?
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
            Entretien ou dépannage de votre poêle MCZ
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Intervention sérieuse, entretien rigoureux et accompagnement adapté
            à votre appareil.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f77f00] px-7 py-4 font-black text-black shadow-lg shadow-[#f77f00]/25 transition hover:scale-105"
            >
              Nous contacter
            </Link>

            <a
              href="https://tout-feu-tout-flamme-2.gazoleen.com/rdv"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-black text-white transition hover:bg-white/15"
            >
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </PageContainer>
    </>
  );
}