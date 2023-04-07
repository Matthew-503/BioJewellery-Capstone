const express = require('express'); 
const router = express.Router();
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct,sortProducts } = require('../controllers/productController');
const {  setProductImage, getProductImage, deleteProductImage, updateProductImage } = require('../controllers/productImagesController');
const { protect } = require('../middleware/authMiddleware');
const {upload}  = require('../middleware/ImageMiddleware');
const { createProductInStripe, updateProductPriceInStripe } = require('../controllers/stripeController');

router.route('/all').get(getAllProducts)

router.route('/sort/:sortType').get(sortProducts)

//testing: to be removed
router.route('/').post( createProductInStripe, setProduct);
router.route('/:name').put( updateProductPriceInStripe, updateProduct);

// router.route('/').post( upload.single('image'), createProductInStripe ,[setProduct, setProductImage]);

// router.route('/:name').get(getProduct);

//router.route('/:id').put( protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;