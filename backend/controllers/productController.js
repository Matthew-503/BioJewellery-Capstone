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
        if (req.body._id === null || req.body._id === '' || req.body._id === undefined) {
            res.status(400)
            throw new Error('No way to determine product being searched for');
        }
        const product = await productModel.find({ _id: req.body._id });
        res.status(200).json(product);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const setProduct = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Created product' });
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