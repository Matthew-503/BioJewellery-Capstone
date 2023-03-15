const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, createCart, updateCartItem, deleteCartItem } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, createCart);

router.route(':productId').patch(protect, updateCartItem).delete(protect, deleteCartItem);

module.exports = router;