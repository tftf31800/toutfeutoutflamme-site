import { seoCities } from "../data/cities";
import { Link } from "react-router-dom";

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
           <Link key={city.slug} to={`/entretien-poele-granules/${city.slug}`}
             className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:border-[#f77f00]/40 hover:bg-[#f77f00]/10" >
             <p className="text-sm font-semibold text-white/70">
              Entretien poêle à granulés
             </p>

    <p className="mt-2 text-lg font-black text-white transition group-hover:text-[#ffb347]">
      {city.name}
    </p>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}