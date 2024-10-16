import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categories";
import businessRoutes from "./routes/businesses";
import bookingRoutes from "./routes/bookings";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

connectDB().catch((err) => {
  console.error("Failed to connect to database:", err);
  process.exit(1);
});

app.use("/categories", categoryRoutes);
app.use("/businesses", businessRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send("Endpoint not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("MONGO_URI:", process.env.MONGO_URI);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
});
