import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";

export default function MentionsLegalesPage() {
  return (
    <>
      <SEO
        route="/mentions-legales"
        title="Mentions légales | Tout Feu Tout Flamme"
        description="Mentions légales du site Tout Feu Tout Flamme."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 text-white">
        <SectionTitle
          kicker="Informations légales"
          title="Mentions légales"
          text="Informations relatives à l’éditeur du site, à l’hébergement et aux responsabilités."
        />

        <div className="bg-transparent text-black">

      {/* HERO */}


      {/* CONTENU */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* ÉDITEUR */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Éditeur du site</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>Tout Feu Tout Flamme</strong><br />
            Benjamin Plessis – Entrepreneur individuel<br />
            2045 rue de la vieille serre<br />
            31800 Saint-Gaudens<br /><br />

            Téléphone : 07 61 64 77 65<br />
            Email : benjamin.plessis@toutfeutoutflamme.eu<br />
            SIREN : 752 185 934
          </p>
        </div>

        {/* PUBLICATION */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Direction de la publication</h2>
          <p className="text-gray-300">
            Responsable : Benjamin Plessis<br />
            Email : tftf31800@gmail.com
          </p>
        </div>

        {/* HÉBERGEMENT */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Hébergement</h2>
          <p className="text-gray-300">
            IONOS<br />
            7 place de la Gare – BP 70109<br />
            57200 Sarreguemines – France<br />
            Téléphone : 09 70 808 911<br />
            https://www.ionos.fr
          </p>
        </div>

        {/* CONDITIONS */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Conditions d’utilisation</h2>
          <p className="text-gray-300 leading-relaxed">
            L’accès au site implique l’acceptation des présentes conditions.
            Celles-ci peuvent être modifiées à tout moment.
            <br /><br />
            Le site est accessible en continu, sauf interruption pour maintenance.
          </p>
        </div>

        {/* PROPRIÉTÉ */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Propriété intellectuelle</h2>
          <p className="text-gray-300 leading-relaxed">
            L’ensemble des contenus (textes, images, logos) est protégé.
            Toute reproduction est interdite sans autorisation.
          </p>
        </div>

        {/* DONNÉES */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Données personnelles</h2>
          <p className="text-gray-300 leading-relaxed">
            Les données collectées sont utilisées uniquement dans le cadre de la relation client.
            Elles ne sont jamais revendues ni cédées à des tiers.
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ Gestion des demandes clients</li>
            <li>✔ Suivi des prestations</li>
            <li>✔ Communication (email / téléphone)</li>
            <li>✔ Amélioration du service</li>
          </ul>
        </div>

        {/* DROITS */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Droits de l’utilisateur</h2>
          <p className="text-gray-300">
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
            <br /><br />
            Contact : benjamin.plessis@toutfeutoutflamme.eu
          </p>
        </div>

        {/* COOKIES */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Cookies</h2>
          <p className="text-gray-300">
            Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur.
          </p>
        </div>

        {/* JURIDICTION */}
        <div className="bg-transparent p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Droit applicable</h2>
          <p className="text-gray-300">
            Droit français – Tribunal compétent : Toulouse
          </p>
        </div>

      </section>
    </div>
      </section>
    </>
  );
}