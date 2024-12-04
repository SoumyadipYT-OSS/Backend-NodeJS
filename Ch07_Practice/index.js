const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    fs.readdir(`./files`, function(err, files) {
        res.render("index", {files: files});
    });
});

app.get('/file/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });
});

app.post('/create', function(req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err) {
        res.redirect("/");
    });
});

app.get('/edit/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        res.render('edit', { filename: req.params.filename, filedata: filedata });
    });
});

app.post('/edit/:filename', function(req, res) {
    fs.writeFile(`./files/${req.params.filename}`, req.body.details, function(err) {
        if (err) {
            return res.status(500).send("Error updating file");
        }
        res.redirect("/");
    });
});

app.post('/delete/:filename', function(req, res) {
    fs.unlink(`./files/${req.params.filename}`, function(err) {
        if (err) {
            return res.status(500).send("Error deleting file");
        }
        res.redirect("/");
    });
});

app.listen(3000, function() {
    console.log("its running");
});
