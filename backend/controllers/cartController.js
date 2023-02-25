const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get all the products added in a cart
// @route   GET /api/cart
// @access  Public
const getCartItems = asyncHandler(async (req, res) => {
    try { 
                       
        //find items added in cart
        const items = await Cart.find();
        res.status(200).json(items);
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

    if (!rating || !title || !comment ) {
      res.status(400)
      throw new Error('Please provide all fields!')
    }

    //Check if review already posted for the product by the user
    const reviewExists = product.reviews.find((rev) => 
                                rev.client.toString() === req.user._id.toString())
    
    if(reviewExists){
        res.status(400)
        throw new Error('Product already reviewed!');
    }
                                
    //adding item cart
    

    res.status(200).json({ message: 'Cart Created' });
})

// @desc    update cart items 
// @route   PUT /api/cart/:productId
// @access  public
const updateCart = asyncHandler(async (req, res) => {

    
    res.status(200).json('Cart Updated');
})

// @desc    delete an item in cart
// @route   DELETE /api/cart/:productId
// @access  Public
const deleteCartItems = asyncHandler(async (req, res) => {

   

    res.status(200).json('Review Removed');
})
module.exports = {
    addToCart,
    updateCart,
    deleteCartItems,
    getCartItems
}