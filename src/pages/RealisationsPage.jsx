import { useState } from "react";
import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";
import BackButton from "../components/BackHomeButton";

const photos = [
  "/realisations/entretien-poele-granules-avant-apres-haute-garonne-premium.webp",
  "/realisations/entretien-poele-granules-avant-apres-muret.webp",
  "/realisations/entretien-poele-granules-avant-apres-saint-gaudens-cheminee.webp",
  "/realisations/entretien-poele-granules-design-luchon.webp",
  "/realisations/entretien-poele-granules-performance-cazeres.webp",
  "/realisations/nettoyage-poele-granules-avant-apres-montrejeau.webp",
];

export default function RealisationsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <BackButton />

      <SEO
        route="/realisations"
        title="Nos réalisations | Tout Feu Tout Flamme"
        description="Découvrez quelques réalisations Tout Feu Tout Flamme : entretien, ramonage et nettoyage de poêles à granulés autour de Saint-Gaudens."
      />

      <PageContainer className="text-white">
        <SectionTitle
          eyebrow="Avant / Après"
          title="Nos réalisations"
          text="Un aperçu concret du travail réalisé sur le terrain, en entretien, ramonage et nettoyage de poêles à granulés."
        />

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
         <div className="relative overflow-hidden rounded-[1.5rem]">
            <div className=" flex w-max animate-realisations-scroll gap-4 hover:[animation-play-state:paused] active:cursor-grabbing cursor-grab select-none">
              {[...photos, ...photos].map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setSelectedPhoto(src)}
                  className="h-[260px] w-[320px] shrink-0 cursor-zoom-in overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/40 md:h-[360px] md:w-[460px]"
                >
                  <img
                    src={src}
                    alt="Réalisation poêle à granulés Tout Feu Tout Flamme"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </PageContainer>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            Fermer
          </button>

          <img
            src={selectedPhoto}
            alt="Vue complète réalisation"
            className="max-h-[90vh] max-w-[95vw] rounded-[1.5rem] object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}