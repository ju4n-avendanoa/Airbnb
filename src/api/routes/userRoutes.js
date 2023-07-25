import { Router } from "express";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", userController.getUsersHandler);

userRouter.post("/register", userController.createUserHandler);

userRouter.post("/login", userController.logUserHandler);

userRouter.delete("/users/delete", userController.deleteUsersHandler);

userRouter.get("/profile", userController.profileHandler);

userRouter.post("/logout", userController.logoutHandler);

export default userRouter;
