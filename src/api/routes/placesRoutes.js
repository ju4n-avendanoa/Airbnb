import { Router } from "express";
import * as placesController from "../controllers/placesController.js";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const photoPath = join(__dirname, "/../uploads");

const placeRouter = Router();

const photosMiddleware = multer({ dest: photoPath });

placeRouter.post("/upload-by-link", placesController.uploadPlaceHandlerByLink);

placeRouter.post(
  "/upload",
  photosMiddleware.array("photos", 10),
  placesController.uploadPlaceHandler
);

export default placeRouter;
