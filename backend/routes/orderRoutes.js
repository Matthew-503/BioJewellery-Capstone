const express = require('express'); 
const router = express.Router();
const { getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

router.route('/').get(getOrder).post(createOrder);

router.route('/:orderId').put(updateOrder).delete(deleteOrder);

module.exports = router;