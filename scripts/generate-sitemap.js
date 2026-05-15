import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

import { blogPosts } from "../src/data/blogPosts.js";
import { seoCities } from "../src/data/cities.js";

const sitemap = new SitemapStream({
  hostname: "https://toutfeutoutflamme31.fr",
});

const today = new Date().toISOString();

const staticRoutes = [
  "/",
  "/tarifs",
  "/contact",
  "/blog",
  "/faqs",
  "/zones-intervention",
  "/galerie",
  "/avant-apres-entretien-poele-granules",
  "/partenariat",
  "/mentions-legales",
  "/cgv",
  "/politique-confidentialite",
  "/cookies",
];

staticRoutes.forEach((route) => {
  sitemap.write({
    url: route,
    lastmod: today,
    changefreq: "weekly",
    priority: 0.9,
  });
});

blogPosts.forEach((post) => {
  sitemap.write({
    url: `/blog/${post.slug}`,
    lastmod: post.date || today,
    changefreq: "monthly",
    priority: 0.8,
  });
});

seoCities.forEach((city) => {
  sitemap.write({
    url: `/entretien-poele-granules/${city.slug}`,
    lastmod: today,
    changefreq: "monthly",
    priority: 0.8,
  });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
});

