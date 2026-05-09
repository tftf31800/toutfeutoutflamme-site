export default function PrimaryButton({
  href,
  children,
  variant = "primary",
}) {
  const styles =
    variant === "secondary"
      ? "border border-white/15 bg-white/[0.06] text-white hover:bg-white/10"
      : "bg-[#f77f00] text-white hover:bg-[#ff8c1a]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black transition-all duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}