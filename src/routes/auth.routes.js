import express from "express";
import { authController } from "../controllers/auth/index.js";
// router is a part of  the whole app
const authRouter = express.Router();

// the (callback) function is called an api or endpoint
authRouter.post("/auth/sign-in", authController.signinEndpoint);

export { authRouter };
