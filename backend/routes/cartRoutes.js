const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getCartItems, addItemToCart, increaseItemQuantity, decreaseItemQuantity, deleteCartItem } = require('../controllers/cartController');

router.route('/').get(protect, getCartItems).post(protect, addItemToCart);


router.route('/:productName/quantity/:quantity').get(protect, increaseItemQuantity);


router.route('/:quantity/name/:productName').get(protect, decreaseItemQuantity);


router.route('/:productId').delete(protect, deleteCartItem);

module.exports = router;