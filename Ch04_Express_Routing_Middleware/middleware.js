/*
    Middleware:
        Middleware in JavaScript, particularly in the context of web development 
        with frameworks like Express.js, refers to functions that have access to 
        the request object (req), the response object (res), and the next middleware 
        function in the application’s request-response cycle. These functions can 
        execute any code, make changes to the request and response objects, end the 
        request-response cycle, and call the next middleware function.
*/


const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log('middleware chala');
    next();
});

app.use(function(req, res, next) {
    console.log('middleware yee dusra bar chala');
    next();
});

app.get("/", function(req, res) {
    res.send("Yee index page hain");
});

app.get("/about", function(req, res) {
    res.send("Yee about page hain");
});


app.listen(3000);