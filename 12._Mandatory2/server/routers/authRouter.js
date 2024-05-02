import { Router } from "express";
import db from "../database/connection.js";
import { signup, login } from "../util/passwordUtil.js";
const router = Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send({ data: "Missing required fields in body" });
    }

    let hashedPassword = await signup(password);  // Ensure this is asynchronous if hashing is involved

    try {

        const result = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashedPassword]);

        res.status(201).json({ message: "Successful", userId: result.lastID }); // Assuming 'lastID' is returned by your database driver
    } catch (error) {
        if (error.message.includes("UNIQUE constraint failed: users.email")) {
            res.status(409).json({ error: "Email already exists" });
        } else {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).send({ data: "Missing required fields in body" });
    }

    try {
        // Find the object with the provided email
    const user = await db.get('SELECT * FROM users WHERE email = ?', email);

    if (!user) {
        // If user not found, handle it accordingly (e.g., return an error)
        throw new Error("Invalid email");
    }
        // Attempt to log in with the provided credentials
        await login(user, password);

            res.status(200).json({
                message: "Login successful",
                user: { id: user.id, email: user.email } // Send back user ID and email as an example
            });
    } catch (error) {
        // Handle errors thrown by the login function
        if (error.message === "Invalid email" || error.message === "Incorrect email or password") {
            res.status(401).json({ error: error.message });
        } else {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
})

export default router;