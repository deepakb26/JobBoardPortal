import express from "express";
import { register, signIn } from "../controllers/authController.js";



const router = express.Router();

// Register routes
router.post("/register",register);
router.post("/login", signIn);

export default router;