const express = require('express'); 
const router = express.Router();
const { getAllProducts, getProduct, setProduct, updateProduct, deleteProduct,sortProducts } = require('../controllers/productController');
const {  setProductImage, getProductImage, deleteProductImage, updateProductImage } = require('../controllers/productImagesController');
const { protect } = require('../middleware/authMiddleware');
const {upload}  = require('../middleware/ImageMiddleware');




router.route('/all').get(getAllProducts)

router.route('/sort/:sortType').get(sortProducts)

router.route('/').post( upload.single('image'),[setProduct, setProductImage]);

router.route('/:name').get(getProduct);

router.route('/:id').put( protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;