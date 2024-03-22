import express from "express";
//ændrer package.json til at indeholde "type": "module" for at kunne importere
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })) //Body parser til contactRouter

// task: Create a pagesRouter and the html routers into it

import matchesRouter from "./routers/matchesRouter.js";
app.use(matchesRouter)
import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter)
import contactRouter from "./routers/contactRouter.js"
app.use(contactRouter)

// Task: Creates a matchesRouter and put the /matches route inside of it and combine it with the server

//Serverside rendering 
//At læse en side først og sætte den ind i send gør det: hurtigere, fjerner CORS problemer, mindre ressourcer brug for client rendering

console.log(process.env.PORT) //grunden til at PORT er caps, er fordi at alle miljøvariabler skal være all caps - Det er en konstant
//Man kan sætte PORT i kommando linjen "PORT=9090 nodemon app.js"

const PORT = process.env.PORT ?? 8080; //Et problem med dette er at hvis brugeren ikke sætter porten manuelt i kommando linjen som vist ovenfor, 
//ville den ikke have en port. Derfor skriver man ?? 8080, hvis der ikke er blevet sat en port brug denne
app.listen(PORT, () => console.log("Server is running on port", PORT))