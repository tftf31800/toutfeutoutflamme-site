import SEO from "../components/SEO";
import PageContainer from "../components/PageContainer";
import SectionTitle from "../components/SectionTitle";
import FAQSection from "../components/FAQSection";

export default function FAQ() {
  return (
    <>
      <SEO
        route="/faq"
        title="FAQ poêle à granulés | Entretien, ramonage et dépannage"
        description="Questions fréquentes sur l’entretien, le ramonage, le dépannage et l’utilisation d’un poêle à granulés autour de Saint-Gaudens."
      />

      <PageContainer className="text-white">
        <SectionTitle
          eyebrow="Questions fréquentes"
          title="FAQ poêle à granulés"
          text="Entretien annuel, ramonage, dépannage, consommation, bruit, sécurité : retrouvez les réponses aux questions les plus fréquentes."
        />

        <FAQSection title="Vos questions sur les poêles à granulés" />
      </PageContainer>
    </>
  );
}