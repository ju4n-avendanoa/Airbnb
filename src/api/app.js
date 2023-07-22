import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

export default app;
