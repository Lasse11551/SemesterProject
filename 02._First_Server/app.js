//const express = require("express");
//const app = express();

const app = require("express")();

//route
        //endpoint
            //callback function
            //request, response
app.get("/", (req, res) => {
    res.send({ data: "Welcome" });
});

//en route med sencondRoute som endpoint
app.get("/secondRoute", (req, res) => {
    res.send({ data: [1, 2, 3, 4] })
});

// assignment create a third route with the endpoint thirdRoute

app.get("/thirdRoute", (req, res) => {
    res.send({ name: "Lasse" })
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>")
});

//http: 8080
//https: 442
//http dev: 8080
//httpsdev: 9090
app.listen(8080);