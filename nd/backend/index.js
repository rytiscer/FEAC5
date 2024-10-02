const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

// Prisijungiame prie MongoDB
connectDB();

// Importuojame route modulius
const categoryRoutes = require("./routes/categories");
const businessRoutes = require("./routes/businesses");
const bookingRoutes = require("./routes/bookings");

// Naudojame route modulius
app.use("/categories", categoryRoutes);
app.use("/businesses", businessRoutes);
app.use("/bookings", bookingRoutes);

// Default klaidų tvarkymas, jei endpoint nerastas
app.use((req, res) => {
  res.status(404).send("Endpoint not found");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
