const router = require('express').Router();
const authorsRoutes = require('./authors');
const booksRoutes = require('./books');

//root
router.get('/', (req, res, next) => res.send("This is the home uwu"));
router.use('/author', authorsRoutes);
router.use('/book', booksRoutes);

module.exports = router;