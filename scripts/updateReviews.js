import fs from "fs";
import { execSync } from "child_process";

const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function updateReviews() {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Erreur API Google :", data);
      process.exit(1);
    }

    const output = {
      updatedAt: new Date().toISOString(),
      business: data.displayName?.text || "Tout Feu Tout Flamme",
      rating: data.rating || null,
      totalReviews: data.userRatingCount || 0,
      reviews: data.reviews || [],
    };

    fs.writeFileSync(
      "./public/reviews.json",
      JSON.stringify(output, null, 2)
    );

    console.log("reviews.json généré.");

    execSync(`
      git config --global user.email "bot@render.com"
    `);

    execSync(`
      git config --global user.name "Render Bot"
    `);

    execSync(`
      git remote add origin https://${GITHUB_TOKEN}@github.com/tftf31800/toutfeutoutflamme-site.git
    `);

    execSync(`git add public/reviews.json`);

    execSync(`
      git commit -m "Update Google reviews"
    `);

    execSync(`git push origin HEAD:main`);

    console.log("reviews.json push sur GitHub.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateReviews();