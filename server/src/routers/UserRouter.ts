import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post('/create', UserController.createUser);

export default userRouter;