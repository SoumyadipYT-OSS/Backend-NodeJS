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
        name: "harshita",
        email: "harshitasharma@gmail.com",
        username: "harshita2002"
    });

    res.send(createduser);
    console.log("mongodb running...");
});


app.get('/update', async(req, res) => {
                                // findOneAndUpdate(findone, update, {new: true})
    let updateduser = await userModel.findOneAndUpdate({username: "harshita2002"}, {name: "Harshita Sharma"}, {new: true});
    res.send(updateduser);
});


app.get("/read", async (req, res) => {
    let users = await userModel.find({}, {_id: 0, email: 0, __v: 0});
    res.send(users);
});


app.get("/readprivate", async(req, res) => {
    let usersPrivateId = await userModel.find({}, {_id: 1, email: 1, __v: 0});
    res.send(usersPrivateId);
});


app.get("/reademails", async (req, res) => {
    let emails = await userModel.find({}, {email: 1, _id: 0});
    res.send(emails);
})


app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "harshita2002"});
    res.send(users);
})


app.listen(3000);