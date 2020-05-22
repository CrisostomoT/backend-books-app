const { Schema, Types, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    datePublished: {
        type: Number,
        required: true
    },
    authorBook: {
        type: Types.ObjectId,
        ref: "author"
    }
});

const Book = model('book', BookSchema);

module.exports = Book;