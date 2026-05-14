import { Link } from "react-router-dom";
import { Handshake, Flame, ShieldCheck, Wrench, MapPin, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";
import BackButton from "../components/BackHomeButton";
import { brands } from "../data/brands";

const partners = [
  {
    icon: Flame,
    title: "Marques de poêles à granulés",
    text: "Interventions sur de nombreuses marques, dans le respect des recommandations fabricants.",
  },
  {
    icon: Wrench,
    title: "Pièces détachées & maintenance",
    text: "Recherche de solutions fiables pour l’entretien, le dépannage et le suivi technique.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & conformité",
    text: "Travail réalisé selon les règles de l’art, avec une attention particulière portée à la sécurité.",
  },
  {
    icon: MapPin,
    title: "Réseau local",
    text: "Collaboration avec des acteurs locaux sérieux autour de Saint-Gaudens et du Comminges.",
  },
];

export default function Partenariats() {
  return (
    <>
      <BackButton />

      <SEO
        route="/partenariats"
        title="Partenaires & marques suivies | Tout Feu Tout Flamme"
        description="Découvrez les marques de poêles à granulés suivies et les partenaires de Tout Feu Tout Flamme pour l’entretien, le dépannage et le suivi technique."
        keywords={[
          "partenaires poêle à granulés",
          "marques poêle à granulés",
          "entretien MCZ",
          "entretien Palazzetti",
          "dépannage poêle à granulés",
          "Tout Feu Tout Flamme",
          "Saint-Gaudens",
          "Comminges",
        ]}
      />

      <PageContainer className="text-white">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-16 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-12 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4cc9f0]/10 via-transparent to-[#4cc9f0]/10" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4cc9f0]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4cc9f0]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4cc9f0]/30 bg-[#4cc9f0]/10 text-[#4cc9f0]">
              <Handshake size={32} />
            </div>

            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
              Réseau & confiance
            </p>

            <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
              Nos partenaires & marques suivies </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Chez <strong>Tout Feu Tout Flamme</strong>, nous privilégions des
              partenaires sérieux, des marques reconnues et des solutions fiables
              pour garantir un entretien rigoureux, durable et conforme aux règles
              de l’art.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            eyebrow="Marques suivies"
            title="Des interventions sur de nombreuses marques"
            text="Nous accompagnons les particuliers pour l’entretien, le ramonage et le dépannage de poêles à granulés de différentes gammes."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-center shadow-xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#4cc9f0]/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-16 items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 max-w-[140px] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
                  />
                </div>

                <p className="mt-4 text-lg font-black tracking-wide text-white">
                  {brand.name}
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4cc9f0]/80">
                  {brand.subtitle}
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Entretien & suivi technique
                </p>
              </a>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-white/55">
            Liste non exhaustive. Chaque intervention dépend du modèle, de l’état
            de l’appareil, de l’accessibilité et des prescriptions du fabricant.
          </p>
        </section>

        <section className="mt-24">
          <SectionTitle
            eyebrow="Notre réseau"
            title="Des partenaires utiles au bon suivi de votre appareil"
            text="L’objectif : assurer un service sérieux, cohérent et durable pour votre poêle à granulés."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partners.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-center shadow-xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#4cc9f0]/40 hover:bg-white/[0.07]"
              >
                <div className="mx-auto flex h-16 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4cc9f0]/25 bg-[#4cc9f0]/10 text-[#4cc9f0] transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-black tracking-wide text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 overflow-hidden rounded-[2rem] border border-[#4cc9f0]/25 bg-gradient-to-br from-[#4cc9f0]/15 via-white/[0.045] to-[#4cc9f0]/10 p-8 text-center shadow-2xl shadow-black/30 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
            Besoin d’un professionnel ?
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
            Entretien, ramonage ou dépannage de votre poêle à granulés
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Faites appel à un artisan local pour un accompagnement sérieux,
            transparent et adapté à votre appareil.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4cc9f0] px-7 py-4 font-black text-black shadow-lg shadow-[#4cc9f0]/25 transition hover:scale-105"
            >
              Nous contacter <ArrowRight size={18} />
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