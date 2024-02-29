const express = require("express");
const app = express();


app.get("/datesPage", (req, res) => {
    res.sendFile(__dirname + "/public/dates.html");
})

app.get("/dates", (req, res) => {
    const timezones = [
        "Europe/Copenhagen",   // Copenhagen Time (CET)
        "Asia/Shanghai",       // China Standard Time (CST)
        "Europe/Moscow",       // Moscow Standard Time (MSK)
        "America/New_York"       // Greenwich Mean Time (GMT)
    ];

    const dateInfos = timezones.map(timezone => {
        const dateInfo = new Date().toLocaleString("en-us", {
            timeZone: timezone,
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false // Use 24-hour format
        });
        return { timezone, date: dateInfo };
    });

    res.send({ data: dateInfos });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on PORT ", PORT));