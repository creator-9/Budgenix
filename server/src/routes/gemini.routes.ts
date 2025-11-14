import { Router } from "express";
import googleAi from "../controllers/gemini.controller";
import { verifyJwt } from "../middleware/verifyJwt";
const route = Router();

route.post("/generateai",verifyJwt, googleAi);

export default route;   