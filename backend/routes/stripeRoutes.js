const express = require('express'); 
const router = express.Router();
const { checkout, createProduct } = require('../controllers/stripeController');


router.route('/').post(checkout);
router.route('/product').post(createProduct);

module.exports = router;