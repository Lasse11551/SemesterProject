const express = require("express");
const app = express();

console.log(__dirname) //dubder - double under - giver den mappe du står i eller den som filen er i

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
})

// assignment: Create a new route called publicsquare that serves publicSquare.html
app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "public/publicSquare/publicSquare.html")
});

app.listen(8080, () => console.log("Server is running on port", 8080))