'use strict';
//mongodb database connection
const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect('mongodb://localhost/upload-files-database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('connected to MongoDB'));
}