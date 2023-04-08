// Author: Naomy
// Date: 14/03/2023

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const productModel = require('../models/productModel');

string = "test"


const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const getProduct = asyncHandler(async (req, res) => {
    try {
        if (req.params.name === null || req.params.name === '' || req.params.name === undefined) {
            res.status(400)
            throw new Error('No way to determine product being searched for');
        }
        const product = await productModel.find({ name: req.params.name });
        res.status(200).json({ product });
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the products');
    }

})


const setProduct = asyncHandler(async (req, res) => {

    try {        
    
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.quantity) {
        res.status(400)
        throw new Error('Please provide all fields!')
    }

    const product = await productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        stripeProductId: req.stripeProductId,
        priceApiId: req.priceApiId
    })
    
    if (!product) {
        res.status(400)
        throw new Error('error in product creation!')
    }

    //req.body.productId = product._id

    res.json({product});

    //For uploading images
    // next();

    } catch (error) {
        throw new Error(error);
    }

    
})

const updateProduct = asyncHandler(async (req, res) => {

        
    res.status(200).json('Updated product');
})


const deleteProduct = asyncHandler(async (req, res) => {

    res.status(200).json('Product deleted');
})

const sortProducts = asyncHandler(async (req, res) => {
    let products;
    const sortChoice = req.params.sortType

    if (req.params.sortType === ' ') {
        throw new Error('Cant sort products by ' + sortChoice)
    }
    switch (sortChoice) {
        case 'Ascd':
            products = await productModel.find();
            products = sortByAsc(products);

            break;
        case 'Dscd':
            products = await productModel.find();
            products = sortByDscd(products);
            break;
        case 'On Sale':
            products = await productModel.find({ onSale: true });
            
            break;
        case 'Trending':
            products = await productModel.find({ Trending: true });
            
            break;
        case 'Popular':
            products = await productModel.find({ isPopular: true });
            break;
        default:
            throw new Error('Cant sort products by ' + sortChoice)
    }

    res.status(200).json(products);

})



function sortByAsc(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeAsc(sortByAsc(left), sortByAsc(right));

    function mergeAsc(left, right) {
        const result = [];

        while (left.length && right.length) {
            if (left[0].price <= right[0].price) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return result.concat(left, right);
    }
}




function sortByDscd(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeDsc(sortByDscd(left), sortByDscd(right));
}

function mergeDsc(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0].price >= right[0].price) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}


module.exports = {
    sortProducts,
    setProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
}