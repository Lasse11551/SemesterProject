import "dotenv/config"
import express from "express"
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve('../client/dist')));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("..client/dist/index.html"))
  })

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", 8080))