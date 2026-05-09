export default function ButtonLink({
  href,
  children,
  variant = "primary",
}) {
  const styles =
    variant === "secondary"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] text-white shadow-xl shadow-blue-500/20";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black transition-all duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}