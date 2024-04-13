import { Router } from "express"
import escape from "escape-html"
const router = Router();

const messages = [];

router.get("/messages", (req, res) => {
    res.send({ message: messages })
})

router.post("/messages", (req, res) => {
    messages.push(escape(req.body.message))
    res.send({ })
})

export default router;