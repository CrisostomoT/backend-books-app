const mongoose = require('mongoose');

const initMongo = () => {
    mongoose.connect(
        process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('Connected to MongoDB')
    );
}

module.exports = {
    initMongo
}