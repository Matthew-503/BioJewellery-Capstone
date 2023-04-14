const express = require('express'); 
const router = express.Router();
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct,sortProducts } = require('../controllers/productController');
// const {  setProductImage, getProductImage, deleteProductImage, updateProductImage } = require('../controllers/productImagesController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/ImageMiddleware');
const { createProductInStripe, updateProductPriceInStripe } = require('../controllers/stripeController')



router.route('/all').get(getAllProducts)

// router.route('/sort/:sortType').get(sortProducts)

router.route('/form-data').get(upload.none(), getProduct);
router.route('/').post( upload.single('image'), createProductInStripe, setProduct);
router.route('/form-data').put( upload.single('image'), updateProductPriceInStripe, updateProduct );

// router.route('/').post( setProduct );
// router.route('/:name').get(getProduct);

// router.route('/:id').put( protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;