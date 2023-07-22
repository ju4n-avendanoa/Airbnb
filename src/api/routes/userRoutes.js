import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", userController.getUsersHandler);

userRouter.post("/", userController.createUserHandler);

export default userRouter;
