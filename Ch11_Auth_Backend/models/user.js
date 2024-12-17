const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://soumyadipmajumder13055:1234@visitors.llmnjfd.mongodb.net`);


const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});


module.exports = mongoose.model("user", userSchema);