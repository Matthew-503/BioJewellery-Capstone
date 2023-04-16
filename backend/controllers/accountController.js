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
const sendMail = require('../helpers/sendEmail')

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
      },
      address:{
        street: address.street,
        city: address.city,
        province: address.province,
        country: address.country,
        postalCode: address.postalCode,
        apartment: address.apartment,
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

// Generate JWT for acsess -- id is the payload
const generateTokenAccess = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}

// @desc    Forgot Password
// @route   POST /api/account/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {

  //get email
  const { email } = req.body;
  const emailLowerCase = email.toLowerCase()

  try {
    //check email 
    const oldaccount = await Account.findOne({ 'email': emailLowerCase })
    if (!oldaccount) {
      res.status(400)
      throw new Error('User does not exist!');
    }

    const user = await User.findById({ '_id': oldaccount.user})

    //create token
    const token = generateTokenAccess(oldaccount.email);
    
    //send email
    //http://localhost:8001/ --> when host the website we need to replace this part to the website server 
    const url = `http://localhost:3000/reset-password/${token}`;
    const name = user.name;
    sendMail.sendEmailReset(email, url, "Reset your password", name)

    //success
    res.status(200).json({ msg: "Re-send the password, please check your email." })
  } catch (error) {
    res.status(500).json({msg: error.message})
  }
})

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

// @desc    Reset Password
// @route   POST /api/account/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  try {
    //get password 
    const {password} = req.body

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //update password 
    const email = req.email

    //const account = await Account.findOne({ 'email': email})
    await Account.findOneAndUpdate(
      {'email': email},
      {'password': hashedPassword}
    );

    //reset success
    res.status(200).json({msg: "Password was updated successfully."})
  }
  catch (error) {
    res.status(500).json({msg: error.message})
  }
})

module.exports = {
  registerAccount,
  loginAccount,
  getAccount,
  forgotPassword,
  resetPassword,
  updateAccount
}