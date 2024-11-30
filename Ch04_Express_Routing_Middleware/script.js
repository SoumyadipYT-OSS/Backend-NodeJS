// Express.js Framework:

// Introduction to Express.js:
// express js is an npm package, it is a framework.
// it manages everything from receiving the request and giving the response

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(3000);