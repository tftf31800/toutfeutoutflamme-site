import { Star } from "lucide-react";
import ButtonLink from "./ButtonLink";
import { SUBSCRIBE_URL } from "../lib/seo";
export default function FeaturedContract() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-6 text-white shadow-2xl shadow-black/30 md:grid-cols-[0.36fr_0.64fr] md:p-8">
        <div className="min-h-56 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(247,127,0,0.38),transparent_26%),radial-gradient(circle_at_70%_18%,rgba(58,134,255,0.45),transparent_30%),linear-gradient(135deg,#0b132b,#1c2541)]" />
        <div className="grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4cc9f0]">Contrat recommandé</p>
            <h2 className="mt-5 font-serif text-5xl font-black">
              Pack <span className="text-[#4cc9f0]">Confort</span>
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">
              Entretien + ramonage + certificat + 1 dépannage inclus dans l’année.
            </p>
          </div>
          <div className="text-left md:text-right">
            <Star className="mb-8 ml-auto text-[#f77f00]" size={42} />
            <p className="text-6xl font-black text-white">189€</p>
            <p className="mt-3 text-xl font-bold text-[#4cc9f0]">ou 18,90€ / mois</p>
            <div className="mt-6">
<ButtonLink
  href={SUBSCRIBE_URL}
  onClick={(e) => {
    e.preventDefault();

    window.fbq?.("track", "Lead", {
      content_name: "Bouton souscrire site principal",
      content_category: "Souscription contrat entretien",
    });

    window.fbq?.("track", "InitiateCheckout", {
      content_name: "Bouton souscrire site principal",
      content_category: "Souscription contrat entretien",
      currency: "EUR",
    });

    setTimeout(() => {
      window.location.href = SUBSCRIBE_URL;
    }, 150);
    
    const eventId = `lead-${Date.now()}`;

window.fbq?.("track", "Lead", {
  content_name: "...",
  event_id: eventId
});

window.fbq?.("track", "InitiateCheckout", {
  content_name: "...",
  event_id: eventId
});
  }}
>
  Souscrire
</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}