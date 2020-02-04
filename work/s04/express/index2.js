/**
 * A sample Express server.
 */
"use strict";

// Enable server to run on port selected by the user selected
// environment variable DBWEBB_PORT
const port = process.env.DBWEBB_PORT || 1337;

// Set upp Express server
const express = require("express");
const app = express();

const middleware = require("./middleware/index.js");
app.use(middleware.logIncomingToConsole);

const routeIndex = require("./route/index.js");
app.use("/", routeIndex);

// This is middleware called for all routes.
// Middleware takes three parameters.
// Its callback ends with a call to next() to proceed to the next
// middleware, or the actual route.
app.use((req, res, next) => {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
});

// Add a route for the path /
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
app.get("/about", (req, res) => {
    res.send("About something");
});

// Start up server and begin listen to requests
app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);

    // Show which routes are supported
    console.info("Available routes are:");
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            console.info(r.route.path);
        }
    });
});

function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route){
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if(middleware.name === "router") {
            // Routes added as router middleware 
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}