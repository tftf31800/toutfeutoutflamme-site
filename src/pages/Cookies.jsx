import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import PageContainer from "../components/PageContainer";

export default function CookiesPage() {
  return (
    <>
      <SEO
        route="/cookies"
        title="Politique de cookies | Tout Feu Tout Flamme"
        description="Informations relatives aux cookies utilisés sur le site Tout Feu Tout Flamme."
      />

      <PageContainer className="py-16 text-white">
        <SectionTitle
          kicker="Cookies & consentement"
          title="Politique de cookies"
          text="Informations relatives aux cookies utilisés sur le site et à la gestion du consentement."
        />

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="space-y-10 text-white/80">

            <section>
              <h2 className="text-2xl font-black text-white">
                Qu’est-ce qu’un cookie ?
              </h2>

              <p className="mt-4 leading-8">
                Un cookie est un petit fichier enregistré sur votre appareil
                lors de la navigation sur un site internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">
                Cookies utilisés
              </h2>

              <p className="mt-4 leading-8">
                Le site peut utiliser des cookies nécessaires au fonctionnement,
                à la mesure d’audience ou au suivi publicitaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">
                Meta Pixel
              </h2>

              <p className="mt-4 leading-8">
                Avec votre consentement, le site peut utiliser Meta Pixel afin
                de mesurer les performances publicitaires et améliorer les campagnes
                de communication sur Facebook et Instagram.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">
                Gestion du consentement
              </h2>

              <p className="mt-4 leading-8">
                Lors de votre première visite, un bandeau vous permet d’accepter,
                refuser ou personnaliser les cookies utilisés sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">
                Modification des préférences
              </h2>

              <p className="mt-4 leading-8">
                Vous pouvez modifier vos préférences à tout moment via les paramètres
                de votre navigateur ou les outils de gestion du consentement proposés
                sur le site.
              </p>
            </section>

          </div>
        </div>
      </PageContainer>
    </>
  );
}