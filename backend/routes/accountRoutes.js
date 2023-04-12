const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  suspendAccount,
  appealAccount,
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerAccount).get(getAccount);
router.post('/login', loginAccount)
router.get('/me', protect)
router.put('/:email', updateAccount, appealAccount, suspendAccount)

module.exports = router
