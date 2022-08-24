'use strict'
const path = require('path');
const fs = require('fs');
const SingleFile = require('../models/singlefile');
const singleFileUpload = async(req,res,next) => {
    try {
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path, 
        });
        await file.save();
        res.status(201).json("file uploaded successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getallSingleFiles = async(req,res,next) => {
    try {
        const files = await SingleFile.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteFile = async (req,res,next) => {
    try {
        console.log(req.file);
        const filePath = path.resolve(req.file.filePath);
        //fs.unlinkSync(filePath);
        console.log("file deleted successfully")
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    singleFileUpload,
    getallSingleFiles,
    deleteFile
}
