console.log("Hello World");
//We will always default to using const
const myName = "Lasse";

const me = {};
me.name = myName;
//console.log(me);
//const is constant NOT in the value but in the assignment
//meaning that it cannot be reassigned and thus also HAS to be assigned

//SyntaxError: Missing initializer in const desclaration
//const test;

const hobbies = ["coding", "eating"];

hobbies.push("sleeping");

//hobbies = [];
//hobbies = ""; man kan ikke ændre datatypen på en const 

me.hobbies = hobbies;
//console.log(me);

//Types in JS: number, string, boolean, null, undefined, symbol, bigint

//Object: object, arrays, date

//type coercion

//We ALWAYS use strict equality checks:
// === and !==