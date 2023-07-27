import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import placeRouter from "./routes/placesRoutes.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/upload", express.static(join(__dirname, "/uploads")));
app.use(cookieParser());
app.use(userRouter);
app.use(placeRouter);

export default app;
