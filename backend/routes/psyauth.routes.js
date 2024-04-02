import express from "express";
import { psy_login, psy_logout, psy_signup } from "../controllers/psyauth.controller.js";

const router = express.Router();

router.post("/signup", psy_signup);

router.post("/login", psy_login);

router.post("/logout", psy_logout);

export default router;
