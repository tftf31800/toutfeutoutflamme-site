import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackHomeButton() {
  return (
    <div className="mb-8">
      <Link
        to="/"
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/10
          bg-white/5
          px-5 py-3
          text-sm font-semibold text-white
          backdrop-blur-md
          transition-all duration-300
          hover:border-[#f77f00]/40
          hover:bg-[#f77f00]/10
          hover:text-[#f77f00]
          hover:shadow-[0_0_25px_rgba(247,127,0,0.18)]
        "
      >
        <ArrowLeft size={18} />
        Retour à l’accueil
      </Link>
    </div>
  );
}