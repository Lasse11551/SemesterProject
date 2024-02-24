const express = require("express");

const app = express();

app.use(express.json());

const drinks = [
    { id: 1, name:"Mojito"},
    { id: 2, name:"Isbjørn"},
    { id: 3, name:"Old fashion"},
];

let currentId = 3;

app.get("/drinks", (req, res) => {
    res.send({data: drinks});
});

//find loopet vil stoppe med at lede i arrayet når den har fundet hvad den leder efter
//filter loopet vil når den har fundet et id der matcher kigge igennem resten af arrayet for at se om der er flere den kan finde
app.get("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const drink = drinks.find(item => item.id ===id);
    if(!drink) {
        res.staus(404).send({ error: "Drink not found"})
    } else {
        res.send({data: drinks})
    }
});

app.post("/drinks", (req, res) => {
    const newDrink = req.body; // Assuming the drink data is sent in the request body
    newDrink.id = ++currentId; //prefix increment id ved at sætte "++" foran ellers ville id stadig være 3 eller brug nextId++
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

app.patch("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedProperties = req.body; // Assuming the updated properties are sent in the request body
    const index = drinks.findIndex(item => item.id === id);
    if (foundDrinkIndex === -1) {
        res.status(404).send({ error: `Drink not found by id: ${id}` });
    } else {
        const originalDrink = drinks[index];
        const drinkToUpdate = { ...originalDrink, ...updatedProperties, id: id };
        drinks[index] = drinkToUpdate
        res.send({ data: drinkToUpdate });
    }
})

app.delete("/drinks/:id", (req, res) => {
    //findIndex, ret index / -1, splice
    const id = Number(req.params.id);
    const foundDrinkIndex = drinks.findIndex((drink) => drink.id === id);
    if (foundDrinkIndex === -1) {
        res.status(404).send({ error: `Drink not found by id: ${id}` });
    } else {
        const deletedDrink = drinks.splice(foundDrinkIndex, 1);
        res.send({ data: deletedDrink });
    }
})


app.listen(8080, () => {
    if(error) {
        console.log("Error starting the server")
    }
    console.log("Server is running on port", 8080)
});