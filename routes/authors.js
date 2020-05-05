const router = require('express').Router();
const authorController = require('../controllers/author');
const bookController = require('../controllers/book');

const {
    listAuthors,
    addAuthor,
    searchAuthorById,
    updateAuthor,
    deleteAuthor
} = authorController

const {
    listBook,
    addBook,
    searchBookById,
    updateBook,
    deleteBook
} = bookController

router.route('/')
    .get(listAuthors)
    .post(addAuthor);

router.route('/:idAuthor')
    .get(searchAuthorById)
    .put(updateAuthor)
    .delete(deleteAuthor);

router.route('/:idAuthor/book')
    .get(listBook)
    .post(addBook);

router.route('/:idAuthor/book/:idBook')
    .get(searchBookById)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;