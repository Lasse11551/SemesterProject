import db from "./connection.js"

const result = await db.types.updateOne({ name: "Twister"}, { $set: { price: 10}})

console.log(result);