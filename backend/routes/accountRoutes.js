const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  forgotPassword,
  resetPassword,
  authPassword,
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerAccount).get(getAccount).put(updateAccount);
router.post('/login', loginAccount)
router.get('/me', protect, getAccount)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', authPassword, resetPassword)


module.exports = router
