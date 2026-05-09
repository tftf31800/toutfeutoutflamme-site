import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import PageContainer from "../components/PageContainer";
import { blogPosts } from "../data/blogPosts";
import BackButton from "../components/BackHomeButton";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <>
    <BackButton />
      <SEO
        route="/blog"
        title="Blog poêle à granulés | Tout Feu Tout Flamme"
        description="Conseils, entretien, ramonage, dépannage et granulés de bois pour mieux utiliser votre poêle à granulés."
      />

      <PageContainer className="text-white">
        <SectionTitle
         eyebrow="Conseils & expertise"
         title="Blog poêle à granulés"
         text="Entretien, dépannage, consommation, granulés de bois et conseils d’expert autour de Saint-Gaudens."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
            
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#4cc9f0]/40 hover:bg-white/[0.09]"
            >
              <img
              src={post.image}
              alt={post.title}
              className="mb-5 h-52 w-full rounded-2xl object-cover"
              />
              <h2 className="text-2xl font-white leading-tight text-white transition group-hover:text-[#4cc9f0]">
              {post.title}
              </h2>
              <p className="mt-4 text-white/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </PageContainer>
    </>
  );
}