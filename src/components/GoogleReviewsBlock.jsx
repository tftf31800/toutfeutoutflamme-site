import { useEffect, useRef, useState } from "react";
export default function GoogleReviewsBlock()
 {
  const reviews = [
    {
      name: "Sylvain G.",
      text: "Dépannage efficace, M. Plessis est très pro et très compétent!",
    },
    {
      name: "Thierry M.",
      text: "Ponctuel, professionnel, compétent et surtout souriant.",
    },
    {
      name: "Christian T.",
      text: "Sérieux et efficace ! Travail propre et surtout bien fait 👍 Je recommande ++",
    },
    {
      name: "Pascale L.",
      text: "Tres pro, vraiment efficace, le poele fonctionne a nouveau comme neuf apres un bon nettoyage annuel",
    },
    {
      name: "Chris S.",
      text: "Super compétent. Disponible. Répond rapidement",
    },
  ];

  const sliderRef = useRef(null);

 const scrollReviews = (direction = "next") => {
  const slider = sliderRef.current;
  if (!slider) return;

  const cards = Array.from(slider.querySelectorAll("article"));
  if (!cards.length) return;

  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

  const currentIndex = cards.reduce((closestIndex, card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    const closestCard = cards[closestIndex];
    const closestCenter =
      closestCard.offsetLeft + closestCard.offsetWidth / 2;

    return Math.abs(cardCenter - sliderCenter) <
      Math.abs(closestCenter - sliderCenter)
      ? index
      : closestIndex;
  }, 0);

  const nextIndex =
    direction === "next"
      ? Math.min(currentIndex + 1, cards.length - 1)
      : Math.max(currentIndex - 1, 0);

  const targetLeft =
    cards[nextIndex].offsetLeft - slider.offsetWidth / 2 + cards[nextIndex].offsetWidth / 2;

  slider.scrollTo({
    left: targetLeft,
    behavior: "smooth",
  });
};

  return (
    <section className="mx-auto mt-20 max-w-7xl px-5">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
            Avis clients Google
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Ils nous font confiance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Des clients satisfaits pour l’entretien, le ramonage mécanique, le dépannage
            et les contrats de poêles à granulés à Saint-Gaudens et en Haute-Garonne.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-3xl border border-orange-300/20 bg-orange-500/10 px-5 py-4 shadow-lg shadow-orange-500/10 sm:flex-row">
  <div className="text-2xl tracking-widest text-orange-300 drop-shadow-[0_0_14px_rgba(247,127,0,0.45)]">
    ★★★★★
  </div>

  <p className="text-center text-sm font-semibold text-white md:text-base">
    Avis Google vérifiés • Clients satisfaits à Saint-Gaudens, dans le Comminges et en Haute-Garonne
  </p>
</div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollReviews("prev")}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b132b]/90 text-2xl text-white shadow-xl transition hover:border-orange-300 hover:bg-orange-500/20 md:flex"
            aria-label="Avis précédent"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => scrollReviews("next")}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0b132b]/90 text-2xl text-white shadow-xl transition hover:border-orange-300 hover:bg-orange-500/20 md:flex"
            aria-label="Avis suivant"
          >
            ›
          </button>

          <div
            ref={sliderRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[calc(50%-42.5vw)] py-3 md:px-[calc(50%-190px)]"
          >
            {reviews.map((review, index) => (
              <article
                key={index}
                className="group relative flex h-[275px] w-[85vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0b132b]/90 p-6 shadow-lg transition duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-orange-500/10 before:opacity-0 before:transition before:duration-300 hover:-translate-y-2 hover:border-orange-300/50 hover:shadow-orange-500/20 hover:before:opacity-100 sm:w-[360px] md:w-[380px]"
              >
                <div>
                  <div className="mb-5 text-xl tracking-widest text-orange-300 drop-shadow-[0_0_12px_rgba(247,127,0,0.35)]">
                    ★★★★★
                  </div>

                  <p className="text-sm leading-7 text-slate-200">
                    “{review.text}”
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">{review.name}</p>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-[#4285f4] shadow-lg">
                    G
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.google.com/search?sa=X&sca_esv=4ad3c19e3125a9e4&hl=fr&authuser=0&sxsrf=ANbL-n62rzjpemk4aGpf4eiqiGIREcQCkQ:1777364365807&q=avis%20sur%20benjamin%20plessis%20-%20tout%20feu%20tout%20flamme-%20ramonage%20et%20entretien%20po%C3%AAles%20granul%C3%A9s%20comminges.%20saint-gaudens&rflfq=1&num=20&stick=H4sIAAAAAAAAAMWNMQ4CIRBFs4XG3s5qLoBZgpjlOKOOBAODYWAPZKeVd9jbeAopvIPdy0_ef5v1bjs5rQ92NPo4OmftZLR5D8NnKDgHAWkFTsQ3TIHhHkmkjwpqbhWu1H4QMSVSUDBlRk9AFYhroRqoW3l5dRF8QW5xeQqcc-p3nmQPgoGr8tguxPJY_SH6BfGAP4kEAQAA&rldimm=8911450316099558313&tbm=lcl&ved=0CAgQ5foLahcKEwiA9dmejpCUAxUAAAAAHQAAAAAQBQ&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2pkUlkweEphRmg1Vm5SaVExOWFXR2cxYzFWM1kyYxAB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:bg-white/10"
          >
            Voir les avis Google
          </a>

          <a
            href="https://g.page/r/CakbqPzY1Kt7EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffb703] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
          >
            Laisser un avis ⭐
          </a>
        </div>
      </div>
    </section>
  );
}