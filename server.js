//Server Setup
const express = require("express");
const path = require("path");
const Guest = require("./guest");

const app = express();
const PORT1 = 8088;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let guest1 = new Guest(3, "goat", "goat", "goat", "llama");
console.log(guest1);
//Data Variables
let reserve = ["test-guest-1", "test-guest-2"];
let waiting = [];

//Main
app.get("/", function (req, res) {
    res.send("success");
});

//dont look here

//Tables
app.get("/reserve", function (req, res) {
    return res.json(reserve);
});

//Tables
app.get("/tables", function (req, res) {
    return res.json(tables);
});

//Make Reservation
app.get("/waiting", function (req, res) {
    return res.json(waiting);
});


app.get("/url1", function (req, res) {
    res.sendFile(path.join(__dirname, "url1.html"));
});
app.get("/url2", function (req, res) {
    res.sendFile(path.join(__dirname, "url2.html"));
});
app.get("/url3", function (req, res) {
    res.sendFile(path.join(__dirname, "url3.html"));
});

app.listen(PORT1, function () {
    console.log("App listening on PORT " + PORT1);
});


// Table
    // ID
    // Name
    // Email
    // Phone