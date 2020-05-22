const bookModel = require('../models/book');
const authorModel = require('../models/author');

const bookController = {
    listAllBooks: async(req, res) => {
        try {
            const books = await bookModel.find();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: "Somenthing went even worse" })
        }
    },

    listBook: async(req, res) => {
        try {
            const { idBook } = req.params;
            const books = await bookModel.find({ idBook });
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: "Somenthing went even worse" })
        }
    },

    addBook: async(req, res) => {
        try {
            const { singleId } = req.body;

            const author = await authorModel.findOne({singleId});
            console.log(author)
            if (!author) {
                throw ({ message: "Id not found :(" })
            }
            const { title, imagePath, datePublished } = req.body;
            const book = new bookModel({
                title,
                imagePath,
                datePublished,
                authorBook: author._id
            });

            const newBook = await book.save();

            author.books.push(newBook.toObject());
            const result = await author.save();

            return res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie: " + error.message })
        }
    },

    deleteBook: async(req, res) => {
        try {
            const { idBook } = req.params;
            const result = await bookModel.findByIdAndDelete(idBook);
            return res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie" })
        }
    },

    searchBookById: async(req, res) => {
        try {
            const { idBook } = req.params;
            const result = await bookModel.findById(idBook);
            return res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie" })
        }
    },

    updateBook: async(req, res) => {
        try {
            const { idBook } = req.params;
            const result = await bookModel.findByIdAndUpdate(idBook, {...req.body });
            return res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie" })
        }
    }
}

module.exports = bookController;