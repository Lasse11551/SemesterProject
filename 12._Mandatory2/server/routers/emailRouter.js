import { Router } from "express";
const router = Router();

import { sendEmail } from "../util/resend";

router.get("/sendemail", (req, res) => {
    sendEmail();
    res.send({ data: "success"})
})