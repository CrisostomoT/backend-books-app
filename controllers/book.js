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
            const { idAuthor } = req.params;
            const books = await bookModel.find({ authorBook: idAuthor });
            // const books = await authorModel.findById(idAuthor, { books: 1 }).populate('books');
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: "Somenthing went even worse" })
        }
    },

    addBook: async(req, res) => {
        try {
            const { idAuthor } = req.params

            const author = await authorModel.findById(idAuthor);

            const { title, imagePath, datePublished } = req.body;
            const book = new bookModel({
                title,
                imagePath,
                datePublished,
                authorBook: idAuthor
            });

            const newBook = await book.save();

            author.books.push(newBook.toObject());
            const result = await author.save();

            return res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie" })
        }
    },

    deleteBook: async(req, res) => {
        const { idAuthor } = req.params;
        const result = await bookModel.findByIdAndDelete(idAuthor);
        return res.json(result);
    },

    searchBookById: async(req, res) => {
        const { idBook } = req.params;
        const result = await bookModel.findById(idBook);
        return res.json(result);
    },

    updateBook: async(req, res) => {
        const { idBook } = req.params;
        const result = await bookModel.findByIdAndUpdate(idBook, {...req.body });
        return res.json(result);
    },

    deleteBook: async(req, res) => {
        const { idAuthor, idBook } = req.params;

        const author = await authorModel.findById(idAuthor);
        author.books.pull(idBook);

        const bookDeleted = await bookModel.findByIdAndDelete(idBook);
        author.save();

        return res.json(bookDeleted);
    }
}

module.exports = bookController;