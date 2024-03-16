// Coercion med Arithmetic Operators
console.log(5 + '5');  // '55', fordi number 5 bliver coerced til en string
console.log(10 - '3'); // 7, fordi stringen '3' bliver coerced til et number

//Coercion med Comparison Operators
console.log(10 == '10');  // true, fordi værdierne er coerced til den samme type med lise equality
console.log(10 === '10'); // false, fordi strict equality checker både værdier og type

//Coercion med Logical Operators
console.log(0 || 'hello');    // 'hello', fordi 0 false og 'hello er true
console.log('' && 'world');   // '', fordi '' er false og short circuting forhindrer evaluering af 'world'

//Coercion med Boolean Operators
console.log(Boolean(''));     // false, fordi en tom string er falsy
console.log(Boolean(0));      // false, fordi 0 er falsy
console.log(Boolean('hello')); // true, fordi ikke tomme stringe er true

//Coercion med Equality Operators and Objects
let obj = {};
console.log(obj == '[object Object]');  // true, fordi objekter bliver coerced til strings