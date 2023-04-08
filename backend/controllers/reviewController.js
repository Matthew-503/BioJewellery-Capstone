// Author: Sri Guru
// Version 0.1
const asyncHandler = require('express-async-handler')
const Review = require('../models/reviewModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')
const Order = require('../models/orderModel')
// @desc    Get all the reviews posted for a product
// @route   GET /api/product/:productId/reviews
// @access  Public
const getReview = asyncHandler(async (req, res) => {
    try {        
        //product for which the reviews are requested
        const productSelected = await Product.findById({_id:req.params.productId})

        //Finding reviews for the selected product
        const reviews = await Review.find({ product: productSelected });
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
    
    const { rating, title, comment, userId, productId } = req.body;

    // Find the product being reviewed
    const product = await Product.findById(productId);

    // Find the user account writing the review
    const user = await User.findById(userId);
    const name = user.name;

    if (!rating) {
      res.status(400);
      throw new Error('Please provide rating!');
    }

    if (!title) {
        res.status(400);
        throw new Error('Please provide title!');
    }

    if (!comment) {
        res.status(400);
        throw new Error('Please provide comment!');
    }

    // Check if review already posted for the product by the user
    const reviewExists = await Review.findOne({ product: productId, client: userId });
    
    if (reviewExists) {
        res.status(400);
        throw new Error('Product already reviewed!');
    }

    const ratingFormatted = Number.parseInt(rating);  

    // Create review document
    const review = new Review({
        name: name,
        rating: ratingFormatted,
        title: title,
        comment: comment,
        client: user,
        product: product     
    });

    // Save review to the database
    const createdReview = await review.save();

    res.status(200).json({ createdReview });
});

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
