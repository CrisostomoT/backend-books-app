const router = require('express').Router();
const bookController = require('../controllers/book');

const {
    listAllBooks
} = bookController

router.route('/')
    .get(listAllBooks)

module.exports = router;