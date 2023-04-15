const express = require('express'); 
const router = express.Router();

const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct,sortProducts } = require('../controllers/productController');
const { createProductInStripe, updateProductPriceInStripe } = require('../controllers/stripeController')
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/ImageMiddleware');

router.route('/sort/:sortType').get(sortProducts)
router.route('/all').get(getAllProducts)
router.route('/form-data').get(upload.none(), getProduct);

router.route('/').post( upload.single('image'), createProductInStripe, setProduct);

router.route('/form-data').put( upload.single('image'), updateProductPriceInStripe, updateProduct );

router.route('/:id').delete(protect, deleteProduct);


module.exports = router;