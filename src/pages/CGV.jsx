import { ShieldCheck, FileText, Scale, Flame } from "lucide-react";
import PageContainer from "../components/PageContainer";
import Sectiontitle from "../components/SectionTitle"

export default function CGV() {
  return (
      <main className="min-h-screen bg-transparent font text-white">
      <PageContainer className="py-16 text-white">
        <div className="absolute inset-0 bg-transparent" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-transparent ring-1 ring-[#f77f00]/40">
              <Scale className="text-[#f77f00]" size={34} />
            </div>

            <h1 className="text-4xl font-bold text white tracking-tight md:text-5xl">
              Conditions Générales de Vente
            </h1>

            <p className="mt-4 text-black/70">
              TOUT FEU TOUT FLAMME — Benjamin PLESSIS
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-black/[0.04] p-6 shadow-2xl backdrop-blur md:p-10">
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <InfoCard icon={<Flame />} title="Prestations" text="Entretien, ramonage et dépannage." />
              <InfoCard icon={<ShieldCheck />} title="Sécurité" text="Interventions selon les règles de l’art." />
              <InfoCard icon={<FileText />} title="Contrats" text="Essentiel, Confort et Sérénité." />
            </div>

            <div className="space-y-8 leading-relaxed text-black/85">
              <Article title="Préambule">
                Les présentes Conditions Générales de Vente régissent l’ensemble des prestations de services proposées par l’entreprise TOUT FEU TOUT FLAMME. Toute commande ou souscription à un contrat d’entretien implique l’acceptation sans réserve des présentes conditions.
              </Article>

              <Article title="Article 1 — Identification de l’entreprise">
                L’entreprise TOUT FEU TOUT FLAMME est exploitée par Monsieur Benjamin PLESSIS, dont le siège social est situé au 2045 rue de la Vieille Serre, 31800 Saint-Gaudens. L’entreprise est enregistrée sous le numéro SIREN 752 185 934.
              </Article>

              <Article title="Article 2 — Objet et prestations">
                TOUT FEU TOUT FLAMME assure des prestations de ramonage, d’entretien et de dépannage sur les installations de chauffage à bois et à granulés. Ces interventions visent à garantir la sécurité et la performance des appareils, conformément aux normes de fumisterie en vigueur, au DTU 24.1, au décret n° 2023-641 du 20 juillet 2023, aux règlements sanitaires départementaux et aux préconisations des fabricants.
              </Article>

              <Article title="Article 3 — Commande, devis et règlement">
                Toute commande est subordonnée à l’acceptation des présentes CGV. Un devis peut être établi sur demande, avec une validité de dix jours calendaires. Le paiement est exigible immédiatement à l’issue de l’intervention. Le certificat de ramonage ou d’entretien n’est remis qu’après encaissement complet du prix.
              </Article>

              <Article title="Article 4 — Durée et résiliation des contrats d’entretien">
                Les contrats d’entretien Essentiel, Confort et Sérénité sont conclus pour une durée ferme de douze mois à compter de la date de signature. Ils sont renouvelables par tacite reconduction, sauf dénonciation par l’une des parties avec un préavis de trente jours. En cas de paiement mensuel via Stripe, toute année commencée est intégralement due par le Client.
              </Article>

              <Article title="Article 5 — Obligations du client">
                Le Client s’engage à fournir un accès sécurisé et dégagé à l’appareil et aux conduits, à utiliser un combustible certifié et conforme, et à respecter la fréquence d’entretien réglementaire. Le Client demeure responsable de la conformité initiale de son installation.
              </Article>

              <Article title="Article 6 — Limitation de responsabilité">
                TOUT FEU TOUT FLAMME est tenue à une obligation de moyens. Sa responsabilité est strictement limitée aux dommages matériels directs et ne peut excéder le montant annuel du contrat ou de la prestation effectuée. Les dommages indirects, pertes de jouissance, inconfort thermique ou pannes dues à l’usure normale sont exclus.
              </Article>

              <Article title="Article 7 — Force majeure">
                La responsabilité du prestataire ne saurait être engagée en cas d’inexécution liée à un cas de force majeure, notamment coupures électriques, conditions climatiques extrêmes ou problèmes de tirage liés à l’environnement extérieur.
              </Article>

              <Article title="Article 8 — Protection des données personnelles">
                Les données personnelles sont traitées conformément au RGPD et à la loi Informatique et Libertés. Elles sont utilisées pour la gestion des rendez-vous, l’exécution du contrat, la facturation, l’édition des certificats légaux et le suivi technique. Les paiements mensuels sont sécurisés via Stripe. Aucune donnée n’est cédée ou revendue à des tiers.
              </Article>

              <Article title="Article 9 — Litiges et médiation">
                Les présentes CGV sont soumises au droit français. En cas de litige, le Client peut recourir gratuitement à un médiateur de la consommation conformément à l’article L. 612-1 du Code de la consommation.
              </Article>

              <Article title="Article 10 — Conservation des documents">
                Il appartient au Client de conserver ses factures et certificats afin de justifier de l’entretien régulier auprès de son assureur ou de son propriétaire.
              </Article>

              <div className="mt-10 rounded-[2rem] border border-transparent bg-black/[0.04] p-6">
  <h2 className="mb-6 text-center text-2xl font-black uppercase text-[#f77f00]">
    Annexe : détail des offres d’entretien
  </h2>

  <div className="overflow-x-auto rounded-2xl border border-black/10">
    <table className="w-full min-w-[760px] border-collapse text-sm text-white">
      <thead>
        <tr className="bg-[#1c2541] text-white">
          <th className="border border-white/10 p-4 text-left">Prestations et services</th>
          <th className="border border-white/10 p-4 text-center">Essentiel</th>
          <th className="border border-white/10 p-4 text-center">Confort</th>
          <th className="border border-white/10 p-4 text-center">Sérénité</th>
        </tr>
      </thead>

      <tbody className="bg-[#0b132b]/70">
        {[
          ["Entretien annuel obligatoire", "Inclus", "Inclus", "Inclus"],
          ["Ramonage mécanique du conduit + certificat", "✓", "✓", "✓"],
          ["Nettoyage complet de l’appareil", "✓", "✓", "✓"],
          ["Contrôle combustion et réglages électroniques", "✓", "✓", "✓"],
          ["Assistance dépannage", "Hors contrat", "1 intervention", "1 intervention + illimitée*"],
          ["Délai d’intervention prioritaire 24h/48h ouvré", "—", "✓", "✓"],
          ["Remise sur les pièces détachées", "—", "—", "-15 %"],
        ].map((row) => (
          <tr key={row[0]} className="border border-white/10">
            <td className="border border-white/10 p-4 font-semibold text-white/85">{row[0]}</td>
            <td className="border border-white/10 p-4 text-center">{row[1]}</td>
            <td className="border border-white/10 p-4 text-center">{row[2]}</td>
            <td className="border border-white/10 p-4 text-center">{row[3]}</td>
          </tr>
        ))}

        <tr className="bg-white/[0.06] font-black">
          <td className="border border-white/10 p-4">Prix annuel TTC</td>
          <td className="border border-white/10 p-4 text-center">139,00 €</td>
          <td className="border border-white/10 p-4 text-center">189,00 €</td>
          <td className="border border-white/10 p-4 text-center">249,00 €</td>
        </tr>

        <tr className="bg-[#f77f00] font-black text-white">
          <td className="border border-white/10 p-4">Ou mensualité via Stripe</td>
          <td className="border border-white/10 p-4 text-center">13,90 € / mois</td>
          <td className="border border-white/10 p-4 text-center">18,90 € / mois</td>
          <td className="border border-white/10 p-4 text-center">24,90 € / mois</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="mt-4 text-center text-xs italic text-white/60">
    * L’assistance illimitée en formule Sérénité concerne la main d’œuvre.  
    Le déplacement est en sus pour les pannes justifiées. Les pièces restent à la charge du client, avec remise de 15 %.
  </p>
</div>


              <a
                href="/pdf/CGV_NET.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:bg-white/10"

              >
                Télécharger les CGV complètes
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}

function Article({ title, children }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold text-white">{title}</h2>
      <p className="text-white/75">{children}</p>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-3 text-[#f77f00]">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-sm text-white/60">{text}</p>
    </div>
  );
}

function Offer({ name, price, month }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b16]/70 p-5">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-2xl font-bold text-[#f77f00]">{price}</p>
      <p className="text-sm text-white/60">ou {month}</p>
    </div>
  );
}
