//With strict mode, you can not, for example, use undeclared variables.
'use strict'

const express = require("express");
const { upload } = require("../helpers/filehelper");
const { singleFileUpload,getallSingleFiles,deleteFile } = require("../controllers/fileUploaderController");
//function is used to create a new router object
const router = express.Router();
//routes
router.post('/upload', upload.single('file'), singleFileUpload); //uploading
router.get('/list', getallSingleFiles); //viewing the uploaded files
router.delete('/delete', deleteFile);

module.exports = {
    routes: router
}
