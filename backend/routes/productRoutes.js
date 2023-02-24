const express = require('express'); 
const router = express.Router();
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/all').get(getAllProducts)

router.route('/').post(setProduct);


router.route('/:id').get(getProduct).put( updateProduct).delete(deleteProduct);

module.exports = router;