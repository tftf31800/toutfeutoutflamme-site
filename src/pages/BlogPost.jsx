import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageContainer className="text-white">
        <h1 className="text-4xl font-black">Article introuvable</h1>
      </PageContainer>
    );
  }

  return (
    <>
      <SEO
        route={`/blog/${post.slug}`}
        title={`${post.title} | Tout Feu Tout Flamme`}
        description={post.excerpt}
      />

      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://toutfeutoutflamme.eu${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tout Feu Tout Flamme",
      logo: {
        "@type": "ImageObject",
        url: "https://toutfeutoutflamme.eu/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://toutfeutoutflamme.eu/blog/${post.slug}`,
    },
    datePublished: post.updated,
    dateModified: post.updated,
  })}
</script>

      <PageContainer className="text-white">
        <Link
         to="/blog"
         className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#f77f00] hover:bg-[#f77f00]/10"
         >
           ← Retour au blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 h-[420px] w-full rounded-[2rem] object-cover"
        />

        <h1 className="mx-auto mt-12 max-w-5xl text-center font-serif text-4xl font-black leading-tight text-white md:text-6xl">
        {post.title}
        </h1>

        <div
          className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-black/45 px-6 py-10 text-left shadow-2xl shadow-black/30 backdrop-blur-md [&_*]:text-left [&_h2]:mt-14
          [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-black [&_h2]:leading-tight [&_h2]:text-white [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_p]:my-5 [&_p]:text-lg
          [&_p]:leading-8 [&_p]:text-white/85 [&_strong]:text-white [&_strong]:font-black [&_ul]:my-6 [&_li]:my-2 [&_li]:text-lg [&_li]:leading-8 [&_li]:text-white/85 [&_a]:font-bold
    [&_a]:text-[#4cc9f0]
    [&_a]:underline
    [&_a]:underline-offset-4
    hover:[&_a]:text-[#f77f00] "
          dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <section className="mt-20">
  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
    
    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
      Conseils & expertise
    </p>

    <h2 className="mt-4 font-serif text-4xl font-black text-white">
      À lire aussi
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {blogPosts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3)
        .map((relatedPost) => (
          <Link
            key={relatedPost.slug}
            to={`/blog/${relatedPost.slug}`}
            className="group rounded-[2rem] border border-white/10 bg-black/20 p-5 transition hover:border-[#f77f00]/40 hover:bg-black/40"
          >
            <img
              src={relatedPost.image}
              alt={relatedPost.title}
              className="h-48 w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-[1.02]"
            />

            <h3 className="mt-5 text-xl font-black leading-tight text-white transition group-hover:text-[#f77f00]">
              {relatedPost.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              {relatedPost.excerpt}
            </p>
          </Link>
        ))}
    </div>
  </div>
</section>
      </PageContainer>
    </>
  );
}