const asyncHandler = require('express-async-handler');
const Feedback = require('../models/feedbackModel');
const Order = require('../models/orderModel');

// @desc    Get all feedback posted
// @route   GET /api/feedback/all
// @access  Public
const getAllFeedback = asyncHandler(async (req, res) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get all feedback');
    }

})

// @desc    Get feedback posted for an order
// @route   GET /api/feedback
// @access  Private
const getFeedback = asyncHandler(async (req, res) => {
    try {
        if (req.body._id === null || req.body._id === '' || req.body._id === undefined) {
            res.status(400)
            throw new Error('No way to determine feedback being searched for');
        }
        const feedback = await Feedback.find({ _id: req.body._id });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the feedback you are looking for');
    }

})

// @desc    create a feedback for an order
// @route   POST /api/feedback
// @access  Private
const createFeedback = asyncHandler(async (req, res) => {

    //user account creating the feedback
    const client = req.user._id

    const { description, orderRating, paymentRating, deliveryRating, productRating } = req.body

    if (!description || !orderRating || !paymentRating || !deliveryRating || !productRating) {
      res.status(400)
      throw new Error('Please provide all fields!')
    }

    //Check if order exists
    const orderExists = Order.findById()

    //Check if already provided feedback
    
    //creating feedback
    const feedback = await Feedback.create({
        description,
        orderRating,
        paymentRating,
        deliveryRating,
        productRating,
        client
     });

    

    
    
    res.status(200).json({ message: 'Created feedback' });
})

// @desc    update a created feedback 
// @route   PUT /api/feedback/:id
// @access  Private
const updateFeedback = asyncHandler(async (req, res) => {

    res.status(200).json('Updated feedback');
})

// @desc    delete a feedback posted
// @route   DELETE /api/feedback
// @access  Private
const deleteFeedback = asyncHandler(async (req, res) => {

    res.status(200).json('Feedback deleted');
})
module.exports = {
    createFeedback,
    updateFeedback,
    deleteFeedback,
    getFeedback,
    getAllFeedback
}