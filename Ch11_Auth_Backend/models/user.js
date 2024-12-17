const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://<username>:<password>@visitors.llmnjfd.mongodb.net`);


const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});


module.exports = mongoose.model("user", userSchema);