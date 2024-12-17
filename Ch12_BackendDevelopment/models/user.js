const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://soumyadipmajumder13055:1234@visitors.llmnjfd.mongodb.net`);


const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

module.exports = mongoose.model("user", userSchema);