// Author: Sri
// Description: controller logic for Stripe Payment Process
// Version 0.1
// Date: 22/03/2023

const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')

//Initializing stripe client for our account using secret key
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// @desc    create a checkout session
// @route   POST /checkout
// @access  Private
const checkout = asyncHandler(async (req, res) => {
    try{
    const items = req.body.cartItems;
    const email = req.body.userEmail;

    //data formatting for stripe
    let lineItems = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let product = await Product.findOne({ name: item.name });
        if (product) {

          // Convert price from dollars to cents
          const priceInCents = product.price * 100;

          lineItems.push({
            price_data: {
                currency: 'cad',
                product_data: {
                    name: product.name
                },
                unit_amount: priceInCents
            },
            quantity: item.quantity
          });
        }
    }

    //initializing Stripe session
    const session = await stripe.checkout.sessions.create({
        line_items : lineItems,
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        currency: 'cad',
        customer_email: email,
        automatic_tax: {enabled: true}
    });
 
    //sending response to front end
    res.send(JSON.stringify({
        url: session.url
    }));

    }catch (error) {
        
        res.status(400)
        throw new Error(error);
    }
    
})

// @desc    add the product in Stripe
// @route   POST /checkout/product
// @access  Private
const createProduct = asyncHandler(async (req, res) => {
    try {
        const { name, description, amount } = req.body;
        
        //Creating product in Stripe
        const product = await stripe.products.create({
            name,
            description
        });

        const price = await stripe.prices.create({
            unit_amount: amount,
            currency: 'cad',
            product: product.id
          });

        res.json({ priceId: price.id });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

})

// @desc    add the product in Stripe
// @route   PUT /checkout/product
// @access  Private
const updateProductPrice = asyncHandler(async (req, res) => {
    try {
        const { priceId, newPrice } = req.body;
        
        const updatedPrice = await stripe.prices.update(priceId, {
            unit_amount: newPrice
          });

        res.json({updatedPrice});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

})

module.exports = {    
    checkout,
    createProduct,
    updateProductPrice
}