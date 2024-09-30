const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

connectDB();

const categoryRoutes = require("./routes/categories");
const businessRoutes = require("./routes/businesses");
const bookingRoutes = require("./routes/bookings");
const authRoutes = require("./routes/authRoutes");

app.use("/categories", categoryRoutes);
app.use("/businesses", businessRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).send("Endpoint not found");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
  console.log("MONGO_URI:", process.env.MONGO_URI); // Patikrinkite, ar šis kintamasis yra įkeltas
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // Patikrinkite, ar šis kintamasis yra įkeltas
});
