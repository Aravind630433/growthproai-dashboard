const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Magic of Cake & Co in Mumbai!",
  "2025’s Best Bakery in Mumbai: Cake & Co",
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  res.json({
    rating: 4.3,
    reviews: 127,
    headline: headlines[0],
  });
});

app.get('/regenerate-headline', (req, res) => {
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));