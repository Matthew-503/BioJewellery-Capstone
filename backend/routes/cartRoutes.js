const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, createCart, updateCart, deleteCartItems } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, createCart);

router.route('/:productId').put(protect, updateCart).delete(protect, deleteCartItems);

module.exports = router;