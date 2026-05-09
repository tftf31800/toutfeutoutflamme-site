import { seoFaqs } from "../data/seoFaqs";
export default function FAQSection({ faqs = seoFaqs, title = "Questions fréquentes" }) {
  return (
    <section className="my-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
      <p className="text-sm font-black uppercase tracking-[0.32em] text-[#4cc9f0]">
        FAQ poêle à granulés
      </p>

      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]"
          >
            <summary className="cursor-pointer list-none font-bold text-white">
              {faq.question}
            </summary>
            <p className="mt-4 leading-7 text-white/70">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}