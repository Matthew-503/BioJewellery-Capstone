const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const productModel = require('../models/productModel');

string = "test"


const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const getProduct = asyncHandler(async (req, res) => {
    try {
        if (req.params.name === null || req.params.name === '' || req.params.name === undefined) {
            res.status(400)
            throw new Error('No way to determine product being searched for');
        }
        const product = await productModel.find({ name: req.params.name });
        res.status(200).json({product});
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const setProduct = asyncHandler(async (req, res, next) => {

    if (!req.body.name || !req.body.description || !req.body.price || !req.body.quantity) {
        res.status(400)
        throw new Error('Please provide all fields!')
    }

    const product = await productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
    })
    req.body.productId = product._id
    product.save();
    //For uploading images
    next();
})


const updateProduct = asyncHandler(async (req, res) => {

    res.status(200).json('Updated product');
})


const deleteProduct = asyncHandler(async (req, res) => {

    res.status(200).json('Product deleted');
})
module.exports = {
    setProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
}