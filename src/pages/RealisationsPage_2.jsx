// src/pages/RealisationsPage.jsx

import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";
import BackButton from "../components/BackHomeButton";

const realisations = [
  {
    before: "/realisations/realisation-avant-1.webp",
    after: "/realisations/realisation-apres-1.webp",
    title: "Entretien complet poêle à granulés",
    city: "Saint-Gaudens",
  },


  {
    before: "/realisations/avant-2.webp",
    after: "/realisations/apres-2.webp",
    title: "Nettoyage échangeur & chambre",
    city: "Carbonne",
  },

  {
    before: "/realisations/avant-3.webp",
    after: "/realisations/apres-3.webp",
    title: "Ramonage mécanique",
    city: "Luchon",
  },

  {
    before: "/realisations/avant-4.webp",
    after: "/realisations/apres-4.webp",
    title: "Remise en état complète",
    city: "Saint-Girons",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <BackButton />

      <SEO
        route="/realisations"
        title="Nos réalisations | Avant / Après poêle à granulés"
        description="Découvrez nos réalisations avant / après : entretien, ramonage et nettoyage de poêles à granulés autour de Saint-Gaudens."
      />

      <PageContainer className="text-white">
        <SectionTitle
          eyebrow="Travail artisanal"
          title="Nos réalisations"
          text="Des interventions réelles, réalisées sur le terrain avec soin et exigence."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {realisations.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              {/* HEADER */}
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f77f00]">
                  {item.city}
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                  {item.title}
                </h2>
              </div>

              {/* AVANT / APRES */}
              <div className="grid grid-cols-2 gap-[1px] bg-white/10">
                {/* AVANT */}
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={item.before}
                    alt={`Avant - ${item.title}`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded-full border border-red-500/30 bg-black/70 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-red-400 backdrop-blur-xl">
                    Avant
                  </div>
                </div>

                {/* APRES */}
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={item.after}
                    alt={`Après - ${item.title}`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded-full border border-emerald-500/30 bg-black/70 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-xl">
                    Après
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </>
  );
}