import { useState, useEffect } from "react";
function LogoCard({ src, alt }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
      <img
        src={src}
        alt={alt}
        className="max-h-14 max-w-full object-contain"
      />
    </div>
  );
}
export default function StationTechniqueSection() {
  const badges = [
    "Station technique",
    "Pièces & diagnostic",
    "Dépannage spécialisé",
  ];

  const [activeBadge, setActiveBadge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % badges.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <section className="relative z-10 mx-auto mt-20 max-w-7xl px-5">
      <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f77f00]">
            Station technique agréée
          </p>

          <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-white md:text-5xl drop-shadow-[0_0_25px_rgba(247,127,0,0.25)]">
            Référent Jolly Mec, Solzaima, Inovalp & Palazzetti. Technicien SPS
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Tout Feu Tout Flamme assure l’entretien, le dépannage et le suivi technique
            des appareils des marques Jolly Mec, Solzaima, Inovalp et Palazzetti sur Saint-Gaudens
            et dans tout le secteur. Spécialiste et expert agréé, nous réalisons le suivi
            constructeur ainsi que la mise en service sur leurs appareils. Affilié au groupe SPS, 
            nous réalisons les mises en service ainsi que le suivi des poêles à granulés des GSB
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            {badges.map((badge, index) => (
              <span
                key={badge}
                className={`rounded-full px-4 py-2 backdrop-blur transition-all duration-700 ${
                  activeBadge === index
                    ? "border border-[#f77f00]/40 bg-[#f77f00]/15 text-[#ffb347] shadow-[0_0_20px_rgba(247,127,0,0.18)]"
                    : "border border-white/15 bg-white/[0.08] text-white/85"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          <LogoCard src="/logo/jollymec.webp" alt="Jolly Mec" />
          <LogoCard src="/logo/sps.webp" alt="solution poele service" />
          <LogoCard src="/logo/inovalp.webp" alt="Inovalp" />
          <LogoCard src="/logo/solzaima.webp" alt="Solzaima" />
          <LogoCard src="/logo/palazzetti.webp" alt="Palazzetti" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-white/55">
            Diagnostic • Entretien • Dépannage • Réglages • Suivi constructeur
          </p>
        </div>
      </div>
    </section>
  );
}