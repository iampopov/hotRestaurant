// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// var reserve = [1, 2, 3, 4, 5];
let reservations = [];
let waitlist = [];

//routes:
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})
app.get("/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
})

//display all
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "api/index.html"));
});
app.get("/reserve", function (req, res) {
    res.json(path.join(__dirname, "api/reserve.html"))
})
app.get("/waitlist", function (req, res) {
    res.json(path.join(__dirname, "api/waitlist.html"))
});

//display single 
app.get("/api/waitlist/:waitlist", function (req, res) {
        var chosen = req.params.reserve;
        console.log(chosen);
        for (var i = 0; i < reserve.length; i++) {
            if (chosen === reserve[i].routeName) {
                return res.json(reserve[i]);
            }
        }
        return res.json(false);
});
    
//post 
// app.post("/api/reserve", function (req, res) {
//     var chosen = req.params.reservations;

//     console.log(chosen);



// })
    

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable.name);
    // reservations.push(newTable);
    
    if (reservations.length >= 5) {
        waitlist.push(newTable);
    } else {
        (reservations.push(newTable));
    }

    for (var i = 0; i < reservations.length; i++) {
        if (newTable.name === reservations[i].name) {
            console.log("match found");
        }
    }
    for (var i = 0; i < waitlist.length; i++) {
        if (newTable.name === waitlist[i].name) {
            console.log("match found");
        }
    }

    // for (item of reservations) {
    //     if (item === item) {
    //         return true;
    //     } else return false;
    // }
    // for (item of waitlist) {
    //     if (item === item) {
    //         return true;
    //     } else return false;
    // }
    console.log(reservations);

        res.json(newTable);//send the json for the new character to the front end. over and out we are done heres your data. triggers our .then or callback.
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
    
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
})