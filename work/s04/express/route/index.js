/**
 * General routes.
 */
"use strict";

var express = require('express');
var router  = express.Router();

// Add a route for the path /
router.get('/', (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("About something");
});

// Add a route for lotto
router.get("/lotto", (req, res) => {
    let data = {};
    data.numbers = [];

    //Random 7 unique numbers between 1 and 35 and sort them
    for (let i = 0; i < 7; i++) {
        while (true) {
            var randomNbr = Math.floor(Math.random() * 35) + 1;
            if (data.numbers.includes(randomNbr) === false) {
                data.numbers[i] = randomNbr;
                break;
            }
        }
    }

    data.numbers.sort(function(a, b) {
        return a - b;
    });

    res.render("lotto", data);
});

module.exports = router;