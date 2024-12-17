const express = require('express');
const path = require('path');
const app = express();
const userModel = require('./models/user.js');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
});


/*  C -> CREATE  */
app.post('/create', async (req, res) => {
    let {name, email, image} = req.body;

    let createdUser = await userModel.create({
        name,
        email,
        image
    });

    res.redirect("/read");
});


/*  R -> READ  */
app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render("read", {users});
});



/*  U -> UPDATE  */
app.get('/edit/:userid', async(req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user});
});

app.post('/update/:userid', async(req, res) => {
    let {name, email, image} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {name, email, image}, {new:true});
    res.redirect("/read");
});


/*  D -> DELETE  */
app.get('/delete/:_id', async (req, res) => {
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})

app.listen(3000);