/**
 * Add TYPE of user under userModel. We will identify what kind of user it is by a middleware thats gonna check this field
 */
// Author: Naomy, Sri
// Version 1.0

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')
const Address = require('../models/addressModel')
const User = require('../models/userModel')

// @desc    Register new Account
// @route   POST /api/account
// @access  Public
const registerAccount = asyncHandler(async (req, res) => {
  const { name, email, password, street, city, province, country, postalCode } = req.body

  if (!name || !email || !password ||!street || !city || !province|| !country|| !postalCode) {
    res.status(400)
    throw new Error('Please add all fields!')
  }

  const emailLowerCase = email.toLowerCase()

  // Check if account exists
  const accountExists = await Account.findOne({ 'email': emailLowerCase })

  if (accountExists) {
    res.status(400)
    throw new Error('Account already exists' + accountExists)
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create Shipping Address
  const shippingAddress = await Address.create({
  
    street,
    city,
    province,
    country,
    postalCode
  })

  //Create User 
  const user = await User.create({
    name: name,
    shippingAddress: shippingAddress._id
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
      user: {
        _id: user._id
      }
    })
  } 
  else {
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
  const account = await Account.findOne({ 'email': emailLowerCase })

  //user object
  const user = await User.findById(account.user)

  if (!user){
    res.status(400)
    throw new Error('Account not found.')
  }
  
  if (account && (await bcrypt.compare(password, account.password))) {
    res.json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      user:{
        _id: user._id,
        type: user.type
      }      
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