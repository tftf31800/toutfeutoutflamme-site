export default function Vision() {
  return (
    <div className="premium-blog-box">
      <p className="premium-blog-eyebrow">Notre vision</p>

      <h2>
        Un bon poêle,
        <span> c’est surtout un poêle adapté à votre besoin.</span>
      </h2>

      <p>
        Chez <strong>Tout Feu Tout Flamme</strong>, nous accompagnons aussi bien les clients possédant un poêle à granulés d’entrée de gamme que ceux équipés d’appareils premium plus haut de gamme.
      </p>

      <p>
        Chaque installation mérite le même niveau d’exigence, de soin et de fiabilité, quel que soit le modèle ou le budget d’origine. Notre objectif est de garantir un fonctionnement optimal, durable et sécurisé de votre appareil grâce à un entretien sérieux, des réglages adaptés et un dépannage efficace.


      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">
        <span className="premium-badge rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-4 py-2 text-[#ffb347] backdrop-blur">
          ✔ Entretien toutes marques
        </span>

        <span className="premium-badge rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-4 py-2 text-[#ffb347] backdrop-blur">
          ✔ Dépannage & diagnostic
        </span>

        <span className="premium-badge rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-4 py-2 text-[#ffb347] backdrop-blur">
          ✔ Conseil personnalisé
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <p className="text-white/80">
          Besoin d’en savoir plus sur nos prestations et nos tarifs ?
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/tarifs"
            className="rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-6 py-3 font-semibold text-[#ffb347] transition hover:bg-[#f77f00]/20"
          >
            Voir les tarifs
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contacter Tout Feu Tout Flamme
          </a>
        </div>
      </div>
    </div>
  );
}
