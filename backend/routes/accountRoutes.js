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
const authPassword = require('../middleware/passwordMiddleware')


router.post('/', registerAccount)
router.post('/login', loginAccount)
router.get('/me', protect, getAccount)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', authPassword, resetPassword)

//10:32 https://www.youtube.com/watch?v=AClnCg_WCJk
//router.get('/reset-password/:id/:token', resetPassword)

module.exports = router
