import { useEffect, useState } from "react";

const COOKIE_KEY = "tftf_cookie_consent";
const META_PIXEL_ID = "978584511309075";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  const loadMetaPixel = () => {
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/fr_FR/fbevents.js"
    );

    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  };

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);

    if (!saved) {
      setVisible(true);
    } else {
      try {
        const consent = JSON.parse(saved);

        if (consent.marketing) {
          loadMetaPixel();
        }
      } catch {
        setVisible(true);
      }
    }

    const openPreferences = () => setVisible(true);

    window.addEventListener("openCookiePreferences", openPreferences);

    return () => {
      window.removeEventListener("openCookiePreferences", openPreferences);
    };
  }, []);

  const saveConsent = (marketingAccepted) => {
    const consent = {
      necessary: true,
      marketing: marketingAccepted,
      date: new Date().toISOString(),
    };

    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));

    if (marketingAccepted) {
      loadMetaPixel();
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#071027]/95 p-6 text-white shadow-2xl backdrop-blur-2xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
          Confidentialité
        </p>

        <h2 className="mt-3 text-2xl font text-white">Gestion des cookies</h2>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Nous utilisons des cookies nécessaires au fonctionnement du site.
          Avec votre accord, nous utilisons aussi le Pixel Meta pour mesurer
          les visites, les clics et améliorer nos campagnes publicitaires.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => saveConsent(false)}
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Refuser
          </button>

          <button
            type="button"
            onClick={() => saveConsent(true)}
            className="rounded-full bg-gradient-to-r from-[#f77f00] to-[#ffb703] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#071027]"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
