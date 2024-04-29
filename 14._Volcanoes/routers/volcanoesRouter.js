import { Router} from "express"
import db from "../database/connection.js"
const router = Router();

router.get("/api/volcanoes", async (req, res) => {
    const result = await db.all('SELECT * FROM volcanoes');
    console.log(result);
    res.send({ data: result})
});

router.post("/api/volcanoes", async(req, res) => {
    const { name, isActive, type } = req.body;

    if (!name || isActive === undefined || isActive === null || !type) {
        return res.status(400).send({ data: "Missing required fields in body" });
    }

    const result = await db.run(`INSERT INTO volcanoes (name, is_active, type) 
                                VALUES (?, ?, ?)`, [name, isActive, type]);
    res.send({ lastId: result.lastID })
})

export default router;