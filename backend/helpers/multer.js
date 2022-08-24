//file uploading into s3 bucket.
//it is not complete and changes are to be made


require("dotenv").config();
const aws = require('aws-sdk'); //simpliﬁes use of AWS Services
const multer = require('multer'); //multer is a middleware which mainly used for uploading of files.
const multerS3 = require('multer-s3'); //srreaming multer storage engine for aws s3
//configuring aws-sdk and connecting environment variables.
aws.config.update({
    secretAccessKey: process.env.ACCESS_SECRET,
    accessKeyId: process.env.ACCESS_KEY,
    region: process.env.REGION,

});
const BUCKET = process.env.BUCKET
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: BUCKET,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname)
        }
    })
});
