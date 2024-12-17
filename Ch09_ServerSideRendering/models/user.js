const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://<username>:<password>@visitors.llmnjfd.mongodb.net/');

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
});


module.exports = mongoose.model('user', userSchema);