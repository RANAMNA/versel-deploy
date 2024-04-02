import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import Psy_messageRoutes from "./routes/psy_message.routes.js";
import userRoutes from "./routes/user.routes.js";
import psyauthRoutes from "./routes/psyauth.routes.js";
import psychicsRoutes from "./routes/psychics.routes.js"
import proposalRoutes from "./routes/proposal.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/psychics", psychicsRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/PsyMessage", Psy_messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/psychics", psyauthRoutes);
app.use ("/api/proposals", proposalRoutes);

app.use(express.static(path.join(__dirname, "frontend")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
