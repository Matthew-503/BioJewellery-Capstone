const express = require('express'); 
const router = express.Router();
const { getCartItems, addToCart, updateCart, deleteCartItems } = require('../controllers/cartController');

router.route('/').get(getCartItems).post(addToCart);

router.route('/:productId').put(updateCart).delete(deleteCartItems);

module.exports = router;