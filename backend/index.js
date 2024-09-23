const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

const categoryRoutes = require("./routes/categories");
const businessRoutes = require("./routes/businesses");
const bookingRoutes = require("./routes/bookings");

app.use("/categories", categoryRoutes);
app.use("/businesses", businessRoutes);
app.use("/bookings", bookingRoutes);

app.use((req, res) => {
  res.status(404).send("Endpoint not found");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
