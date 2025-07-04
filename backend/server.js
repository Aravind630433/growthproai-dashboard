const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static headlines for regeneration
const headlines = [
  "Discover the Best in Town This Year!",
  "Why Locals Love This Place in 2025",
  "Top-Rated Business You Shouldn't Miss!",
  "Find Out Why Everyone's Talking About It",
  "Your Next Favorite Spot in the City!",
];

// POST /business-data → respond with simulated values
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  // Generate dynamic values
  const randomRating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1); // 3.5 - 5.0
  const randomReviews = Math.floor(Math.random() * 300 + 50); // 50 - 350
  const headline = `Why ${name} is ${location}'s Top Pick in 2025`;

  res.json({
    rating: parseFloat(randomRating),
    reviews: randomReviews,
    headline,
  });
});

// GET /regenerate-headline → pick a random one
app.get('/regenerate-headline', (req, res) => {
  const randomIndex = Math.floor(Math.random() * headlines.length);
  const headline = headlines[randomIndex];
  res.json({ headline });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});