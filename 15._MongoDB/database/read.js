import db from "./connection.js"

const allIceCreams = await db.types.find().toArray();
//const costlyIceCream = await db.types.find({ price: { $gt: 20}}).toArray();

console.log(allIceCreams);
//console.log(costlyIceCream);

/* const firstIceCreamBrand = await db.brands().findOne();
console.log(firstIceCreamBrand) */