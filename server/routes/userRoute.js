import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getApplications, getUser, getUserDetails, updateUser } from "../controllers/userController.js";

const router = express.Router();

// GET user
router.post("/get-user", userAuth, getUser);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUser);

router.get("/applied-jobs",userAuth,getApplications)

//Seeker Details

router.get("/get-user-details/:id",getUserDetails)

export default router;