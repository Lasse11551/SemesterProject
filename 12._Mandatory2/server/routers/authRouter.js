import { Router } from "express";
import db from "../database/connection.js";
import { signup, login } from "../util/passwordUtil.js";
import { sendEmailSignup } from "../util/resend.js";
const router = Router();

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.send({ data: "Missing required fields in body"})
    }

    let hashedPassword = await signup(password);  // Ensure this is asynchronous if hashing is involved

    try {

        const result = await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashedPassword]);
        await sendEmailSignup();

        res.send({ data: "User added successfully"}) // Assuming 'lastID' is returned by your database driver
    } catch (error) {
        if(error.code === 'SQLITE_CONSTRAINT') {
            res.send({ data: "This email already exists in the database"})
        } else {
            res.send({ data: "An error occurred:", error})
        }
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
            // Find the object with the provided email
        const user = await db.get('SELECT * FROM users WHERE email = ?', email);

            // Attempt to log in with the provided credentials
        const response = await login(user, password);

        if(response) {
            req.session.user = {
                id: user.id,
                email: user.email
            }
            return res.send({ data: { id: user.id, email: user.email }})
        } else {
            return res.send({ data: "Invalid email or password"})
        }
    } catch(error) {
        console.log(error)
    }
        
})

export default router;