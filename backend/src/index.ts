import express, { Request, Response } from "express"; // Importuojame Request ir Response tipus
import dotenv from "dotenv"; // Importuojame dotenv
import connectDB from "./config/db"; // Įsitikinkite, kad teisingai importuojate connectDB
import categoryRoutes from "./routes/categories"; // Importuojame maršrutus
import businessRoutes from "./routes/businesses";
import bookingRoutes from "./routes/bookings";
import authRoutes from "./routes/authRoutes";

// Inicializuojame aplinkos kintamuosius
dotenv.config();

// Sukuriame Express programą
const app = express();

// Apibrėžiame port'ą, kuris naudojamas serverio paleidimui
const port = process.env.PORT || 8080;

// Middleware, kad galėtume priimti JSON formatu gautus duomenis
app.use(express.json());

// Prisijungiame prie duomenų bazės
connectDB().catch((err) => {
  console.error("Failed to connect to database:", err);
  process.exit(1);
});

// Priskiriame API maršrutus
app.use("/categories", categoryRoutes);
app.use("/businesses", businessRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);

// 404 klaidų tvarkymas, jei nebuvo rasta tinkama maršruto
app.use((req: Request, res: Response) => {
  res.status(404).send("Endpoint not found");
});

// Serverio paleidimas
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("MONGO_URI:", process.env.MONGO_URI); // Patikrinkite, ar šis kintamasis yra įkeltas
  console.log("JWT_SECRET:", process.env.JWT_SECRET); // Patikrinkite, ar šis kintamasis yra įkeltas
});
