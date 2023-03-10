// Author: Sri Guru
// Version 0.1
const asyncHandler = require('express-async-handler')
const Review = require('../models/reviewModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')

// @desc    Get all the reviews posted for a product
// @route   GET /api/product/:productId/reviews
// @access  Public
const getReview = asyncHandler(async (req, res) => {
    try {        
        //product for which the reviews are requested
        const productSelected = await Product.findById(req.params.productId)

        //Finding reviews for the selected product
        const reviews = await Review.find({ product: productSelected._id });
        res.status(200).json(reviews);

    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the review you are looking for');
    }

})

// @desc    create a review for a product
// @route   POST /api/product/:productId/reviews
// @access  Private
const createReview = asyncHandler(async (req, res) => {

    //Product being reviewed
    const product = await Product.findById(req.params.productId)
    
    //user account writing the review
    const user = await User.findById(req.user._id)

    const { rating, title, comment } = req.body

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
                                
    //creating review
    const review = await Review.create({
        name: user.name,
        rating,
        title,
        comment,
        client: req.user._id,
        product: product._id     
     });

    //adding review to DB
    await review.save()

    //adding review under the related product
    product.reviews.push(review)

    //saving the altered product object
    await product.save()
    
    res.status(200).json({ message: 'Review Created' });
})

// @desc    update a posted review 
// @route   PUT /api/product/:productId/reviews/:reviewId
// @access  Private
const updateReview = asyncHandler(async (req, res) => {

    //receiving review fields from request
    const {rating, title, comment} = req.body

    //finding the review that needs to be updated
    const review = await Review.findById(req.params.reviewId)

    //throw error if no review exists by that id
    if(!review){
        res.status(400)
        throw new Error('Sorry, review not found')
    }

    //check if the account trying to update review is same as the account posted review
    if(review.client.toString() !== req.user._id.toString()){
        res.status(400)
        throw new Error('Not authorized to update this review')
    }

    //set the review fields to the new values or by default the existing value
    review.rating = rating ?? review.rating
    review.title = title ?? review.title
    review.comment = comment ?? review.comment

    //save updated review to database
    await review.save()

    res.status(200).json('Review Updated');
})

// @desc    delete a review posted
// @route   DELETE /api/product/:productId/review/:reviewId
// @access  Private
const deleteReview = asyncHandler(async (req, res) => {

    //finding the review that needs to be removed
    const review = await Review.findById(req.params.reviewId)

    //throw error if no review exists by that id
    if(!review){
        res.status(400)
        throw new Error('Sorry, review not found')
    }

    //check if the account trying to delete review is same as the account posted review
    if(review.client.toString() !== req.user._id.toString()){
        res.status(400)
        throw new Error('Not authorized to delete this review')
    }

    //update reviews array field of product
    const product = Product.findById(req.params.productId)
    product.reviews.pull(review._id)
    await product.save()

    //Remove review from database
    await review.remove()

    res.status(200).json('Review Removed');
})
module.exports = {
    createReview,
    updateReview,
    deleteReview,
    getReview
}