export default function SectionTitle({
  eyebrow,
  title,
  text,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center" : ""} mx-auto max-w-3xl`}>
      {eyebrow && (
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 font-serif text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-6 text-lg leading-8 text-white/70">
          {text}
        </p>
      )}
    </div>
  );
}