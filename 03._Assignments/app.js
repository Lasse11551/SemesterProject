//const express = require("express");
//const app = express();

const app = require("express")();

//The "database"
const drinks = [
    { id: 1, name: "Martini" },
    { id: 2, name: "White russian" },
    { id: 3, name: "Mojito" }
  ];

//route
        //endpoint
                    //callback function
                    //request response
app.get("/drink", (req, res) => {
    res.send(drinks)
})

app.get("/drink/:drinkId", (req, res) => {
    const id = parseInt(req.params.drinkId)
    const drink = drinks.find(item => item.id === id)

    if(drink) {
        res.send(drink)
    } else {
        res.status(404).send("Could not find the drink")
    }
})




app.listen(8080);