const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const hostname = "https://toutfeutoutflamme.eu";

const staticPages = [
  "/",
  "/tarifs",
  "/contact",
  "/blog",
  "/mentions-legales",
  "/cgv",
  "/politique-confidentialite",
  "/cookies",
  "/zones-intervention",
];

const cityPages = [
  "/entretien-poele-granules-saint-gaudens",
  "/entretien-poele-granules-lannemezan",
  "/entretien-poele-granules-carbonne",
];

cityPages.forEach((url) => {
  sitemap.write({
    url,
    changefreq: "monthly",
    priority: 0.85,
  });
});

const blogPosts = [
  "/blog/comment-fonctionne-poele-granules-saint-gaudens",
  "/blog/poele-granules-entree-gamme-vs-haut-gamme",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  staticPages.forEach((url) => {
    sitemap.write({
      url,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  blogPosts.forEach((url) => {
    sitemap.write({
      url,
      changefreq: "monthly",
      priority: 0.8,
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync(
    "./public/sitemap.xml",
    data.toString()
  );

  console.log("✅ sitemap.xml généré");
  
}

generateSitemap();