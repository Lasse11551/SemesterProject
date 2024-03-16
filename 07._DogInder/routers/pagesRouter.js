import { homepagePage, contactPage, matchesPage } from "../util/readPages.js";
import getMatches from "../util/matches.js";

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage)
})

router.get("/matches", (req, res) => {
    res.send(matchesPage)
})

router.get("/contact", (req, res) => {
    res.send(contactPage)
})

router.get("/page", (req, res) => {
    res.send("<div><h1>jfdjfndjnfdf</h1><h2>fkdfmkdmfd</h2></div>");
  })

export default router;