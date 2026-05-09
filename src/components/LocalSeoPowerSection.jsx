import { seoFaqs } from "../data/seoFaqs";
import FAQSection from "./FAQSection";
import { seoBrands } from "../data/seoBrands";
export default function LocalSeoPowerSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f77f00]">
          Expertise locale
        </p>

        <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
          Entretien, ramonage et dépannage de poêles à granulés en Haute-Garonne
        </h2>

        <p className="mt-6 max-w-5xl text-lg leading-9 text-white/75">
          Tout Feu Tout Flamme intervient autour de Saint-Gaudens, dans le Comminges, en Haute-Garonne et jusqu’aux secteurs de Muret, Carbonne, Cazères, Montréjeau, Lannemezan et Saint-Girons. Chaque intervention vise à sécuriser l’installation, optimiser la combustion et limiter les pannes en pleine saison de chauffe.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold text-[#4cc9f0]">Signaux terrain</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>✓ Humidité et point de rosée</li>
              <li>✓ Conduits longs ou refroidis</li>
              <li>✓ Encrassement rapide en hiver</li>
              <li>✓ Défauts dépression et allumage</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold text-[#4cc9f0]">Services recherchés</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>✓ Entretien annuel complet</li>
              <li>✓ Ramonage mécanique certifié</li>
              <li>✓ Dépannage poêle à granulés</li>
              <li>✓ Contrats d’entretien</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold text-[#4cc9f0]">Marques suivies</h3>
            <p className="mt-5 leading-8 text-white/70">
              {seoBrands.join(", ")} et autres poêles à granulés toutes marques selon les prescriptions fabricant et les règles de l’art.
            </p>
          </div>
        </div>

        <FAQSection faqs={seoFaqs} title="Questions fréquentes sur l’entretien poêle à granulés" />
      </div>
    </section>
  );
}
