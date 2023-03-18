
const asyncHandler = require('express-async-handler');
//for images
const multer = require('multer')
const productImageModel = require('../models/productImageModel');
const fs = require('fs');


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../uploads/')
    },
    filename: (req,file,cb) =>{
        cb(null, file.originalname)
    }
})


const upload = multer({storage:storage})



const setProductImage = asyncHandler(async (req, res) => {
    
    try {
        let productId = req.body.productId

        const productImage = {
            
            source: {
                data: fs.readFileSync(path.join('../uploads/' + req.file.filename)),
                contentType: 'image/png'
            },
            product:  req.body.productId
        }
    
        productImageModel.create(productImage);
    } catch (error) {
        res.status(400)
        throw new Error('Image didnt load')
    }
    

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