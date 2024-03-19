import express from "express";
const app = express();
app.use(express.static("public"));

import { homepagePage, introductionPage, firstServerPage } from "./util/readPages.js";

app.get("/", (req, res) => {
res.send(homepagePage)
})

app.get("/introduction", (req, res) => {
res.send(introductionPage)
})

app.get("/firstserver", (req, res) => {
    res.send(firstServerPage)
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))