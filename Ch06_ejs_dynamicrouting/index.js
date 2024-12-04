const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// passing view engine as the ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("index");    // automatically fetch index.ejs
});

app.listen(3000, function() {
    console.log("its running");
});