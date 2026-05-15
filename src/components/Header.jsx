import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] border-b border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="text-2xl text-white"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Tout Feu Tout Flamme
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="text-sm font-semibold text-white/70 transition hover:text-white">
            Accueil
          </Link>

          <Link to="/tarifs" className="text-sm font-semibold text-white/70 transition hover:text-white">
            Tarifs
          </Link>

          <Link to="/contact" className="text-sm font-semibold text-white/70 transition hover:text-white">
            Contact
          </Link>

          <Link to="/blog" className="text-sm font-semibold text-white/70 transition hover:text-white">
            Blog
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu((prev) => !prev)}
              className="flex items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              Découvrir
              <ChevronDown
                size={16}
                className={`transition duration-300 ${openMenu ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu && (
              <div className="absolute right-0 top-full z-[10000] mt-4 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#071426]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                <Link to="/realisations" onClick={() => setOpenMenu(false)} className="block px-5 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white">
                  Nos interventions
                </Link>

                <Link to="/zones-intervention" onClick={() => setOpenMenu(false)} className="block px-5 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white">
                  Zones d’intervention
                </Link>

                <Link to="/partenariats" onClick={() => setOpenMenu(false)} className="block px-5 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white">
                  Partenariats
                </Link>

                 <Link to="/FAQ" onClick={() => setOpenMenu(false)} className="block px-5 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white">
              Questions / réponses
            </Link>

              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={RDV_URL} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            <CalendarDays size={17} />
            RDV
          </a>

          <a href={SUBSCRIBE_URL} className="inline-flex items-center gap-2 rounded-full bg-[#f77f00] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff8c1a]">
            Contrats
            <ChevronRight size={17} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-3 text-white lg:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#071426]/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-white/80">
              Accueil
            </Link>

            <Link to="/tarifs" onClick={() => setMobileOpen(false)} className="text-white/80">
              Tarifs
            </Link>

            <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-white/80">
              Contact
            </Link>

            <Link to="/blog" onClick={() => setMobileOpen(false)} className="text-white/80">
              Blog
            </Link>

            <Link to="/realisations" onClick={() => setMobileOpen(false)} className="text-white/80">
              Nos interventions
            </Link>

            <Link to="/zones-intervention" onClick={() => setMobileOpen(false)} className="text-white/80">
              Zones d’intervention
            </Link>

            <Link to="/partenariats" onClick={() => setMobileOpen(false)} className="text-white/80">
              Partenariats
            </Link>

             <Link to="/FAQ" onClick={() => setMobileOpen(false)} className="text-white/80">
              Questions / réponses
            </Link>

            <a href={RDV_URL} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 font-bold text-white">
              <CalendarDays size={17} />
              RDV
            </a>

            <a href={SUBSCRIBE_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f77f00] px-5 py-3 font-black text-white">
              Contrats
              <ChevronRight size={17} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
