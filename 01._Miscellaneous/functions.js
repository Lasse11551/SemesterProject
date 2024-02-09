//hoisting (JIT compiler) - alle declerationer bliver løftet op i toppen af scopet af javascript 
//så man kan kalde en funktion i en tidligere linje end man har lavet den
//getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

//Anonym function
const getRandomIntAnonymousFunction = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

//Arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

//task write the above arrow function as a one-liner

const getRandomIntArrowFunctionOneLiner = 
    (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

    //Callback function is any reference to executeable code that is passed as an argument to another piece of code
                            //String    //callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

// assignment write code below so that console log "alex is running"

const running = (name) => `${name} is running`;

function alexIsRunning(name, running) {
    console.log(running(name))
}

alexIsRunning("Alex", running);

//En anden måde - genbruger den generic function der blev lavet
const runningResult = genericActionPerformer("Alex", running);
console.log(runningResult);

// assignment create a single line below that print "Louis is eating"

console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));
