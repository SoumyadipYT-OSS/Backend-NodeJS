const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to handle sessions
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Route to display the form
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    req.session.name = name; // Store name in session
    res.cookie('name', name, { maxAge: 900000, httpOnly: true }); // Set cookie
    res.send(`Form submitted! Name: ${name}`);
});

// Route to display session and cookie data
app.get('/data', (req, res) => {
    const sessionName = req.session.name;
    const cookieName = req.cookies.name;
    res.send(`Session Name: ${sessionName}, Cookie Name: ${cookieName}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});