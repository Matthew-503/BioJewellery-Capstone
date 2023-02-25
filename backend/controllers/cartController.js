const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get all the products added in a cart
// @route   GET /api/cart
// @access  Private
const getCartItems = asyncHandler(async (req, res) => {
    try { 
                       
        //find the cart for the current user
        const cart = await Cart.find({client: req.user._id});

        if (!cart) {
            res.status(400)
        throw new Error('Cart not found for the user');
        }

        //Next step fetching the items in cart
        // take each product object in products array, 
        //extract the id and saves it in a new array of product ids, helps to retrieve the whole product info
        const productIds = cart.products.map((product) => product.productId);

        //finding full product info for the products in cart
        //Using $in operator to match any of the values in productIds array
        const products = await Product.find({ _id: { $in: productIds } });

        //Combining the quantity and full product data into a single array of objects
        //retrieving the product data fully and attaching it with quantity 
        //makes it easier in front end to display additional info like desc and images for the user to identify.
        const cartItems = cart.products.map((product) => 
        {   
            const productData = products.find((p) => p._id.equals(product.productId));
            return { product: productData,
                quantity: product.quantity };
        });
        res.status(200).json(cartItems);
    } 
    catch (error) {
        res.status(400)
        throw new Error('Unable to get the cart items you are looking for');
    }
})

// @desc    Create cart
// @route   POST /api/cart
// @access  Private
const createCart = asyncHandler(async (req, res) => {
    
//current user for which the cart has to be created
const user = await User.findById(req.user._id)

//Getting product and its quantity to add in cart
const { productId, quantity } = req.body

//Check if the product exists
const product = await Product.findById(productId)

if(!product){
    res.status(400)
    throw new Error('Sorry, Product not found')
}

//Check if we have stock of the requested product
if(!product.isAvailable){
    res.status(400)
    throw new Error('Sorry, Product is out of stock. Visit later')
}

//Check if we have enough stock to let the user add the requested quantity of product in cart
if(quantity > product.quantity ){
    res.status(400)
    throw new Error('Sorry, we are running low, Requested quantity is unavailable')
}

//creating cart for user if they don't have one
let cart = await Cart.findOne({client: user._id})
if(!cart){
    cart = await Cart.create({
    client: user._id,
    products: []
    });
}

//if the product is already added to the cart, just updating the quantity
const existingProductIndexVal = await Cart.products.findIndex((product) =>
    product.productId.toString() === productId
)

//if the product doesn't exist in cart, the index value is -1
if(existingProductIndexVal === -1){
    cart.products.push({
        productId,
        quantity
    })
}else{
    //if the product already added, update just the quantity
    cart.products[existingProductIndexVal].quantity += quantity;
}

//saving cart info to DB
await cart.save()

    res.status(200).json({ message: 'Cart created' });
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
    createCart,
    updateCart,
    deleteCartItems,
    getCartItems
}