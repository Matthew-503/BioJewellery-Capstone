//Notes: Calculate total price for order
//for creating order, it will be from cart page
//cart has the total amount
//order creating page: edit prepopulated address or enter new one, verify the order summary, proceed for payment
//Order object receives products, qty, total from cart object, attaches address and proceed for payment

const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')

// @desc    Get order
// @route   GET /api/order/:orderId
// @access  Private
const getOrder = asyncHandler(async (req, res) => {   
    //Finding the order based on orderId
    const order = Order.findById(req.params.orderId)

    if(!order){
        res.status(400)
        throw new Error('Sorry the order is not found')
    }

    res.status(200).json(order)    
})

// @desc    Create an order
// @route   POST /api/cart/:cartId/order
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