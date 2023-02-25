const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get all the products added in a cart
// @route   GET /api/cart
// @access  Public
const getCartItems = asyncHandler(async (req, res) => {
    try { 
                       
        //find the cart for the user
        const cart = await Cart.find({client: req.user._id});

        if (!cart) {
            res.status(400)
        throw new Error('Cart not found for the user');
        }

        //Next step fetching the items in cart
        

    } 
    catch (error) {
        res.status(400)
        throw new Error('Unable to get the cart items you are looking for');
    }
})

// @desc    Add Item to cart
// @route   POST /api/cart
// @access  Public
const addToCart = asyncHandler(async (req, res) => {


    res.status(200).json({ message: 'Item added to cart' });
})

// @desc    update cart items 
// @route   PUT /api/cart/:productId
// @access  private
const updateCart = asyncHandler(async (req, res) => {

    
    res.status(200).json('Cart items Updated');
})

// @desc    delete an item in cart
// @route   DELETE /api/cart/:productId
// @access  private
const deleteCartItems = asyncHandler(async (req, res) => {

   

    res.status(200).json('Items Removed from cart');
})
module.exports = {
    addToCart,
    updateCart,
    deleteCartItems,
    getCartItems
}