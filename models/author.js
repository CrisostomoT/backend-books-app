const { Schema, Types, model } = require('mongoose');

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bornYear: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    books: [{
        type: Types.ObjectId,
        ref: "book"
    }]
});

const Author = model('author', AuthorSchema);

module.exports = Author;