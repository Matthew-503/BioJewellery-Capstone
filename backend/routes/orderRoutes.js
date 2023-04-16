const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getOrder, createOrder } = require('../controllers/orderController');

router.route('/').post( createOrder );

router.route('/:orderId').get(protect, getOrder);

module.exports = router;