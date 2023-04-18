const express = require('express')
const router = express.Router()
const {
  returnrequest
} = require('../controllers/returnController')


router.post('/', returnrequest)


module.exports = router
