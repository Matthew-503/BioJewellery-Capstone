const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const feedbackModel = require('../models/feedbackModel');


const getAllFeedback = asyncHandler(async (req, res) => {
    try {
        const feedback = await feedbackModel.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get all feedback');
    }

})


const getFeedback = asyncHandler(async (req, res) => {
    try {
        if (req.body._id === null || req.body._id === '' || req.body._id === undefined) {
            res.status(400)
            throw new Error('No way to determine feedback being searched for');
        }
        const feedback = await feedbackModel.find({ _id: req.body._id });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the feedback you are looking for');
    }

})


const createFeedback = asyncHandler(async (req, res) => {
    
    res.status(200).json({ message: 'Created feedback' });
})


const updateFeedback = asyncHandler(async (req, res) => {

    res.status(200).json('Updated feedback');
})


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