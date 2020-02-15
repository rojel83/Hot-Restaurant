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
    res.sendFile(path.join(__dirname, "index.html"));
});

//Reserve
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Tables
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// API CALLS
app.get("/api/reserve", function (req, res) {
    return res.json(reserve);
});

app.get("/api/waiting", function (req, res) {
    return res.json(waiting);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// Table
    // ID
    // Name
    // Email
    // Phone