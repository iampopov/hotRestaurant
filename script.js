// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var tables = [1, 2, 3, 4, 5];
let reservations = [];
let waitlist = [];
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});
app.get("/reserve", function (req, res) {
})
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes:
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
})
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    characters.push(newTable);
    res.json(newTable);//send the json for the new character to the front end. over and out we are done heres your data. triggers our .then or callback.
});

app.get("/api/waitlist/:waitlist", function (req, res) {
        var chosen = req.params.tables;
        console.log(chosen);
        for (var i = 0; i < tables.length; i++) {
            if (chosen === tables[i].routeName) {
                return res.json(tables[i]);
            }
        }
        return res.json(false);
    });
    app.get("/api/waitlist", function (req, res) {
        var chosen = req.params.waitlist;
        console.log(chosen);
        return res.json(waitlist);
    });
    app.get("/api/reservations", function (req, res) {
        var chosen = req.params.reservations;
        console.log(chosen);
        return res.join(reservations);
    });
    app.post("/api/tables", function (req, res) {
        var chosen = req.params.reservations;
        if (tables.length >= 5)
            waitlist.push(chosen);
        else (reservations.push(chosen));
        for (item of reservations) {
            if (item === item) {
                return ('You already have a reservation!')
            }
        }
        for (item of waitlist) {
            if (item === item) {
                return ('You are already on the wait list!')
            }
        }
    })
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
    })
