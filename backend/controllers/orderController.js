// Author: Sri Guru
// Version 0.1
const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')
const User = require('../models/userModel')


// @desc    Get order
// @route   GET /api/order/:orderId
// @access  Private
const getOrder = asyncHandler(async (req, res) => {   
    //Finding the order based on orderId
    const order = await Order.findById(req.params.orderId)

    if(!order){
        res.status(400)
        throw new Error('Sorry the order is not found')
    }

    res.status(200).json(order)    
})

// @desc    Create an order
// @route   POST /api/order
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    
    
    //user
    const user = await User.findById(req.body.userId)

    //find the cart for the order
    const cart = Cart.findById(req.body.cartId)

    //throw error if no cart exists by that id
    if(!cart){
        res.status(400)
        throw new Error('Sorry, cart not found')
    }

    //get default address value 
    const shippingAddress = user.defaultAddress

    //start date will be current date
    const startDate = new Date()

    //generating tracking number
    const trackGen = () => {
        const prefix = 'BJ'
        const rand = Math.floor(Math.random() * 100000000) //a random 8 digit num
        const val = prefix + rand.toString().padStart(8, '0') //id of 10 chars
        return val
    }

    const trackingNumber = trackGen()

    const order = await Order.create({
        client: user._id,
        cart,
        shippingAddress,
        startDate,
        trackingNumber
    })

    //saving order in database
    await order.save()

    res.status(200).json({ message: 'Order Created' });
})

// @desc    update an existing Order 
// @route   PATCH /api/order/:orderId
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {

    //finding the order that needs to be updated
    const order = await Order.findById(req.params.orderId)

    //throw error if no order exists by that id
    if(!order){
        res.status(400)
        throw new Error('Sorry, order not found')
    }

    //check if the account trying to update order is same as the account placed order
    if(order.client.toString() !== req.user._id.toString()){
        res.status(400)
        throw new Error('Not authorized to update this order')
    }

    //if order is shipped or completed
    if(order.status !== 'P')
    {
        res.status(400)
        throw new Error('Cannot change shipping address for this order')
    }

    //set the shipping address field to the new value, if new val is null set the default existing value
    order.shippingAddress = req.body.newAddress ?? order.shippingAddress

    //save updated order to database
    await order.save()
    
    res.status(200).json({message: 'Order Updated'});
})

// @desc    Cancel an order
// @route   DELETE /api/order/:orderId
// @access  Private
const cancelOrder = asyncHandler(async (req, res) => {

   //finding the order that needs to be removed
   const order = await Order.findById(req.params.orderId)

   //throw error if no order exists by that id
   if(!order){
       res.status(400)
       throw new Error('Sorry, order not found')
   }

   //check if the account trying to cancel order is same as the account placed
   if(order.client.toString() !== req.user._id.toString()){
       res.status(400)
       throw new Error('Not authorized to cancel this order')
   }

   //check if order is shipped or completed
   if(order.status !== 'P'){
       res.status(400)
       throw new Error('Sorry, order cannot be canceled')
   }

   //Remove review from database
   await order.remove()

    res.status(200).json({message: 'Order Canceled'});
})
module.exports = {
    createOrder,
    updateOrder,
    cancelOrder,
    getOrder
}