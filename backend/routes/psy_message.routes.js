import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import psyprotectRoute from "../middleware/psyprotectRoute.js";

const router = express.Router();

router.get("/:id", psyprotectRoute, getMessages);
router.post("/send/:id", psyprotectRoute, sendMessage);

export default router;
