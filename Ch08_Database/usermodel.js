const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://soumyadipmajumder13055:1234@visitors.llmnjfd.mongodb.net/?retryWrites=true&w=majority&appName=Visitors');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
});


module.exports = mongoose.model("user", userSchema);