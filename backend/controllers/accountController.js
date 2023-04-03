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
  const accountExists = await Account.findOne({ emailLowerCase })

  if (accountExists) {
    res.status(400)
    throw new Error('Account already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create Shipping Address
  const shippingAddress = await Address.create({
    client: user._id,
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

  //push into address list as well
  user.addresses.push(shippingAddress)

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
  const account = await Account.findOne({ emailLowerCase })

  //user object
  const user = await User.findById(account.user)

  
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

const suspendAccount = asyncHandler(async(req,res) => {
  res.status(200).json(req.account)
})

const appealAccount = asyncHandler(async(req,res) => {
  res.status(200).json(req.account)
})

// @desc    Get user data
// @route   GET /api/users/account
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


// @desc    Update Account
// @route   POST /api/update
// @access  Public
const updateAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id)

  //Check for account 
    if(!account) {
      res.status(400)
      throw new error('Account not found')
    }

    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, 
      req.body, {
        new: true,
      })

    res.status(200).json(updatedAccount)  
})

module.exports = {
  registerAccount,
  loginAccount,
  getAccount,
  updateAccount,
  suspendAccount,
  appealAccount,
}