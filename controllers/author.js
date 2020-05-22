const authorModel = require('../models/author');

const authorController = {
    listAuthors: async(req, res) => {
        try {
            const result = await authorModel.find().populate('books');
            res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie wopsie" })
        }
    },

    addAuthor: async(req, res) => {
        const { name, bornYear, country, books, singleId } = req.body;
        const author = new authorModel({
            name,
            bornYear,
            country,
            books,
            singleId
        });

        const result = await author.save();
        return res.json(result);
    },

    searchAuthorById: async(req, res) => {
        const { idAuthor } = req.params;
        console.log('hey', req.params)
        try {
            const result = await authorModel.findById(idAuthor).populate('books');
            res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "Something went oopsie wopsie" })
        }
    },

    updateAuthor: async(req, res) => {
        const { idAuthor } = req.params;
        const paramsToUpdate = {...req.body };
        const result = await authorModel.findByIdAndUpdate(idAuthor, paramsToUpdate);
        return res.json(result);
    },

    deleteAuthor: async(req, res) => {
        const { idAuthor } = req.params;
        const result = await authorModel.findByIdAndDelete(idAuthor);
        res.json(result);
    }
}

module.exports = authorController;