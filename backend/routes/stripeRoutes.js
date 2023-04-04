const express = require('express'); 
const router = express.Router();
const { checkout, createProduct, updateProductPrice } = require('../controllers/stripeController');


router.route('/').post(checkout);
router.route('/product').post(createProduct).put(updateProductPrice);

module.exports = router;