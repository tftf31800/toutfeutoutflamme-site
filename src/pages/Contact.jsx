import { useState } from "react";
import { ChevronRight, Mail, Phone } from "lucide-react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ButtonLink from "../components/ButtonLink";

const PHONE = "06 16 78 30 56";
const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";

export default function ContactPage() {
  const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  city: "",
  requestType: "Entretien annuel",
  stoveBrand: "",
  urgent: "Non",
  message: "",
  consent: false,
});

function updateField(e) {
  const { name, value, type, checked } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
}

async function handleSubmit(e) {
  e.preventDefault();

  if (!form.consent) {
    alert("Veuillez accepter la politique de confidentialité.");
    return;
  }

  try {
    const response = await fetch("https://ttf-backend-lkqe.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error("Erreur formulaire");
    }

    window.fbq?.("track", "Lead");

    alert("Votre demande a bien été envoyée.");

    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      requestType: "Entretien annuel",
      stoveBrand: "",
      urgent: "Non",
      message: "",
      consent: false,
    });
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue. Vous pouvez aussi nous contacter par téléphone.");
  }
}
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
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
          Contact
        </p>

        <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
          Votre poêle fonctionne. Votre maison est chaude. Point.
        </h2>

        <p className="mt-5 text-white/75">
          On s’occupe du reste : entretien, ramonage, dépannage et contrats
          annuels à Saint-Gaudens et 100 km autour.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}>
            <Phone size={18} /> Appeler
          </ButtonLink>

          <a
            href="#formulaire-contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:border-[#f77f00]/40 hover:bg-[#f77f00]/10"
          >
            <Mail size={18} />
            Faire une demande
            <ChevronRight size={18} />
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

  <section
    id="formulaire-contact"
    className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12"
  >
    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
      Formulaire
    </p>

    <h2 className="mt-3 font-serif text-4xl font-black text-white">
      Faire une demande d’intervention
    </h2>

    <p className="mt-4 text-white/70">
      Laissez vos informations, elles seront reprises automatiquement dans votre
      email de demande.
    </p>

    <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
  <div className="grid gap-5 md:grid-cols-2">
    <input
      name="name"
      required
      value={form.name}
      onChange={updateField}
      placeholder="Nom et prénom *"
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
    />

    <input
      name="phone"
      required
      value={form.phone}
      onChange={updateField}
      placeholder="Téléphone *"
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
    />
  </div>

  <div className="grid gap-5 md:grid-cols-2">
    <input
      name="email"
      type="email"
      value={form.email}
      onChange={updateField}
      placeholder="Email"
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
    />

    <input
      name="city"
      required
      value={form.city}
      onChange={updateField}
      placeholder="Ville d’intervention *"
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
    />
  </div>

  <div className="grid gap-5 md:grid-cols-2">
    <select
      name="requestType"
      value={form.requestType}
      onChange={updateField}
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#f77f00]/60"
    >
      <option>Entretien annuel</option>
      <option>Ramonage mécanique</option>
      <option>Dépannage</option>
      <option>Contrat d’entretien</option>
      <option>Demande de tarif</option>
      <option>Autre demande</option>
    </select>

    <input
      name="stoveBrand"
      value={form.stoveBrand}
      onChange={updateField}
      placeholder="Marque du poêle"
      className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
    />
  </div>

  <select
    name="urgent"
    value={form.urgent}
    onChange={updateField}
    className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#f77f00]/60"
  >
    <option value="Non">Urgence dépannage : non</option>
    <option value="Oui">Urgence dépannage : oui</option>
  </select>

  <textarea
    name="message"
    required
    value={form.message}
    onChange={updateField}
    rows={6}
    placeholder="Votre message *"
    className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#f77f00]/60"
  />

  <label className="flex gap-3 text-sm leading-6 text-white/65">
    <input
      type="checkbox"
      name="consent"
      required
      checked={form.consent}
      onChange={updateField}
      className="mt-1"
    />
    <span>
      J’accepte que mes informations soient utilisées pour répondre à ma demande.
    </span>
  </label>

  <button
    type="submit"
    className="rounded-2xl bg-gradient-to-r from-[#f77f00] to-[#ffb347] px-6 py-4 font-black text-black transition hover:scale-[1.02]"
  >
    Envoyer ma demande
  </button>
</form>
  </section>
</section>
    </>
  );
}