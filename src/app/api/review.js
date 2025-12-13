// /pages/api/review.js

// In-memory variable to store reviews
let reviews = []; // This will store the reviews temporarily

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { stars, review, email } = req.body;

    // Validation for missing stars or review
    if (!stars || !review) {
      return res.status(400).json({ message: "Stars and review are required" });
    }

    // Create the new review object
    const newReview = {
      stars,
      review,
      
    };

    // Add the new review to the reviews array
    reviews.push(newReview);

    // Return a success message
    res.status(200).json({ message: "Review submitted successfully!" });
  } else {
    // Handle invalid method (only allow POST)
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
