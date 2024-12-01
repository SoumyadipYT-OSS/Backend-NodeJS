/*
    session cookie
        
    hum log kuch bhi data frontend par browser par rakh skte hain
    and jab bhi aap kuchh bhi request backend par karoge wo fe par 
    saved data automatically backend par chala jaayega.
*/

// form handling and working with the forms
// handle backend process of forms and making sure the data coming 
// from any frontend lib, fw, templating engines, we still handle it at the backend

const express = require('express');
const app = express();

app.use(express.json());
// urlencoded: it is a built-in middleware function
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("index page hain yee");
});

app.get("/about", function(res, req) {
    res.send("about page hain yein");
});

app.get("/profile", function(req, res, next) {
    return next(new Error("Not implemented"));
});