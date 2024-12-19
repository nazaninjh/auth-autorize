import express from "express";
import { publicController } from "../controllers/public/index.js";
// router is a part of  the whole app
const publicRouter = express.Router();


// the (callback) function is called an api or endpoint
publicRouter.get("/", publicController.homeEndpoint);

export { publicRouter };
