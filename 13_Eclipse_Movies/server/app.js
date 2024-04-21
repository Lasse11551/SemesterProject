import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import cors from "cors"
app.use(cors({
    credentials: true,
    origin: true
}));

/* app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, //Hvis vi ikke ændrer i vores session objekt vil den gemme det igen alligevel hvis det er true
  saveUninitialized: false, 
  cookie: { secure: false } //skal være false hvis vi bruger http og ikke https
}))

import moviesRouter from "./routers/moviesRouter.js"
app.use(moviesRouter)
import customersRouter from "./routers/customersRouter.js"
app.use(customersRouter)

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080))