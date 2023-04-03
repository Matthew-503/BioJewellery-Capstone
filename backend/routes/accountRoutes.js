const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
  forgotPassword,
  resetPassword
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerAccount)
router.post('/login', loginAccount)
router.get('/me', protect, getAccount)
router.get('/forgot-password', forgotPassword)

//10:32 https://www.youtube.com/watch?v=AClnCg_WCJk
router.get('/reset-password/:id/:token', resetPassword)

module.exports = router
