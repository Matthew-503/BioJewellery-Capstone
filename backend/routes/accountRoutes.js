const express = require('express')
const router = express.Router()
const {
  registerAccount,
  loginAccount,
  getAccounts,
  updateAccount,
  suspendAccount,
  appealAccount,
} = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerAccount).get(getAccounts);
router.post('/login', loginAccount)
router.get('/me', protect)
router.put('/:email', updateAccount, appealAccount, suspendAccount)

module.exports = router
