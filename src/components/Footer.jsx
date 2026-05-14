export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 px-6 py-14 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

        <div>
          <p
            className="text-3xl text-white"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Tout Feu Tout Flamme
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Entretien, ramonage mécanique et dépannage de poêles à granulés
            autour de Saint-Gaudens.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/60">
          <a href="/mentions-legales" className="transition hover:text-white">
            Mentions légales
          </a>

          <a href="/cgv" className="hover:text-[#f77f00]">
          CGV
           </a>

          <a href="/politique-confidentialite" className="transition hover:text-white">
            Politique de confidentialité
          </a>

          <a href="/cookies" className="transition hover:text-white">
           Cookies
           </a>

          <a href="/zones-intervention" className="transition hover:text-white">
            Zones d’intervention
          </a>

           <a href="/FAQ" className="transition hover:text-white">
            Une question ?
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © 2026 Tout Feu Tout Flamme — Tous droits réservés
      </div>
    </footer>
  );
}