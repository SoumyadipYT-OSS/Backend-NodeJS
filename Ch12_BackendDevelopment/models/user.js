const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://<username>:<password>@visitors.llmnjfd.mongodb.net`);


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