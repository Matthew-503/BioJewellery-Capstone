const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getReview, createReview, updateReview, deleteReview } = require('../controllers/reviewController');

router.route('/').get(getReview).post(protect, createReview);

router.route('/:reviewId').put(protect, updateReview).delete(protect, deleteReview);

module.exports = router;