import PageContainer from "../components/PageContainer";
import SEO from "../components/SEO";
import BackHomeButton from "../components/BackHomeButton";
import ZonesInterventionSection from "../components/ZonesInterventionSection";
import SectionTitle from "../components/SectionTitle"

export default function ZonesIntervention() {
  return (
    <>
    <BackHomeButton />
      <SEO
        route="/zones-intervention"
        title="Zones d’intervention | Tout Feu Tout Flamme"
        description="Toutes les villes couvertes pour l’entretien, le dépannage et le ramonage mécanique de poêles à granulés autour de Saint-Gaudens."
      />

      <PageContainer className="text-center text-white">
           <SectionTitle
           eyebrow="Zones d’intervention"
           title="Entretien poêle à granulés autour de Saint-Gaudens"
           text="Retrouvez toutes les communes couvertes par Tout Feu Tout Flamme pour
          l’entretien, le dépannage et le ramonage mécanique de poêles à granulés."
           />        
      </PageContainer>

      <ZonesInterventionSection />
    </>
  );
}