//importing mongoose for database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//defining file format
const singleFileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
},{timestamps: true});//timestamp gives the time when the object was created

module.exports = mongoose.model('SingleFile', singleFileSchema);
