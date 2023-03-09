const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/all').get(getAllProducts)

router.route('/').get(getProduct).post(protect, setProduct);

router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;