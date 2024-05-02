import db from "./connection.js"

const isDeleteMode = process.argv.find((arg) => arg === 'delete');

if(isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS users;`)
}

//DDL

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)
`);

//DML
