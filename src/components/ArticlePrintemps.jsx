export default function ArticlePrintemps() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 text-white">
      
      {/* TITRE */}
      <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
        Pourquoi faire l'entretien de son poêle à granulés au printemps à Saint-Gaudens ?
      </h1>

      {/* INTRO */}
      <p className="text-lg text-gray-300 mb-6">
        Le printemps est de retour en Haute-Garonne ! Les températures s'adoucissent dans le Comminges,
        les jours rallongent et vous venez probablement d'éteindre votre poêle à granulés.
        C'est le moment idéal pour le nettoyer en surface et l'oublier jusqu'à l'automne prochain...
      </p>

      <p className="text-xl text-orange-400 font-semibold mb-10">
        Détrompez-vous.
      </p>

      <p className="text-gray-300 mb-12">
        La meilleure période pour réaliser l'entretien annuel est en réalité juste après la période de chauffe 
        (avril, mai ou juin). Voici pourquoi anticiper cette étape est essentiel pour votre installation à Saint-Gaudens et ses environs.
      </p>

      {/* SECTION 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          1. Protéger votre appareil contre la corrosion estivale
        </h2>
        <p className="text-gray-300">
          Pendant l'hiver, la combustion des pellets génère des cendres et de la suie dans le creuset et le conduit.
          En été, l'humidité ambiante peut provoquer une réaction acide avec ces résidus,
          entraînant corrosion et détérioration du métal.
        </p>
        <p className="text-gray-300 mt-3">
          Un nettoyage complet au printemps permet de laisser votre appareil propre et sec,
          prolongeant ainsi sa durée de vie.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          2. Éviter la cohue de l'automne en Haute-Garonne
        </h2>
        <p className="text-gray-300 mb-4">
          Chaque année, dès les premières baisses de température, les plannings explosent.
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><strong>Flexibilité totale :</strong> choisissez votre créneau</li>
          <li><strong>Zéro stress :</strong> pas d’attente en plein hiver</li>
          <li><strong>Intervention plus qualitative :</strong> plus de temps pour un travail précis</li>
        </ul>
      </section>

      {/* SECTION 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          3. Anticiper les réparations et pièces détachées
        </h2>
        <p className="text-gray-300">
          Bougie d’allumage, extracteur, joints… certaines pièces s’usent naturellement.
          Au printemps, vous avez le temps de commander et remplacer sans urgence.
        </p>
        <p className="text-gray-300 mt-3">
          En hiver, une rupture de stock peut vous laisser sans chauffage plusieurs semaines.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          4. Sécurité et conformité
        </h2>
        <p className="text-gray-300">
          L'entretien annuel et le ramonage sont obligatoires.
          En cas de sinistre, votre assurance exigera une attestation.
        </p>
        <p className="text-gray-300 mt-3">
          En réalisant l’entretien dès maintenant, vous êtes en règle bien avant l’hiver.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">
          5. Intervention sur 100 km autour de Saint-Gaudens
        </h2>
        <p className="text-gray-300">
          Notre équipe intervient rapidement dans toute la région :
          Luchon, Tarbes, Pamiers, Toulouse et alentours.
        </p>
      </section>

      {/* CONSEIL */}
      <div className="bg-[#1b4332]/20 border border-[#1b4332] p-6 rounded-2xl mb-12">
        <p className="text-green-400 font-semibold mb-2">
          💡 Conseil d'expert
        </p>
        <p className="text-gray-300">
          Pensez à vider complètement votre réservoir de granulés.
          L’humidité estivale peut faire gonfler les pellets et bloquer la vis sans fin.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Besoin d’un entretien ou d’un ramonage ?
        </h3>
        <p className="text-gray-300 mb-6">
          N’attendez pas l’hiver. Prenez rendez-vous dès aujourd’hui.
        </p>

        <a
          href="https://souscrire.toutfeutoutflamme31.fr"
          className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg"
        >
          Prendre rendez-vous
        </a>
      </div>

    </article>
  );
}