import express from 'express'
const app = express();
//const path = require('path')

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/loginAndSignup/loginAndSingup.html")
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT))