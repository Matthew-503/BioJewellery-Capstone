const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAddress, getAddresses, createAddress, updateAddress, deleteAddress } = require('../controllers/addressController');


router.route('/').get(protect, getAddress).put(protect, updateAddress);

module.exports = router;
