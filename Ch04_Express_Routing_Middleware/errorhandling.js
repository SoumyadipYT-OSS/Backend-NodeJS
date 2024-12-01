const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("Yee hain index page");
});

app.get("/profile", function(req, res, next) {
    return next(new Error("something went wrong"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!');
});


app.listen(3000);