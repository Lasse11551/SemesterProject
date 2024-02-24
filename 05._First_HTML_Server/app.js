const express = require("express");
const app = express();

console.log(__dirname) //dubder - double under - giver den mappe du står i eller den som filen er i

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
})

// assignment: Create a new route called publicsquare that serves publicSquare.html
app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html")
});

//task take a name from the query string and greet the person if you know them
//Task otherwise say, "hello stranger"

const knownNames = ["Lasse", "Alice"]

app.get("/greeting", (req, res) => {
    const providedName = req.params.name;
    if(knownNames.includes(providedName)) {
        res.send({ data: "Hello " + providedName })
    } else {
        res.send({ data: "Hello stranger" })
    }
})

app.get("/knownpeople", (req, res) => {
    res.send({ data: knownNames.length})
})

app.listen(8080, () => console.log("Server is running on port", 8080))