// loop method
// forEach, map, sort, find, reduce, filter
// undgå at bruge for each da det ikke sikrer imod referentiel transparency (Søg på google) som kan medføre side effects
//Undgå side effects - søg "side effects programming" på google

const dogs = [
    {name: "Lassie", famelevel: 13},
    {name: "Beethoven", famelevel: 8},
    {name: "Hachiko", famelevel: 18},
    {name: "Balto", famelevel: 5},
];




//  ----add famelevel of +3 for all dogs----
/*
function addFameLevel() {
    for(dog of dogs) {
        dog.famelevel = dog.famelevel + 3;
    }
}
*/

const increasedPublicityDogs = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
});

console.log(increasedPublicityDogs);



// -----task add the key male and value true----
/*
const addGenderTraitToDog = dogs.map((dog) => {
    dog.male = true;
    return dog;
})

console.log(addGenderTraitToDog);
*/

const genderedDogs = increasedPublicityDogs.map((dog) => ({
    isMale: dog.name === "Lassie" ? false : true,
    name: dog.name,
    famelevel: dog.famelevel
}))

console.log(genderedDogs)




// -----lav en "one-liner" til at fordoble disse tal-----
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((numb) => numb * 2);

//console.log(numbers)
//console.log(doubleNumbers);

numbers.map((number, index, originalArray) => console.log(number, index, originalArray));


