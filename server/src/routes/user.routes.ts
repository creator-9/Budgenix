import { Router } from "express";
import { getUserProfile, loginUser, registerUser } from "../controllers/user.controller.js";
import { verify } from "crypto";
import { verifyJwt } from "../middleware/verifyJwt.js";
const route = Router();

// Import user controller functions
route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/profile", verifyJwt,getUserProfile);

export default route;