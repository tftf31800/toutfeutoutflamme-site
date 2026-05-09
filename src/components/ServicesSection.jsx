import {
  ChevronRight,
  Wrench,
  Flame,
  ShieldCheck,
} from "lucide-react";
const seoCities = [
  { name: "Saint-Gaudens", slug: "saint-gaudens" },
  { name: "Muret", slug: "muret" },
  { name: "Carbonne", slug: "carbonne" },
  { name: "Cazères", slug: "cazeres" },
];
import { RDV_URL, SUBSCRIBE_URL } from "../lib/seo";
const services = [
  {
    title: "Entretien annuel",
    text: "Nettoyage complet du poêle et vérifications de sécurité.",
    icon: Wrench,
  },
  {
    title: "Ramonage mécanique",
    text: "Ramonage avec certificat conforme.",
    icon: Flame,
  },
  {
    title: "Dépannage",
    text: "Intervention rapide sur poêles à granulés toutes marques.",
    icon: ShieldCheck,
  },
];
function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 font-serif text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-lg leading-8 text-white/65">
          {text}
        </p>
      )}
    </div>
  );
}
export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionTitle
        center
        kicker="Nos services"
        title="Entretien, dépannage et ramonage"
        text="Un service professionnel pour sécuriser votre installation, optimiser le rendement de votre poêle à granulés et anticiper les pannes pendant l’hiver."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#4cc9f0]/40">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a86ff]/15 text-[#4cc9f0]">
              <service.icon size={30} />
            </div>
            <h3 className="font-serif text-2xl font-black text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/65">{service.text}</p>
            <p className="mt-4 text-sm font-semibold text-[#4cc9f0]">{service.seoTitle}</p>
            <a href={RDV_URL} className="mt-7 inline-flex items-center gap-2 font-bold text-[#f77f00]">
              Prendre rendez-vous <ChevronRight size={17} />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
  {seoCities.slice(0, 3).map(city => (
    <span key={city.slug} className="text-xs text-white/40">
      {city.name}
    </span>
  ))}
</div>
    </section>
  );
}