// Dynamic Routing
/*
    jahape, ek part harbar change hota hain, baki part or pattern 
    same rahta hain.
    Ex:

    /author/harshita
    /author/debolina
    /author/minakshi

    /basket/fruit/apple
    /basket/fruit/orange
*/


const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");
});

// yahape ':' sign hain, ye hain dynamic routing (ye variable ban chuka hain)
app.get("/profile/:username", function(req, res) {
    res.send(`welcome, ${req.params.username}`);
});

app.get("/profile/:username/:age", function(req, res) {
    res.send(`welcome, ${req.params.username}, age: ${req.params.age}`);
});


app.listen(3000, function() {
    console.log("its running");
});