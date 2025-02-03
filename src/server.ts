import express from "express";
import cors, { CorsOptions } from "cors";
import patientRoutes from "./routes/patientRoutes";
import db from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
connectDB();

const server = express();

const corsOptions: CorsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};
server.use(cors(corsOptions));
server.use(express.json());
server.use("/api/patients", patientRoutes);

export default server;
