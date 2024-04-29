import db from "./connection.js"
// assignment : create volcanoes table, define the SQL below

console.log(process.argv)

const isDeleteMode = process.argv.find((arg) => arg === 'delete');

if(isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes;`)
    await db.run(`DROP TABLE IF EXISTS villages;`)
}

//DDL - Data definition language

await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN,
    type TEXT CHECK( type IN ('Caldera', 'Pointy', 'Flat', 'Underground', 'Underwater', 'Super Volcanoe'))
)
`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcanoe_id INTEGER,
    FOREIGN KEY (volcanoe_id) REFERENCES villages(id)
)
`);


// assignment Create some rows in volcanoes and villages
//DML
//seeding
if(isDeleteMode){
    db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES('Mount St. Helens', TRUE, 'Caldera')`);
    db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES('Krakatoa', FALSE, 'Super Volcanoe')`);
    db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Village 1', 1)`)
    db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Village 2', 2)`)
}