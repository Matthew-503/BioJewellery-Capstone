const express = require('express')
const router = express.Router()
const {
    suspendUser,
    appealUser,
} = require('../controllers/employeeController')

router.route('/me').patch(protect, appealUser).put(protect, suspendUser);
