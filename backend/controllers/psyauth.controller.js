import bcrypt from "bcryptjs";
import Psychics from "../models/psychics.model.js";
import generatePsychicTokenAndSetCookie from "../utils/psyToken.js";

export const psy_signup = async (req, res) => {
    try {
        const { email, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingPsychic = await Psychics.findOne({ username });
        if (existingPsychic) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newPsychic = new Psychics({
            email,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newPsychic.save();

        generatePsychicTokenAndSetCookie(newPsychic._id, res);

        res.status(201).json({
            _id: newPsychic._id,
            email: newPsychic.email,
            username: newPsychic.username,
            profilePic: newPsychic.profilePic,
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const psy_login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingPsychic = await Psychics.findOne({ username });
        if (!existingPsychic) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingPsychic.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generatePsychicTokenAndSetCookie(existingPsychic._id, res);

        res.status(200).json({
            _id: existingPsychic._id,
            email: existingPsychic.email,
            username: existingPsychic.username,
            profilePic: existingPsychic.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const psy_logout = (req, res) => {
    try {
        res.clearCookie("psychic_jwt");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
