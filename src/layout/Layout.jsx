import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <>
      {/* IMAGE DE FOND FIXE */}
      <div className="fixed inset-0 -z-20">
        <img
          src="/bg-hero.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* VOILE */}
      <div className="fixed inset-0 -z-10 bg-black/40" />

      <Header />

      {/* CONTENU */}
      <main className="relative z-10 flex justify-center">
        <div className="w-full max-w-7xl border-x border-white/15 text-white shadow-2xl shadow-black/40">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

  
