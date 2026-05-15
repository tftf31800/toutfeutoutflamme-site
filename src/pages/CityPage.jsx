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
        <h1 className="text-5xl font-black">Ville introuvable</h1>
      </PageContainer>
    );
  }

  const intros = {
    comminges: `Tout Feu Tout Flamme intervient à ${city.name} pour l’entretien, le dépannage et le ramonage mécanique de poêles à granulés avec une approche soignée adaptée aux appareils du Comminges.`,

    toulouse: `Entretien et dépannage de poêles à granulés à ${city.name} pour particuliers recherchant un suivi sérieux, des interventions propres et un fonctionnement optimal de leur appareil.`,

    montagne: `Intervention sur poêles à granulés à ${city.name} avec une attention particulière portée aux appareils fortement sollicités durant la période hivernale.`,

    gers: `Tout Feu Tout Flamme accompagne les utilisateurs de poêles à granulés à ${city.name} pour l’entretien annuel, le ramonage mécanique et le dépannage toutes marques.`,

    ariege: `Entretien, ramonage mécanique et dépannage de poêles à granulés à ${city.name} avec intervention locale soignée et adaptée aux besoins des particuliers.`,
  };

  const cityIntro =
    intros[city.zone] ||
    `Entretien et dépannage de poêles à granulés à ${city.name}.`;

  const nearbyCities = city.nearby
    ? city.nearby
        .map((slug) => seoCities.find((c) => c.slug === slug))
        .filter(Boolean)
    : seoCities.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <>
      <SEO
        route={`/entretien-poele-granules/${city.slug}`}
        title={`Entretien poêle à granulés ${city.name} | Tout Feu Tout Flamme`}
        description={`Entretien, dépannage et ramonage mécanique de poêles à granulés à ${city.name}. Intervention locale soignée par Tout Feu Tout Flamme.`}
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
            {cityIntro}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Entretien annuel
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Nettoyage complet, contrôle de sécurité, réglages et vérifications
                selon l’état réel de l’appareil.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Ramonage mécanique
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Ramonage mécanique avec certificat, conformément à la réglementation
                en vigueur et au{" "}
                <a
                  href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4cc9f0] transition hover:text-[#ffb347]"
                >
                  décret du 20 juillet 2023
                </a>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-2xl font-black leading-tight text-white">
                Dépannage
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                Diagnostic, recherche de défaut et dépannage de poêles à granulés.
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

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-10">
          <h2 className="font-serif text-4xl font-black text-white">
            Intervention à {city.name} et aux alentours
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-white/75">
            À {city.name}, l’entretien régulier d’un poêle à granulés permet de
            préserver le rendement, de limiter l’encrassement et de sécuriser le
            fonctionnement de l’appareil. Chaque intervention est réalisée avec une
            approche soignée, adaptée aux prescriptions fabricant et aux règles de l’art.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              to="/zones-intervention"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-white transition hover:border-[#4cc9f0]/40 hover:bg-[#4cc9f0]/10"
            >
              Zones d’intervention
            </Link>

            <Link
              to="/tarifs"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-white transition hover:border-[#f77f00]/40 hover:bg-[#f77f00]/10"
            >
              Tarifs entretien
            </Link>

            <Link
              to="/blog"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-white transition hover:border-[#4cc9f0]/40 hover:bg-[#4cc9f0]/10"
            >
              Conseils poêle à granulés
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
          <h2 className="font-serif text-4xl font-black text-white">
            Villes proches de {city.name}
          </h2>

          <p className="mt-4 leading-8 text-white/70">
            Tout Feu Tout Flamme intervient également dans les communes voisines :
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {nearbyCities.map((nearby) => (
              <Link
                key={nearby.slug}
                to={`/entretien-poele-granules/${nearby.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/80 transition hover:border-[#f77f00]/40 hover:bg-[#f77f00]/10 hover:text-white"
              >
                {nearby.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/20 p-10">
          <h2 className="font-serif text-4xl font-black text-white">
            Questions fréquentes à {city.name}
          </h2>

          <div className="mt-8 grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black text-white">
                Intervenez-vous à {city.name} ?
              </h3>
              <p className="mt-3 leading-8 text-white/70">
                Oui, Tout Feu Tout Flamme intervient à {city.name} pour l’entretien,
                le ramonage mécanique et le dépannage de poêles à granulés.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black text-white">
                Le ramonage est-il compris avec l’entretien ?
              </h3>
              <p className="mt-3 leading-8 text-white/70">
                L'entretien annuel comprend toujours le ramonage par action mécanique,
                avec remise d’un certificat.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-black text-white">
                Travaillez-vous sur toutes les marques ?
              </h3>
              <p className="mt-3 leading-8 text-white/70">
                Oui, j’interviens sur de nombreuses marques de poêles à granulés,
                selon l’accessibilité technique, l’état de l’appareil et la disponibilité
                des pièces.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}