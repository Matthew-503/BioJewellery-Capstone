const express = require('express'); 
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const { getGst, updateGst } = require('../controllers/gstController');

router.route('/').get(protect, getGst).put(protect, updateGst);

module.exports = router;
