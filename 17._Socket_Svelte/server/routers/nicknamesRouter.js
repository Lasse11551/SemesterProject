import { Router } from "express";

const router = Router();

router.get("/nickname", (req, res) => {
    res.send({ data: req.session.nickname });
})

router.post("/nickname", (req, res) => {
    const nickname = req.body.nickname;
    req.session.nickname = nickname;
    res.send({ data: nickname });
})

export default router;