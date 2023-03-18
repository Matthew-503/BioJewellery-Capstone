
const asyncHandler = require('express-async-handler');
//for images
const multer = require('multer')
const productImageModel = require('../models/productImageModel');
const fs = require('fs');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname)
    }
})


const upload = multer({storage:storage})



const setProductImage = asyncHandler(async (req, res) => {
    

    let productId = req.body.productId

    const productImage = {
        
        source: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        product:  req.body.productId
    }

    productImageModel.create(productImage);

    res.status(200).json({ message: req.body.productId });
})

const getProductImage = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Created product' });
})

const deleteProductImage = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Created product' });
})

const updateProductImage = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Created product' });
})

module.exports = {
    setProductImage,
    getProductImage,
    deleteProductImage,
    updateProductImage
}