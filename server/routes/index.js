import express from "express";

import authRoute from "./authRoute.js";
import userRoute from "./userRoute.js"
import companiesRoute from "./companiesRoute.js"
import jobRoute from "./jobRoute.js"

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}auth`, authRoute);
router.use(`${path}user`, userRoute); //api-v1/auth/
router.use(`${path}companies`,companiesRoute);
router.use(`${path}jobs`,jobRoute);

export default router;