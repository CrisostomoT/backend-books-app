const router = require('express').Router();
const bookController = require('../controllers/book');

const {
    listAllBooks,
    listBook,
    addBook,
    deleteBook,
    searchBookById,
    updateBook
} = bookController

router.route('/')
    .get(listAllBooks)
    .post(addBook)

router.route('/:idBook')
    .get(listBook)
    .get(searchBookById)
    .delete(deleteBook)
    .put(updateBook)


module.exports = router;