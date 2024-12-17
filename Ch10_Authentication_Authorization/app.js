const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/", function(req, res) {
    let token = jwt.sign({email: "abc123@gmail.com"}, "secret");
    res.cookie("cookie", token);
    res.send("done");
});


app.get("/read", function (req, res) {
    let token = req.cookies.cookie;/*req.cookies._yourCookieName_*/
    console.log(token);
    
    let data = jwt.verify(token, "secret");
    console.log(data);        
    
    res.send("read page");
});

app.listen(3000);