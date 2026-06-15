import { Router } from "express";
import { getAccessTokenController, loginController, registerController, getMeController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = Router()

// Public route
authRouter.post("/register", registerController)

authRouter.post("/login", loginController)

authRouter.get("/get-accessToken", getAccessTokenController)

authRouter.get("/me", authMiddleware, getMeController)

export default authRouter