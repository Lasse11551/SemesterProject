import "dotenv/config"
import express from "express"
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve('../client/dist')));

/* import helmet from "helmet";
app.use(helmet()); //Helps to protect Node. js Express apps from common security threats such as 
                 //Cross-Site Scripting (XSS) and click-jacking attacks */

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

  import emailRouter from "./routers/emailRouter.js"
  app.use(emailRouter);
  import authRouter from "./routers/authRouter.js"
  app.use(authRouter);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"))
  })

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080))