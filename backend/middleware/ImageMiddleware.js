/**
 * This is a middleware function using Multer package to handle product image file uploads
 *
 * Author: Nick, Sri, Naomy, Matthew, Buola
 * Version: 0.1
 * Date: 31-03-2023
 */
// const multer = require('multer')
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

const multer = require('multer');
const express = require('express');
const path = require('path');

const app = express();

//destination folder for image files, created at the backend
// const upload = multer({ dest: 'uploads/' });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        let filetypes = /jpeg|jpg|png/;
        let mimetype = filetypes.test(file.mimetype); //mimetype will give the type of file
        let extname = filetypes.test(path.extname(file.originalname).toLowerCase())   //here it will grab the ext of file 
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        else{
            cb('Error: File upload only supports the following file types: '+filetypes);
        }
    }
}).single('productpic')

//For accessing image files in the backend/uploads from client side capstone
app.use(express.static(path.join(__dirname, 'uploads')));

//Function to handle file upload request
const uploadImage = (req, res) => {

    const middleware = storage.single('image');

    middleware(req, res, function(err) {
        if (err)
        {            
            res.status(500).send(err.message);
        } 
        else 
        {
            //sending file name is success(to be changed)
        res.send(`Uploaded file: ${req.file.filename}`);
        }
    });
}


module.exports = {
    uploadImage
}