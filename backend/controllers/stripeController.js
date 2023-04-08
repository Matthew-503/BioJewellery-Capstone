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

// @desc    add the product in Stripe before adding it in DB
// @access  Private
const createProductInStripe = asyncHandler(async (req, res, next) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const amount  = req.body.price;
        
        //Creating product in Stripe
        const product = await stripe.products.create({
            name,
            description
        });
       
        // Convert price from dollars to cents
        const priceInCents = amount * 100;

        const price = await stripe.prices.create({
            unit_amount: priceInCents,
            currency: 'cad',
            product: product.id
        });
        
        req.stripeProductId = product.id;
        req.priceApiId = price.id;
        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

})

// @desc    Edit the product price in Stripe and also update it in DB
// @access  Private
const updateProductPriceInStripe = asyncHandler(async (req, res, next) => {
    try {
    const {name, description, price } = req.body

    //finding the product that needs to be updated
    const productObj = await Product.findOne({'name': req.params.name});

    //Retrieve the current active price object for the product from Stripe
    const currentPriceObj = await stripe.prices.retrieve(productObj.priceApiId);

    // Convert price from dollars to cents
    const priceInCents = price * 100;

    //compare new and old price update only if different
    if(priceInCents !== currentPriceObj.unit_amount)
    {

        //creating a new price obj for the updated price
        const newPriceObj = await stripe.prices.create({
            product: productObj.stripeProductId,
            unit_amount: priceInCents,
            currency: 'cad'
        });

        //setting new price as default
        await stripe.products.update(
            productObj.stripeProductId,
            {
                name: name,
                description: description,
                default_price: newPriceObj.id
            }
        );

        //changing the status of old price obj to inactive, since we cannot delete price in Stripe
        await stripe.prices.update(currentPriceObj.id, {
            active: false
        });

        req.priceApiId = newPriceObj.id;
        next();
    }
    else{
        
        //updating product info other than price
        await stripe.products.update(
            productObj.stripeProductId,
            {
                name: name,
                description: description
            }
        );

        next();
    }
    

    // res.send({productObj});
    // res.send(newPriceObj.id);

    } catch (error) {
    console.error(error);
    res.status(500).json({ error });
    }

})

module.exports = {    
    checkout,
    createProductInStripe,
    updateProductPriceInStripe
}