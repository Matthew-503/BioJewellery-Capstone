const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAddress, getAddresses, createAddress, updateAddress, deleteAddress } = require('../controllers/addressController');

router.route('/').get(protect, getAddresses).post(protect, createAddress);

router.route('/:addressId').get(protect, getAddress).put(protect, updateAddress).delete(protect, deleteAddress);

module.exports = router;