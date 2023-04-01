const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { uploadImage } = require('../middleware/ImageMiddleware');

router.route('/').post(protect, uploadImage);


module.exports = router;
