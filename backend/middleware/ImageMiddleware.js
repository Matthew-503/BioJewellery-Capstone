//for images
const multer = require('multer');
const path = require('path');

// const asyncHandler = require('express-async-handler')
// const productImageModel = require('../models/productImageModel');
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads')
//     },
//     filename: (req,file,cb) =>{
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({storage:storage})
// module.exports = { upload }

//Multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
            cb(null, true);
        } else{
            cb(new Error("Sorry file type is not supported"), false);
        }
        
    }
});