export default function TrustItem({ title, text, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <Icon className="mb-4 text-[#4cc9f0]" size={28} />
      <h3 className="font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{text}</p>
    </div>
  );
}