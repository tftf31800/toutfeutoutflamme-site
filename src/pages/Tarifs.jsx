import { CheckCircle2, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";

const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme.eu";

const defaultKeywords = [
  "entretien poêle à granulés Saint-Gaudens",
  "ramonage poêle à granulés",
  "dépannage poêle à granulés",
];

const offers = [
  {
    name: "Essentiel",
    badge: "Entretien annuel",
    price: "139€",
    monthly: "13,90€/mois",
    color: "from-[#4cc9f0] to-[#3a86ff]",
    featured: false,
    features: [
      "Entretien annuel complet",
      "Ramonage mécanique",
      "Certificat de ramonage",
      "Contrôles de sécurité",
    ],
  },
  {
    name: "Confort",
    badge: "Le plus choisi",
    price: "189€",
    monthly: "18,90€/mois",
    color: "from-[#3a86ff] to-[#f77f00]",
    featured: true,
    features: [
      "Tout le pack Essentiel",
      "1 dépannage inclus par an",
      "Déplacement inclus",
      "1h de main-d’œuvre incluse",
      "Rendez-vous prioritaire",
    ],
  },
  {
    name: "Sérénité",
    badge: "Tranquillité premium",
    price: "249€",
    monthly: "24,90€/mois",
    color: "from-[#f77f00] to-[#ffb347]",
    featured: false,
    features: [
      "Tout le pack Confort",
      "Intervention illimitée selon contrat",
      "Main-d’œuvre incluse",
      "Déplacement en sus",
      "Dépannage prioritaire 24/48h",
      "-15% sur les pièces détachées",
    ],
  },
];

const tariffRows = [
  ["Entretien annuel", "Nettoyage complet, contrôle et réglages de base", "139€"],
  ["Plus-value période hivernale", "Période de novembre à février", "+30 € TTC"],
  ["Ramonage intermédiaire mi-saison", "Si entretien annuel effectué par notre société", "79 € TTC"],
  ["Main d’œuvre dépannage", "Forfait 1h puis facturation à la demi-heure commencée", "49 € / heure TTC"],
  ["Déplacement dépannage zone 1", "0 à 30 km", "30 € TTC"],
  ["Déplacement dépannage zone 2", "30 à 60 km", "60 € TTC"],
  ["Déplacement dépannage zone 3", "60 à 90 km", "80 € TTC"],
  ["Au-delà de 90 km", "Sur demande", "Nous consulter"],
  
  ["Pièces détachées", "Selon diagnostic et disponibilité", "En sus"],
  ["Ramonage conduit tubé (insert ou poêle à bois)", "Ramonage mécanique rotatif, avec certificat", "79€"],
];

const faqItems = [
  {
    q: "Quand faire l’entretien d’un poêle à granulés ?",
    a: "L’entretien annuel est idéalement réalisé au printemps ou en été, après la saison de chauffe.",
  },
  {
    q: "Le ramonage mécanique est-il obligatoire ?",
    a: "Oui. Le ramonage mécanique du conduit est obligatoire et doit être réalisé selon la réglementation en vigueur.",
  },
  {
    q: "Intervenez-vous autour de Saint-Gaudens ?",
    a: "Oui, Tout Feu Tout Flamme intervient dans le Comminges et jusqu’à environ 100 km autour de Saint-Gaudens.",
  },
  {
    q: "Le contrat inclut-il le dépannage ?",
    a: "Les formules Confort et Sérénité incluent une intervention dépannage selon les conditions du contrat.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <SEO
        route="/tarifs"
        title="Tarifs entretien poêle à granulés Saint-Gaudens | Contrats 139€ 189€ 249€"
        description="Tarifs 2026 pour entretien, ramonage, dépannage et contrats de poêles à granulés à Saint-Gaudens 31800, Comminges et 100 km autour."
        keywords={[
          ...defaultKeywords,
          "tarif entretien poêle à granulés",
          "contrat entretien poêle granulés",
          "prix ramonage poêle granulés",
        ]}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        })}
      </script>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          kicker="Tarifs & prestations"
          title="Contrats d’entretien poêle à granulés"
          text="Des packs clairs, pensés pour l’entretien, le ramonage, la sécurité et la tranquillité tout au long de l’hiver."
        />

        <div className="mx-auto mb-14 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
            Entretien • Ramonage • Dépannage
          </p>

          <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
            Tarifs entretien poêle à granulés à Saint-Gaudens
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Tout Feu Tout Flamme intervient à Saint-Gaudens, dans le Comminges
            et jusqu’à 100 km autour pour l’entretien, le ramonage mécanique,
            le dépannage et les contrats annuels de poêles à granulés.
          </p>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Nos formules sont pensées pour offrir un entretien professionnel,
            transparent et durable, dans le respect des règles de l’art
            et des préconisations fabricants.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "✔ Ramonage mécanique",
              "✔ Contrôle sécurité",
              "✔ Contrats annuels",
              "✔ Dépannage prioritaire",
              "✔ Intervention Haute-Garonne",
            ].map((item) => (
              <span
                key={item}
                className="premium-badge rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-4 py-2 text-sm font-semibold text-[#ffb347] backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.name} offer={offer} />
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b132b] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition hover:scale-[1.02]">
          <div className="border-b border-white/10 p-6">
            <h3 className="font-serif text-3xl font-black text-white">
              Tarifs prestations poêles à granulés 2026
            </h3>
            <p className="mt-2 text-white/60">Tarifs TTC, hors pièces éventuelles.</p>
          </div>

          <div className="divide-y divide-white/10">
            {tariffRows.map(([name, detail, price]) => (
              <div
                key={name}
                className="grid gap-3 p-5 md:grid-cols-[1fr_1.4fr_0.6fr] md:items-center"
              >
                <p className="font-bold text-white">{name}</p>
                <p className="text-white/60">{detail}</p>
                <p className="font-black text-[#4cc9f0] md:text-right">{price}</p>
              </div>
            ))}
          </div>
        </div>
        

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
            Questions fréquentes
          </p>

          <h2 className="mt-4 font-serif text-4xl font-black text-white">
            FAQ entretien poêle à granulés
          </h2>

          <div className="mt-10 space-y-8">
            {faqItems.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-xl font-black text-white">{faq.q}</h3>
                <p className="mt-3 text-lg leading-8 text-white/75">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function OfferCard({ offer }) {
  return (
    <article
      className={`relative rounded-[2rem] border p-7 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition hover:scale-[1.02] ${
        offer.featured
          ? "border-[#3a86ff]/70 bg-[#0b132b] ring-2 ring-[#3a86ff] shadow-[0_0_45px_rgba(58,134,255,0.35)] lg:-mt-4"
          : "border-white/10 bg-[#0b132b]"
      }`}
    >
      {offer.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-4 py-1 text-xs font-black uppercase tracking-widest text-white ring-2 ring-[#f77f00] shadow-[0_0_40px_rgba(247,127,0,0.25)]">
          Le plus choisi
        </div>
      )}

      <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${offer.color}`} />

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">
        {offer.badge}
      </p>

      <h3 className="mt-2 font-serif text-4xl font-black text-white">{offer.name}</h3>

      <p className="mt-6 text-5xl font-black text-white">{offer.price}</p>
      <p className="mt-1 font-semibold text-[#4cc9f0]">{offer.monthly}</p>

      <ul className="mt-7 space-y-3 text-sm font-medium text-white/70">
        {offer.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#4cc9f0]" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={SUBSCRIBE_URL}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] to-[#1c2541] px-4 py-4 font-bold text-white hover:from-[#4cc9f0] hover:to-[#3a86ff]"
      >
        Souscrire <ChevronRight size={17} />
      </a>
    </article>
  );
}
