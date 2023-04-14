const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getAddress, updateAddress } = require('../controllers/addressController');


router.route('/:userId').get(protect, getAddress).put(protect, updateAddress);

module.exports = router;
