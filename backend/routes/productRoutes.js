const express = require('express'); 
const router = express.Router();
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct,sortProducts } = require('../controllers/productController');
const { createProductInStripe, updateProductPriceInStripe } = require('../controllers/stripeController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/ImageMiddleware');


router.route('/all').get(getAllProducts);

router.route('/sort/:sortType').get(sortProducts);

router.route('/').post( upload.single('productData.imageFile'), setProduct );

// router.route('/').post(protect, createProductInStripe, upload.single('productPic'), setProduct );

router.route('/').put(protect, updateProductPriceInStripe, upload.single('productpic'), updateProduct );

router.route('/:id').get(getProduct).delete(protect, deleteProduct);


module.exports = router;