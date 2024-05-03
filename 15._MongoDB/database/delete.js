import db from "./connection.js"

const result = await db.types.deleteOne({ name: "Gelatto"})

console.log(result)