import { seoCities } from "../data/cities";

export default function CityLinksSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
          Zones d’intervention
        </p>

        <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
          Pages locales poêle à granulés
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoCities.map((city) => (
            <a
              key={city.slug}
              href={`/ville/${city.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 font-bold text-white transition hover:border-[#f77f00]/60 hover:bg-white/[0.1]"
            >
              Entretien poêle à granulés {city.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}