import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import { seoCities } from "../data/cities";

export default function CityPage() {
  const { citySlug } = useParams();

  const city = seoCities.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <PageContainer className="py-20 text-white">
        <h1 className="text-5xl font-black">
          Ville introuvable
        </h1>
      </PageContainer>
    );
  }

  return (
    <>
      <SEO
        route={`/entretien-poele-granules/${city.slug}`}
        title={`Entretien poêle à granulés ${city.name} | Tout Feu Tout Flamme`}
        description={`Entretien, dépannage et ramonage mécanique de poêles à granulés à ${city.name}.`}
      />

      <PageContainer className="py-16 text-white">

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">

          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
            Intervention locale
          </p>

          <h1 className="mt-5 text-center font-serif text-5xl font-black leading-tight text-white md:text-6xl">
          Entretien poêle à granulés à {city.name}
          </h1>

          <p className="mt-8 max-w-4xl text-center text-xl leading-9 text-white/80">
          Tout Feu Tout Flamme intervient à {city.name} pour l’entretien,
          le dépannage et le ramonage mécanique de poêles à granulés toutes marques.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Entretien annuel
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Nettoyage complet, contrôle de sécurité,
                réglages et vérifications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Ramonage mécanique
              </h2>

              <p className="mt-4 leading-8 text-white/70">
              Conformément à la réglementation en vigueur et au
              <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867286" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#4cc9f0] transition hover:text-[#ffb347]" >
              décret du 20 juillet 2023
             </a>.
             </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Dépannage
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Diagnostic et dépannage de poêles à granulés.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">

            <Link
              to="/tarifs"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#f77f00] to-[#ffb347] px-6 py-4 font-bold text-black transition hover:scale-[1.03]"
            >
              Voir les tarifs
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-white transition hover:border-[#f77f00]/40 hover:bg-[#f77f00]/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </PageContainer>
    </>
  );
}