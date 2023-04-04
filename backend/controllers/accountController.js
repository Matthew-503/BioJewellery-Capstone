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
  const { name, email, password, street, city, province, country, postalCode, apartment} = req.body

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
    postalCode, 
    apartment
  })

  //Create User 
  const user = await User.create({
    name: name,
    shippingAddress: shippingAddress._id
  })

  //push into address list as well
  // user.addresses.push(shippingAddress)

  // Create account
  const account = await Account.create({
    email: emailLowerCase,
    password: hashedPassword,
    user: user._id,
  })

  if (account) {
    res.json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      user:{
        _id: user._id,
        type: user.type,
        name: user.name
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
  
  if (account && (await bcrypt.compare(password, account.password))) {
    const user = await User.findById({ '_id': account.user})
    res.json({
      _id: account.id,
      email: account.email,
      token: generateToken(account._id),
      user:{
        _id: user._id,
        type: user.type,
        name: user.name
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

// @desc    Forgot Password
// @route   POST /api/account/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const emailLowerCase = email.toLowerCase()

  try {
    const oldaccount = await Account.findOne({ 'email': emailLowerCase })
    if (!oldaccount) {
      res.status(400)
      throw new Error('User does not exist!');
    }
    const secret = JWT_SECRET + oldaccount.password;
    const token = jwt.sign({ email: oldaccount.email, id: oldaccount._id }, secret, {
      expiresIn: "5m",
    });
       
    //http://localhost:8001/api/account/
    //http://localhost:8001/ --> when host the website we need to replace this part to the website server 
    const link = `http://localhost:8001/api/account/reset-password/${oldaccount._id}/${token}`;
    console.log(link)
  } catch (error) {
    
  }
})

// @desc    Reset Password
// @route   POST /api/account/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
})

module.exports = {
  registerAccount,
  loginAccount,
  getAccount,
  forgotPassword,
  resetPassword,
}