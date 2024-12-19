import express from "express";

import "dotenv/config";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { publicRouter } from "./routes/public.routes.js";
import { authRouter } from "./routes/auth.routes.js";

const main = () => {
  const app = express();

  const PORT = process.env.PORT || 5000;
  // use means we are using a middleware
  // middleware: a gate between request and response
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors());

  app.use(publicRouter);
  app.use(authRouter);

  app.listen(PORT, () => {
    console.log("listening.........", PORT);
  });
};

main();
