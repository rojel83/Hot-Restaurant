//Server Setup
const express = require("express");
const path = require("path");

const app = express();
const PORT1 = 8088;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data Variables
let reserved = ["test-guest-1", "test-guest-2"];
let waiting = [];
let tablesReserved = reserved.length;
let guestsWaiting = waiting.length;

//Main
app.get("/", function (req, res) {
    res.send("success");
});

//Tables
app.get("/reserved", function (req, res) {
    return res.json(reserved);
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