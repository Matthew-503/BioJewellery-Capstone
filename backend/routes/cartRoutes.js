const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, addItemToCart, updateCartItem, deleteCartItem } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, addItemToCart);

router.route('/:cartId/products/:productId').patch(protect, updateCartItem).delete(protect, deleteCartItem);

module.exports = router;