import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import PageContainer from "../components/PageContainer";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SEO
        route="/politique-confidentialite"
        title="Politique de confidentialité | Tout Feu Tout Flamme"
        description="Politique de confidentialité et gestion des données personnelles du site Tout Feu Tout Flamme."
      />

      <PageContainer className="py-16 text-white">
        <SectionTitle
          kicker="Données personnelles"
          title="Politique de confidentialité"
          text="Transparence sur la collecte, l’utilisation et la protection des données personnelles."
        />

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="space-y-10 text-white/80">
            <section>
              <h2 className="text-2xl font-black text-white">Responsable du traitement</h2>
              <p className="mt-4 leading-8">
                Les données personnelles collectées sur ce site sont traitées par
                Tout Feu Tout Flamme — Benjamin Plessis EI, situé à Saint-Gaudens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Données collectées</h2>
              <p className="mt-4 leading-8">
                Les données collectées peuvent inclure : nom, prénom, adresse email,
                numéro de téléphone, adresse d’intervention, informations liées à la
                demande de contact, à une prestation ou à une souscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Finalités</h2>
              <p className="mt-4 leading-8">
                Ces données sont utilisées pour répondre aux demandes, établir un devis,
                gérer une prestation, assurer le suivi client, envoyer des informations
                liées aux contrats ou améliorer l’expérience utilisateur du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Services tiers</h2>
              <p className="mt-4 leading-8">
                Le site peut utiliser des services tiers tels que Stripe pour le paiement,
                Meta Pixel pour la mesure publicitaire, ou des outils techniques nécessaires
                au bon fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Cookies</h2>
              <p className="mt-4 leading-8">
                Certains cookies peuvent être utilisés pour le fonctionnement du site,
                la mesure d’audience ou le suivi publicitaire, uniquement selon les choix
                exprimés par l’utilisateur via le bandeau de consentement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Durée de conservation</h2>
              <p className="mt-4 leading-8">
                Les données sont conservées uniquement pendant la durée nécessaire à la
                gestion de la relation commerciale, aux obligations légales ou au suivi
                administratif des prestations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white">Droits des utilisateurs</h2>
              <p className="mt-4 leading-8">
                Conformément au RGPD, vous pouvez demander l’accès, la rectification,
                l’opposition, la limitation ou la suppression de vos données personnelles
                en écrivant à : <a href="mailto:benjamin.plessis@toutfeutoutflamme.eu" className="font-semibold text-[#4cc9f0] underline underline-offset-4 transition hover:text-[#f77f00]">  benjamin.plessis@toutfeutoutflamme.eu</a>
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </>
  );
}