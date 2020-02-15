//Server Setup
const express = require("express");
const path = require("path");
const Guest = require("./guest");

const app = express();
const PORT = process.env.PORT || 8088;

// MIDDLEWEAR
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data Variables
let reserve = ["test-guest-1", "test-guest-2"];
let waiting = [];

// GUEST TESTING
let guest1 = new Guest()
//Home (index.html)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "html/index.html"));
});

//Reserve
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "html/reserve.html"));
});

//Tables
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "html/tables.html"));
});

// API CALLS
app.get("/api/reserve", function (req, res) {
    return res.json(reserve);
});

app.get("/api/waiting", function (req, res) {
    return res.json(waiting);
});

app.post("/api/guest", function (req, res) {
    
    const newguest = new Guest(req.body.name, req.body.phone, req.body.email, req.body.id);
    let alreadyReserved = false;

    for (let i = 0; i < reserve.length; i++) {
        if (newguest.id === reserve[i].id) alreadyReserved = true;
    }

    for (let i = 0; i < waiting.length; i++) {
        if (newguest.id === waiting[i].id) alreadyReserved = true;
    }

    if (!alreadyReserved) addGuest(newguest);
    res.json(alreadyReserved);

    console.log(reserve);
    console.log(waiting);

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

function addGuest(guest) {
    if (reserve.length < 5) reserve.push(guest);
    else (waiting.push(guest));
}


// Table
    // ID
    // Name
    // Email
    // Phone