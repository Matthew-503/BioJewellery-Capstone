const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAddress, createAddress, updateAddress, deleteAddress } = require('../controllers/addressController');

router.route('/').get(protect, getAddress).post(protect, createAddress);

router.route('/:addressId').put(protect, updateAddress).delete(protect, deleteAddress);

module.exports = router;
