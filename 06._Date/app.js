const express = require("express")
const app = express();

//UTC
console.log(new Date());

//Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now())

//Local time - timezone
console.log(Date());

//assignment create a route with the endpoint /date that return the current date
app.get("/date", (req, res) => {
    const date = new Date();
    res.send({ data: date })
})

//assignment create a route with the endpoint /month that return the current month

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
app.get("/month", (req, res) => {
    const month = new Date().getMonth();
    res.send({ data: months[month] })
})

app.get("/monthversion2", (req, res) => {
    const monthName = new Date().toLocaleDateString("en-us", { month: "long"})
    res.send({ data: monthName})
})

app.get("/monthversion3", (req, res) => {
    const month = Date().split(" ")[1];
    res.send({ data: monthName});
})


// assignment get today on /day i will solve it with version1 technique
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
app.get("/day", (req, res) =>{
    const dayName = weekDays[new Date().getDay()];
    res.send({ data: dayName})
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));