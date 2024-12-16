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
        name: "dishantyadav",
        email: "dishantyadav@gmail.com",
        username: "dishant2003"
    });

    res.send(createduser);
    console.log("mongodb running...");
});


app.get('/update', async(req, res) => {
                                // findOneUpdate(findone, update, {new: true})
    let updateduser = await userModel.findOneUpdate({username: "subhasis2002"}, {name: "Subhasis Majee"}, {new: true});
    res.send(updateduser);
})

app.listen(3000);