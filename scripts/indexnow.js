import fs from "fs";

const HOST = "toutfeutoutflamme31.fr";
const SITE_URL = `https://${HOST}`;

const KEY = process.env.INDEXNOW_KEY || "17ebe1b853654b0991141f8c127c000a";
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

const sitemapPath = "public/sitemap.xml";

if (!fs.existsSync(sitemapPath)) {
  console.log("IndexNow: sitemap introuvable.");
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, "utf8");

const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.log("IndexNow: aucune URL trouvée.");
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${response.status} - ${response.statusText}`);
console.log(`IndexNow: ${urls.length} URLs envoyées.`);