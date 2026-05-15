import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";


export default function GoogleReviewsBlock() {
  const [data, setData] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[320px] animate-pulse rounded-[2rem] border border-white/10 bg-white/[0.04]"
            />
          ))}
        </div>
      </section>
    );
  }
  const visibleReviews =
    data?.reviews?.slice(startIndex, startIndex + 3) || [];

  function nextReviews() {
    if (!data?.reviews) return;

    setStartIndex((prev) =>
      prev + 3 >= data.reviews.length ? 0 : prev + 3
    );
  }

  function prevReviews() {
    if (!data?.reviews) return;

    setStartIndex((prev) =>
      prev - 3 < 0
        ? Math.max(data.reviews.length - 3, 0)
        : prev - 3
    );
  }

  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND FX */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,127,0,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(76,201,240,0.08),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#f77f00]">
            Avis Google
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Ils nous font confiance
          </h2>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  fill="#f77f00"
                  strokeWidth={1.5}
                  className="text-[#f77f00]"
                />
              ))}
            </div>

            <div className="text-3xl font-black text-white">
              {data.rating}
            </div>

            <div className="text-white/50">
              ({data.totalReviews} avis)
            </div>

          </div>
        </div>

        {/* GRID */}
        <div className="mb-10 flex justify-center gap-4">

          <button
            onClick={prevReviews}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b1728]/80 text-white transition hover:border-[#f77f00]/40 hover:text-[#f77f00]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextReviews}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b1728]/80 text-white transition hover:border-[#f77f00]/40 hover:text-[#f77f00]"
          >
            <ChevronRight size={20} />
          </button>

        </div>
        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-3">

          {visibleReviews.map((review, index) => {

            const text =
              review.text?.text ||
              review.originalText?.text ||
              "";

            const shortText =
              text.length > 260
                ? text.slice(0, 260) + "..."
                : text;

            return (
              <article
                key={index}
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#10233d]/95 to-[#081526]/95 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#f77f00]/30 hover:shadow-[0_0_40px_rgba(247,127,0,0.12)]"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(247,127,0,0.12),transparent_55%)]" />

                <div className="relative z-10">

                  {/* TOP */}
                  <div className="mb-6 flex items-start justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg font-black text-white">
                        {review.authorAttribution?.displayName?.charAt(0) || "G"}
                      </div>

                      <div>
                        <p className="font-bold text-white">
                          {review.authorAttribution?.displayName || "Client Google"}
                        </p>

                        <p className="mt-1 text-sm text-white/55">
                          {review.relativePublishTimeDescription || "Avis Google"}
                        </p>

                        <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                          Google Verified
                        </span>
                      </div>

                    </div>

                    <Quote
                      size={34}
                      className="text-[#f77f00]/30"
                    />

                  </div>

                  {/* STARS */}
                  <div className="mb-5 flex items-center gap-1">

                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="#f77f00"
                        strokeWidth={1.5}
                        className="text-[#f77f00]"
                      />
                    ))}

                  </div>

                  {/* TEXT */}
                  <p className="text-left leading-8 text-white/78">
                    {shortText}
                  </p>

                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <a
            href="https://search.google.com/local/writereview?placeid=ChIJRcuE-pEHdAIRqRuo_NjUq3s"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#f77f00]/25 bg-[#f77f00]/10 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f77f00] transition duration-300 hover:bg-[#f77f00] hover:text-black"
          >
            Voir tous les avis Google
          </a>

        </div>
      </div>
    </section>
  );
}

