import express from "express";
//ændrer package.json til at indeholde "type": "module" for at kunne importere
const app = express();
app.use(express.static("public"));

import getMatches from "./util/matches.js";

import { homepagePage, contactPage, matchesPage } from "./util/readPages.js";

//Serverside rendering 
//At læse en side først og sætte den ind i send gør det: hurtigere, fjerner CORS problemer, mindre ressourcer brug for client rendering

//============HTML===============

app.get("/", (req, res) => {
    res.send(homepagePage)
})

app.get("/matches", (req, res) => {
    res.send(matchesPage)
})

app.get("/contact", (req, res) => {
    res.send(contactPage)
})

app.get("/page", (req, res) => {
    res.send("<div><h1>jfdjfndjnfdf</h1><h2>fkdfmkdmfd</h2></div>");
  })

// ============API==================

app.get("/api/matches", async (req, res) => {
    const matches = await getMatches();
    res.send({ data: matches });
  });

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))