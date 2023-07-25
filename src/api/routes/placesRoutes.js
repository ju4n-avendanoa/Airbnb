import { Router } from "express";
import * as placesController from "../controllers/placesController.js";

const placeRouter = Router();

placeRouter.post("/account/places/new", placesController.uploadPlaceHandler);

export default placeRouter;
