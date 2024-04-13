require("dotenv").config();
const express = require("express");
const cors = require('cors')
const brokerApi = require("./api");


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001", // Allow only your React app to make requests
  })
);

// Fetch current holdings
app.get("/holdings", async (req, res) => {
  try {
    const holdings = await brokerApi.fetchHoldings();
    res.json(holdings);
  } catch (error) {
    console.error("Failed to fetch holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Place order (Buy or Sell)
app.post('/orders', async (req, res) => {
    const orderDetails = req.body;
    const response = await brokerApi.placeOrder(orderDetails);
    res.send(response);
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
