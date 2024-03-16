import express from "express";
//ændrer package.json til at indeholde "type": "module" for at kunne importere
const app = express();
app.use(express.static("public"));

import getMatches from "./util/matches.js";

// task: Create a pagesRouter and the html routers into it

import matchesRouter from "./routers/matchesRouter.js";
app.use(matchesRouter)
import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter)

// Task: Creates a matchesRouter and put the /matches route inside of it and combine it with the server

import { homepagePage, contactPage, matchesPage } from "./util/readPages.js";

//Serverside rendering 
//At læse en side først og sætte den ind i send gør det: hurtigere, fjerner CORS problemer, mindre ressourcer brug for client rendering


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))