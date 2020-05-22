const router = require('express').Router();
const authorController = require('../controllers/author');

const {
    listAuthors,
    addAuthor,
    searchAuthorById,
    updateAuthor,
    deleteAuthor
} = authorController


router.route('/')
    .get(listAuthors)
    .post(addAuthor);

router.route('/:idAuthor')
    .get(searchAuthorById)
    .put(updateAuthor)
    .delete(deleteAuthor);


module.exports = router;