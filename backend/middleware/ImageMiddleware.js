//for images
const multer = require('multer')
const asyncHandler = require('express-async-handler')
const productImageModel = require('../models/productImageModel');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname)
    }
})


const upload = multer({storage:storage})



module.exports = { upload }