export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}