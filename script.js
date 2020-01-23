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
<<<<<<< HEAD

//routes:
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
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
        var chosen = req.params.tables;
        console.log(chosen);
        for (var i = 0; i < tables.length; i++) {
            if (chosen === tables[i].routeName) {
                return res.json(tables[i]);
            }
        }
        return res.json(false);
});
    
//post 
app.post("/api/tables", function (req, res) {
    var chosen = req.params.reservations;


    if (tables.length >= 5) {
    waitlist.push(chosen);
    } else {
        (reservations.push(chosen));
    }
    for (item of reservations) {
        if (item === item) {
            return true;
        } else return false;
    }
    for (item of waitlist) {
        if (item === item) {
            return true;
        } else return false;
    }
})
    

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
=======
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
>>>>>>> e1871a5c6f0eb3128b02c9a7f0992357de18720d
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

<<<<<<< HEAD
app.get("/api/waitlist", function (req, res) {
    var chosen = req.params.waitlist;
    console.log(chosen);
=======
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
>>>>>>> e1871a5c6f0eb3128b02c9a7f0992357de18720d
        return res.json(waitlist);
    });
    app.get("/api/reservations", function (req, res) {
        var chosen = req.params.reservations;
        console.log(chosen);
        return res.join(reservations);
    });
<<<<<<< HEAD
=======
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
>>>>>>> e1871a5c6f0eb3128b02c9a7f0992357de18720d
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
    })
