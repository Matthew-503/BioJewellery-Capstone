const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  forgotPassword,
  resetPassword,
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerAccount).get(getAccount);
router.post('/login', loginAccount)
router.get('/me', protect, getAccount)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', authPassword, resetPassword)
router.put('/', updateAccount)

module.exports = router
