import { Router } from "express";
import * as placesController from "../controllers/placesController.js";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import verifyToken from "../utils/verifyToken.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const photoPath = join(__dirname, "/../uploads");

const placeRouter = Router();

const extractIdFromToken = (req, res, next) => {
  const { token } = req.cookies;
  const user = verifyToken(token);
  req.userId = user.id;
  next();
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const id = req.userId;
    const destination = join(photoPath, id);
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.originalname}`;
    cb(null, filename);
  },
});

const photosMiddleware = multer({ storage: storage });

placeRouter.post(
  "/upload",
  extractIdFromToken,
  photosMiddleware.array("photos", 10),
  placesController.uploadPhotoHandler
);

placeRouter.post("/upload-by-link", placesController.uploadPhotoByLinkHandler);

placeRouter.post("/places", placesController.uploadPlaceHandler);

export default placeRouter;
