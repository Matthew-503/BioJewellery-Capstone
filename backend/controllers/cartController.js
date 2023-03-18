// Author: Sri Guru
// Version 1.0
const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
const User = require('../models/userModel')
const Cart = require('../models/cartModel')

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

        //fetching the items in cart
        //extracting productIds to find the product details
        const productIds = cart.products.map((product) => product.productId);

        //Using $in operator to match any of the values in productIds array
        const products = await Product.find({ _id: { $in: productIds } });

        //Combining the quantity and full product data into a single array of product objects
        //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
        const cartItems = cart.products.map((product) => 
        {   
            const productData = products.find((p) => p._id.equals(product.productId));
            return { product: productData, quantity: product.quantity };
        });

        const subTotal = cart.subTotal

        //returning cart items and subtotal
        res.status(200).json({cartItems, subTotal});
    } 
    catch (error) {
        res.status(400)
        throw new Error('Unable to get the cart items you are looking for');
    }
})

// @desc    Add Item to cart
// @route   POST /api/cart
// @access  Private
const addItemToCart = asyncHandler(async (req, res) => {
    
//current user for which the cart has to be created
const user = await User.findById(req.user._id)

//Getting product from front end to add in cart
const { productId } = req.body

//Check if the product exists
const product = await Product.findById(productId)

if(!product){
    res.status(400)
    throw new Error('Sorry, Product not found in database')
}

//Check if we have stock of the requested product
if(!product.isAvailable){
    res.status(400)
    throw new Error('Sorry, Product is out of stock. Visit later')
}

//creating cart for user if they don't have one
let cart = await Cart.findOne({client: user._id})
if(!cart){
    cart = await Cart.create({
    client: user._id,
    products: []
    });
}

//if the product is already added to the cart, just updating the quantity and subtotal

const existingProductIndexVal = cart.products.findIndex((product) =>
    product.productId.toString() === productId
)

//If the product is new to cart, just add it
if(existingProductIndexVal === -1){
    cart.products.push({
        productId,
        quantity
    })}

//if the product already added, update the quantity
//Check if we have enough stock to let the user add the quantity of product in cart
let expectedQuantity = cart.products[existingProductIndexVal].quantity + 1;
if( expectedQuantity > product.quantity ){
    res.status(400)
    throw new Error('Sorry, we are running low, Requested quantity is unavailable')
}

cart.products[existingProductIndexVal].quantity += 1;

//saving cart info to DB
await cart.save()

//fetching the items in cart
//extracting productIds to find the product details
const productIds = cart.products.map((product) => product.productId);

//Using $in operator to match any of the values in productIds array
//if match, returning the product object of that id
const products = await Product.find({ _id: { $in: productIds } });

//Combining the quantity and full product data into a single array of product objects
//attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
const cartItems = cart.products.map((product) => 
{   
    const productData = products.find((p) => p._id.equals(product.productId));
    return { product: productData, quantity: product.quantity };
});

res.status(200).json({ cartItems });

})

//Func to add quantity (+)
// @desc    update existing item quantity by adding 1 in cart
// @route   PATCH /api/cart/:productId
// @access  private
const increaseItemQuantity = asyncHandler(async (req, res) => {
        
    const { productId } = req.params
    
    //Check if the product exists
    const product = await Product.findById(productId)

    if(!product){
        res.status(400)
        throw new Error('Sorry, Product not found in database')
    }

    //Cart for the current user that needs updation
    const cart = await Cart.findById({client:req.user._id})

    if(!cart)
    {
        res.status(400)
        throw new Error('Sorry, the cart for the user does not exist. Start a new one')
    }

    //Finding the product position in the cart.products array that needs updation
    const updatingProductIndexVal = cart.products.findIndex((product) =>
                                    product.productId.toString() === productId )

    //if the product doesn't exist in cart, the index value will be -1
    if(updatingProductIndexVal === -1){
        res.status(400);
        throw new Error('Product does not exist to update');        
    }
    
    //if the product exists, update the quantity
    //Check if we have enough stock to let the user add the quantity of product in cart
    let expectedQuantity = cart.products[updatingProductIndexVal].quantity + 1;
    if( expectedQuantity > product.quantity ){
        res.status(400)
        throw new Error('Sorry, we are running low, Requested quantity is unavailable')
    }

    cart.products[updatingProductIndexVal].quantity += 1;
    
    //saving cart info to DB
    await cart.save()

    //fetching the items in cart
    //extracting productIds to find the product details
    const productIds = cart.products.map((product) => product.productId);

    //Using $in operator to match any of the values in productIds array
    //if match, returning the product object of that id
    const products = await Product.find({ _id: { $in: productIds } });

    //Combining the quantity and full product data into a single array of product objects
    //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
    const cartItems = cart.products.map((product) => 
    {   
        const productData = products.find((p) => p._id.equals(product.productId));
        return { product: productData, quantity: product.quantity };
    });

    res.status(200).json({cartItems});
})



//func to decrease quantity (-), when it is 0, remove from cartItems
// @desc    update existing item quantity by subtracting 1 in cart
// @route   PUT /api/cart/:productId
// @access  private
const decreaseItemQuantity = asyncHandler(async (req, res) => {
        
    const { productId } = req.params
    //Check if the product exists
    const product = await Product.findById(productId)

    if(!product){
        res.status(400)
        throw new Error('Sorry, Product not found in database')
    }

    //Cart for the current user that needs updation
    const cart = await Cart.findById({client:req.user._id})

    if(!cart)
    {
        res.status(400)
        throw new Error('Sorry, the cart for the user does not exist. Start a new one')
    }

    //Finding the product position in the cart.products array that needs updation
    const updatingProductIndexVal = cart.products.findIndex((product) =>
                                    product.productId.toString() === productId )

    //if the product doesn't exist in cart, the index value will be -1
    if(updatingProductIndexVal === -1){
        res.status(400);
        throw new Error('Product does not exist to update');        
    }
    
    //if the product exists, update the quantity
    //if the resulted quantity is 0, remove from cart
    let resQuantity = cart.products[updatingProductIndexVal].quantity - 1;
    if(resQuantity === 0){
        //delete the product from array
        cart.products.splice(updatingProductIndexVal,1);
    }
    //else decrease quantity by 1
    cart.products[updatingProductIndexVal].quantity -= 1;
    
    //saving cart info to DB
    await cart.save()

    //fetching the items in cart
    //extracting productIds to find the product details
    const productIds = cart.products.map((product) => product.productId);

    //Using $in operator to match any of the values in productIds array
    //if match, returning the product object of that id
    const products = await Product.find({ _id: { $in: productIds } });

    //Combining the quantity and full product data into a single array of product objects
    //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
    const cartItems = cart.products.map((product) => 
    {   
        const productData = products.find((p) => p._id.equals(product.productId));
        return { product: productData, quantity: product.quantity };
    });

    res.status(200).json({cartItems});

})


// // @desc    update existing item in cart
// // @route   PATCH /api/cart/:productId
// // @access  private
// const updateCartItemQuantity = asyncHandler(async (req, res) => {
        
//     const { productId } = req.params
    
//     const {quantity} = req.body

//     // Validate quantity received
//     if (quantity === undefined || quantity === null || typeof quantity !== 'number') {
//         res.status(400);
//         throw new Error('Invalid request body');
//     }

//     //Cart for the current user that needs updation
//     const cart = await Cart.findById({client:req.user._id})

//     if(!cart)
//     {
//         res.status(400)
//         throw new Error('Sorry, the cart for the user does not exist. Start a new one')
//     }

//     //Finding the product position in the cart.products array that needs updation
//     const updatingProductIndexVal = cart.products.findIndex((product) =>
//                                     product.productId.toString() === productId )

//     //if the product doesn't exist in cart, the index value will be -1
//     if(updatingProductIndexVal === -1){
//         res.status(400);
//         throw new Error('Product does not exist to update');        
//     }
    
//     //if the product exists, update the quantity
//     cart.products[updatingProductIndexVal].quantity += quantity;
    
//     //saving cart info to DB
//     await cart.save()
//     res.status(200).json({});//TODO: return array of item objects that has product and quantity field
// })


// @desc    delete an item in cart
// @route   DELETE /api/cart/:cartId/products/:productId
// @access  private
const deleteCartItem = asyncHandler(async (req, res) => {

   //reading the cartId and productId from request
   const { cartId, productId } = req.params
   
   //Finding the cart, which has the item to be removed
   const cart = await Cart.findById(cartId)

   //finding the product position in the cart.products array that needs to be deleted
   const deletingProductIndexVal = cart.products.findIndex(
    (product) => product.productId.toString() === productId )

    //if the product doesn't exist in cart
    if(deletingProductIndexVal === -1){
        res.status(400)
        throw new Error('The product does not exist in cart')
    }
    
    //Else delete the product from array
    cart.products.splice(deletingProductIndexVal,1);

    //saving the updated cart document in Database
    await cart.save()

    //if the cart has no items left
    if (cart.products.length === 0) {
        res.status(200).json({message: 'Your cart is empty'});
    }
    
    //if the cart has the item removed and has other products in it
    //fetching the items in cart
    //extracting productIds to find the product details
    const productIds = cart.products.map((product) => product.productId);

    //Using $in operator to match any of the values in productIds array
    //if match, returning the product object of that id
    const products = await Product.find({ _id: { $in: productIds } });

    //Combining the quantity and full product data into a single array of product objects
    //attaching product info so, in front end to display additional info like title, desc and images for the user to identify.
    const cartItems = cart.products.map((product) => 
    {   
        const productData = products.find((p) => p._id.equals(product.productId));
        return { product: productData, quantity: product.quantity };
    });

    res.status(200).json({cartItems});
        
})

module.exports = {
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteCartItem,
    getCartItems
}