// Author: Sri Guru
// Version 0.1
const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')
const User = require('../models/userModel')
//Initializing stripe client for our account using secret key
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

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
    const user = await User.findOne({ 'email': req.body.email });
    const sessionId = req.body.sessionId;

    //get checkout session

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);

    // const receiptNumber = paymentIntent.charges.data[0].receipt_number;

    // console.log(receiptNumber);

    // Extract the line items from the checkout session object
    const orderItems = [];
    const orderTotal = 0;
    line_items = session["display_items"];
    // for item in line_items:
    //     console.log(item["description"], item["amount"])

    // stripe.checkout.sessions.listLineItems(
    //     session.id,
    //     function(err, lineItems) {
    //         for (let i = 0; i < lineItems.length; i++) 
    //         {
    //             const lineItem = lineItems[i];
    //             const item = {
    //                 name: lineItem.description,
    //                 quantity: lineItem.quantity,
    //                 price: lineItem.price.unit_amount / 100,
    //             };
    //             orderItems.push(item);
    //             orderTotal += item.price * item.quantity;
    //             console.log(lineItems);
    //         }
    //     }
    // );

    
    
    res.send({line_items});

    // const orderItems = [];
    // const orderTotal = 0;

    // //get shipping address value 
    // const shippingAddress = user.shippingAddress;

    // 
    // }
      

    // const order = await Order.create({
    //     client: user._id,
    //     shippingAddress,
    //     orderItems,
    //     orderTotal,
    //     receiptNumber
    // })

    // //saving order in database
    // await order.save()

    // res.json({ order });
})

module.exports = {
    createOrder,
    getOrder
}