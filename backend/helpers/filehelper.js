'use strict';
const multer = require('multer');

const storage =multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads');
    },
    filename: (req,file,cb) => {
        cb(null,new Date().toISOString().replace(/:/g,'-') + '-' + file.originalname); //returns a string in simplified extended ISO format of 24 or 27 characters long ( YYYY-MM-DDTHH:mm:ss)
    }
});

const upload = multer({storage: storage})

module.exports = {upload};
