const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')
const User = require('../models/userModel')

// @desc    Register new Account
// @route   POST /api/account
// @access  Public
const registerAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields!')
  }

  const emailLowerCase = email.toLowerCase()

  // Check if account exists
  const accountExists = await Account.findOne({ emailLowerCase })

  if (accountExists) {
    res.status(400)
    throw new Error('Account already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)


  //Create User 
  const user = await User.create({
    name: name,
  })

  // Create account
  const account = await Account.create({
    email: emailLowerCase,
    password: hashedPassword,
    user: user._id,
  })

  if (account) {
    res.status(201).json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      name: name,
      user: user._id
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate an Account
// @route   POST /api/account/login
// @access  Public
const loginAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  
  const emailLowerCase = email.toLowerCase()

  // Check for user email
  const account = await Account.findOne({ emailLowerCase })


  if (account && (await bcrypt.compare(password, account.password))) {
    res.json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      userid: account.user,
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getAccount = asyncHandler(async (req, res) => {
  res.status(200).json(req.account)
})

// Generate JWT -- id is the payload
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerAccount,
  loginAccount,
  getAccount,
}