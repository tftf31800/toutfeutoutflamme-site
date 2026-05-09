import { ChevronRight, Mail, Phone } from "lucide-react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ButtonLink from "../components/ButtonLink";

const PHONE = "06 16 78 30 56";
const EMAIL = "contact@toutfeutoutflamme.eu";

export default function ContactPage() {
  return (
    <>
      <SEO
        route="/contact"
        title="Contact entretien poêle à granulés Saint-Gaudens | Tout Feu Tout Flamme"
        description="Contactez Tout Feu Tout Flamme pour l’entretien, le dépannage et le ramonage de votre poêle à granulés à Saint-Gaudens et alentours."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          kicker="Contact & intervention"
          title="Contactez Tout Feu Tout Flamme"
          text="Entretien, dépannage, ramonage mécanique et contrats de poêles à granulés dans le Comminges et jusqu’à 100 km autour de Saint-Gaudens."
        />

        <div
          id="contact"
          className="mt-10 rounded-[2rem] border border-white/10 bg-transparent p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
                Votre poêle fonctionne. Votre maison est chaude. Point.
              </h2>

              <p className="mt-5 text-white/75">
                On s’occupe du reste : entretien, ramonage, dépannage et
                contrats annuels à Saint-Gaudens et 100 km autour.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}>
                  <Phone size={18} /> Appeler
                </ButtonLink>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white hover:bg-white/10"
                >
                  <Mail size={18} /> Envoyer un mail <ChevronRight size={18} />
                </a>
              </div>
            </div>

            <address className="not-italic rounded-3xl border border-white/10 bg-transparent p-6 text-white/80">
              <p className="font-bold text-white">Tout Feu Tout Flamme</p>
              <p className="mt-3">M. Benjamin Plessis, EI</p>
              <p>2045 rue de la vieille serre</p>
              <p>31800 Saint-Gaudens</p>
              <p className="mt-3">SIREN : 752 185 934</p>
              <p className="mt-3">Tél : {PHONE}</p>
              <p>{EMAIL}</p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
