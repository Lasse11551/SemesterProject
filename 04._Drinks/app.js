const express = require("express");

const app = express();

const drinks = [
    { id: 1, name:"Mojito"},
    { id: 2, name:"Isbjørn"},
    { id: 3, name:"Old fashion"},
];

app.get("/drinks", (req, res) => {
    res.send({data: drinks});
});

//find loopet vil stoppe med at lede i arrayet når den har fundet hvad den leder efter
//filter loopet vil når den har fundet et id der matcher kigge igennem resten af arrayet for at se om der er flere den kan finde
app.get("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const drink = drinks.find(item => item.id ===id);
    if(!drink) {
        res.staus(404).send({data: "Drink not found"})
    } else {
        res.send({data: drinks})
    }
});

app.post("/drinks", (req, res) => {
    const newDrink = req.body; // Assuming the drink data is sent in the request body
    drinks.push(newDrink);
    res.status(201).send({ data: newDrink });
})

app.put("/drinks/:drink/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedDrink = req.body; // Assuming the updated drink data is sent in the request body
    const index = drinks.findIndex(item => item.id === id);
    if (index !== -1) {
        drinks[index] = { ...drinks[index], ...updatedDrink };
        res.send({ data: drinks[index] });
    } else {
        res.status(404).send({ data: "Drink not found" });
    }
})

app.patch("/drinks/:drink/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedProperties = req.body; // Assuming the updated properties are sent in the request body
    const index = drinks.findIndex(item => item.id === id);
    if (index !== -1) {
        drinks[index] = { ...drinks[index], ...updatedProperties };
        res.send({ data: drinks[index] });
    } else {
        res.status(404).send({ data: "Drink not found" });
    }
})

app.delete("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = drinks.findIndex(item => item.id === id);
    if (index !== -1) {
        const deletedDrink = drinks.splice(index, 1);
        res.send({ data: deletedDrink });
    } else {
        res.status(404).send({ data: "Drink not found" });
    }
})


app.listen(8080, () => {
    if(error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
});