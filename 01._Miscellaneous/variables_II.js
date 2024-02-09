"use strict"; //Strict mode fanger yderligere syntax ting, som den normalt ikke ville = flere fejlbeskeder
//Den kan også fange når du bruger safed key words som f.eks.
//Her er arguments og public safed keywords du ikke kan bruge

//const arguments = 123;
// const public = 123;

//Use const whenever possible, else use let
//About const:
// const cannot be undeclared or redeclared
// but its value can be changed as long as you dont change the assingment

totalGlobalVariable = "Never EVER!!! do this!!!"

var globalVariable = "Also NEVER ever do this!!!"

//Tre forskellige scopes:
// Global scope

function someOtherScope() {
    //function scope
}

{
    // block scope
    console.log("what is this")
}

// Demostration af var scope - Den bliver false, da var ikke holder sig til sit eget scope
{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue)
}

//Dette lexically scoped - betyder at nr. 2 someValue er bundet i sit eget scope indenfor tuborg klammerne 
{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue)
}

//setTimeOut gør at den venter den antal tid man har sat, før den udfører koden - her 1000 millisekunder = 1 skund
//Prøv at få en forklaring fra chatgpt hvorfor den skriver 6 ud - noget at gøre med var og den er global
for(var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}

//Når dne bliver let køres for loopet normalt
for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}


