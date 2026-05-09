import { useEffect } from "react";
import {
  SITE_URL,
  COMPANY,
  routeToPath,
  buildLocalBusinessSchema,
} from "../lib/seo";

export default function SEO({ title, description, route = "/", keywords = [], schema }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${routeToPath(route)}`;

    document.title = title;
    document.documentElement.lang = "fr";

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords.join(", "));
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:locale"]', "content", "fr_FR");
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", COMPANY);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    // CANONICAL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // SCHEMA JSON-LD
    const schemaData = schema || buildLocalBusinessSchema(canonicalUrl);
    let script = document.getElementById("local-business-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "local-business-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);
  }, [title, description, route, keywords, schema]);

  return null;
}