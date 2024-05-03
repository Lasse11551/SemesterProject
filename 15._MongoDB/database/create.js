import db from "./connection.js"

const result = await db.types.insertOne({ name: "Twister", price: 25.00 })

console.log(result)