const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get order
// @route   GET /api/order
// @access  Private
const getOrder = asyncHandler(async (req, res) => {
    try { 
        

    } 
    catch (error) {
        
    }
})

// @desc    Create an order
// @route   POST /api/order
// @access  Private
const createOrder = asyncHandler(async (req, res) => {


    res.status(200).json({ message: 'Order Created' });
})

// @desc    update an existing Order 
// @route   PUT /api/order/:orderId
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {

    
    res.status(200).json('Order Updated');
})

// @desc    delete an existing order
// @route   DELETE /api/order/:orderId
// @access  Private
const deleteOrder = asyncHandler(async (req, res) => {

   

    res.status(200).json('Order Deleted');
})
module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder
}