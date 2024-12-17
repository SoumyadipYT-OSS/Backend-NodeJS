const express = require('express');
const userModel = require("./models/user.js");
const postModel = require("./models/post.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hey");
});


app.get("/create", async function (req, res) {
    try {
        let user = await userModel.create({
            username: "harsh",
            age: 25,
            email: "harsh@gmail.com"
        });

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});




app.get("/post/create", async function (req, res) {
    let post = await postModel.create({
        postdata: "namaste hindusthan walo",
        user: "6761dc298fa128d63ac95e4a"
    });

    let user = await userModel.findOne({_id: "6761dc298fa128d63ac95e4a"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});

    res.send(post);
});


app.listen(3000);