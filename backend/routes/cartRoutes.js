const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, addItemToCart, updateCartItemQuantity, deleteCartItem } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, addItemToCart);

router.route('/:productId').patch(protect, updateCartItemQuantity).delete(protect, deleteCartItem);

module.exports = router;