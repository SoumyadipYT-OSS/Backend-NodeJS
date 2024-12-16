const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("welcome to mongodb");
});


// this part is synchronous
app.get('/create', async (req, res) => {
    // this part asynchronous
    let createduser = await userModel.create({
        name: "subhasis",
        email: "subhasis@gmail.com",
        username: "subhasis2002"
    });

    res.send(createduser);
    console.log("mongodb running...");
});

app.listen(3000);