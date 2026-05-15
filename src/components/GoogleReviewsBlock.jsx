import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,127,0,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(76,201,240,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#f77f00]">
            Avis clients
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Ils nous font confiance
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex text-[#f77f00]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  fill="#f77f00"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <span className="text-2xl font-black text-white">
              {data.rating}
            </span>

            <span className="text-white/60">
              ({data.totalReviews} avis Google)
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews?.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">
                    {review.authorAttribution?.displayName ||
                      review.author_name}
                  </p>

                  <p className="text-sm text-white/40">
                    Avis Google
                  </p>
                </div>

                <div className="flex text-[#f77f00]">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#f77f00"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>

              <p className="leading-relaxed text-white/75">
                {review.text?.text || review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://g.page/r/YOUR_LINK/review"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#f77f00]/30 bg-[#f77f00]/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f77f00] transition hover:bg-[#f77f00] hover:text-black"
          >
            Voir tous les avis Google
          </a>
        </div>
      </div>
    </section>
  );
}