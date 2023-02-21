const express = require('express'); 
const router = express.Router();
const { getAllFeedback, getFeedback, createFeedback, updateFeedback, deleteFeedback } = require('../controllers/feedbackController');

router.route('/all').get(getAllFeedback)

router.route('/').get(getFeedback).post(createFeedback);


router.route('/:id').put( updateFeedback).delete(deleteFeedback);

module.exports = router;