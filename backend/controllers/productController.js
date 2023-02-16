const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const getAllProducts = asyncHandler(async(req, res) =>{

    res.status(200).json(req.user);
})


const getProduct = asyncHandler(async(req, res) =>{

    res.status(200).json(req.product);
 })

 
const setProduct = asyncHandler(async(req, res) =>{

    res.status(200).json(req.product);
 })

 
const updateProduct = asyncHandler(async(req, res) =>{

    res.status(200).json(req.product);
 })

 
const deleteProduct = asyncHandler(async(req, res) =>{

    res.status(200).json(req.product);
 })
module.exports = {
    setProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
}