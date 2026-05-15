import fs from "fs";

const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

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

    console.log("Avis Google mis à jour.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateReviews();