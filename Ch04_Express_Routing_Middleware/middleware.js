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

app.get("/", function(req, res) {
    res.send("This is index page");
});


app.listen(3000);