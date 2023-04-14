const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { canReview,getReview, createReview, respondToReview, deleteReview } = require('../controllers/reviewController');

//error for authorization when testing getReview route. Help!
router.route('/').get(getReview).post(protect, createReview);
router.route('/:name').get(getReview)
router.route('/:reviewId').put(protect, respondToReview)
router.route('/delete/:reviewId').put(protect, deleteReview);




module.exports = router;