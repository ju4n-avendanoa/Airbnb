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

placeRouter.post(
  "/upload",
  photosMiddleware.array("photos", 10),
  placesController.uploadPhotoHandler
);

placeRouter.post("/upload-by-link", placesController.uploadPhotoByLinkHandler);

placeRouter.post("/places", placesController.uploadPlaceHandler);

placeRouter.get("/places", placesController.getAllPlacesHandler);

placeRouter.get("/places/:id", placesController.getPlaceByIdHandler);

placeRouter.patch("/places/:id", placesController.updatePlaceByIdHandler);

export default placeRouter;
