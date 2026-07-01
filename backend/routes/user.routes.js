import {Router} from 'express'
import { login, logout, profileController, register } from '../controller/Auth.controller.js';
import { body  } from 'express-validator';
import authMiddleware from '../middleware/auth.middleware.js';

const userRouter = Router();


userRouter.post("/register",register);

userRouter.post("/login",login);

userRouter.get("/profile", authMiddleware, profileController);

userRouter.get("/logout", logout)

export default userRouter;