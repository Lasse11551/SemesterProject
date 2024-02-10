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

app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({ name: "Lasse" });
});


let balance = 100;

app.get("/wallet/:withdrawalAmount", (req, res) => {
    /* Assignment
        start with the balance of 100 in the wallet
        everytime a client calls this route the value of paymentOut should be subtracted from the balance
        if the paymentOut creates a balance below 0 then tell the client "Sorry not enough funds"
    */
   const withdrawalAmount = Number(req.params.withdrawalAmount);
   if(!withdrawalAmount) res.send({ data: "You have submitted an incorrect amount, Not a number" }) 

   if(balance-withdrawalAmount < 0) {
        res.send({ data: "Not enough funds" })
   } else {
    balance -= withdrawalAmount;
    res.send({ data: `Your new balance is ${balance}` })
   }
});

// task create a route called fillUpWallet that allows a client to fill up the wallet with the specified amount
app.get("fillUpWallet/:depositAmount", (req, res) => {
    const depositAmount = Number(req.params.depositAmount);
    if(!depositAmount) res.send({ data: "You have submitted an incorrect amount, Not a number" }) 

    balance += depositAmount;
    res.send({ data: `Your new balance is ${balance}` })
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>")
});

//http: 8080
//https: 442
//http dev: 8080
//httpsdev: 9090
app.listen(8080);