export default function PageContainer({
  children,
  className = "",
  narrow = false,
}) {
  return (
    <section className={`px-6 py-20 ${className}`}>
      <div className={narrow ? "mx-auto max-w-4xl" : "mx-auto max-w-7xl"}>
        {children}
      </div>
    </section>
  );
}