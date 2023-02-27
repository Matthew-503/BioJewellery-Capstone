const express = require('express'); 
const router = express.Router();
const { getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

router.route('/').post(createOrder);

router.route('/:orderId').get(getOrder).put(updateOrder).delete(deleteOrder);

module.exports = router;