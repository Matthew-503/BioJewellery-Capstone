const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, addItemToCart, increaseItemQuantity, decreaseItemQuantity, deleteCartItem } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, addItemToCart);

router.route('/:productId').patch(protect, increaseItemQuantity).put(protect, decreaseItemQuantity).delete(protect, deleteCartItem);

module.exports = router;