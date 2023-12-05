const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Must"]
    },
    authorname: {
        type: String,
        required: [true, "AuthorName is Must"]
    },
    description: {
        type: String,
        required: [true, "Description is Must"]
    }
});
const blogModel = mongoose.model("Blog", blogSchema)

module.exports = blogModel;
