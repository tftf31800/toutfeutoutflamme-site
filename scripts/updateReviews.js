import fs from "fs";

const API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

async function updateReviews() {
  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${PLACE_ID}` +
      `&fields=name,rating,user_ratings_total,reviews` +
      `&reviews_sort=newest` +
      `&language=fr` +
      `&key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.result) {
      console.error("Erreur API Google :", data);
      return;
    }

    const output = {
      updatedAt: new Date().toISOString(),
      business: data.result.name,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    };

    fs.writeFileSync(
      "./public/reviews.json",
      JSON.stringify(output, null, 2)
    );

    console.log("Avis Google mis à jour.");
  } catch (err) {
    console.error(err);
  }
}

updateReviews();