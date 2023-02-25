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

        //returning cart items
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
const existingProductIndexVal = cart.products.findIndex((product) =>
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

// @desc    update items in an existing cart
// @route   PATCH /api/cart/:cartId/products/:productId
// @access  private
const updateCartItem = asyncHandler(async (req, res) => {
        
    const { cartId, productId } = req.params
    
    const {quantity} = req.body
    // Validate request body
    if (quantity === undefined || quantity === null || typeof quantity !== 'number') {
        res.status(400);
        throw new Error('Invalid request body');
    }

    
    //Cart that needs updation
    const cart = await Cart.findById(cartId)

    if(!cart)
    {
        res.status(400)
        throw new Error('Sorry, the cart does not exist. Create a new one')
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
    cart.products[updatingProductIndexVal].quantity += quantity;
    
    //saving cart info to DB
    await cart.save()
    res.status(200).json({message:'Cart items Updated'});
})

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
    //Using splice method to delete, the sec arg 1 specifies no. of the elts that are removed starting from that index
    cart.products.splice(deletingProductIndexVal,1);

    //saving the updated cart document in Database
    await cart.save()

    //if the cart has no items left
    if (cart.products.length === 0) {
        res.status(200).json({message: 'Your cart is empty'});
    }
    
    //if the cart has the item removed and has other products in it
    res.status(200).json({message: 'Product removed from cart successfully!'});
        
})
module.exports = {
    createCart,
    updateCartItem,
    deleteCartItem,
    getCartItems
}