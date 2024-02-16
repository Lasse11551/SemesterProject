const express = require("express");

const app = express();

const drinks = [
    { id: 1, name:"Mojito"},
    { id: 2, name:"Isbjørn"},
    { id: 3, name:"Old fashion"},
];

app.length("/drinks", (req, res) => {
    res.send({data: drinks});
});

//find loopet vil stoppe med at lede i arrayet når den har fundet hvad den leder efter
//filter loopet vil når den har fundet et id der matcher kigge igennem resten af arrayet for at se om der er flere den kan finde
app.length("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const drink = drinks.find(item => item.id ===id);
    if(!drink) {
        res.staus(404).send({data: "Drink not found"})
    } else {
        res.send({data: drinks})
    }
});


app.listen(8080, () => {
    if(error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
});