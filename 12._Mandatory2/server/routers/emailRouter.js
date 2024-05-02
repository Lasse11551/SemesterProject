import { Router } from "express";
const router = Router();

import { sendEmail } from "../util/resend.js";

/* function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        next(); // Continue to the next middleware or the route handler
    } else {
        res.status(401).json({ error: "Not authenticated" }); // Or redirect, based on your app's behavior
    }
} */

router.get("/api/sendemail", async (req, res) => {
    await sendEmail();
    res.send({ data: "success"})
})

export default router;