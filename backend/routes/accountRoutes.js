const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerAccount)
router.post('/login', loginAccount)
router.get('/me', protect, getAccount)

module.exports = router
