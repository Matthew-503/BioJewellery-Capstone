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
    address: shippingAddress._id,
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

  const address = await Address.findById({'address': address})
  
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
  
  const account = await Account.findOne({'email':req.body.email});

  if (!account) {
    res.status(400)
    throw new Error('Sorry, there is no account with this email.')
  }

  res.status(200).json({ account })
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

  if(!req.body.password || !req.body.name || !req.body.phoneNumber || !req.body.street || !req.body.city 
    || !req.body.province || !req.body.country || !req.body.postalCode) {
      res.status(400)
      throw new Error('Error, fields missing')
    }

  const account = await Account.findOne({'email':req.body.email});

  //Check for account 
    if(!account) {
      res.status(400)
      throw new Error('Account not found')
    }

    //Hasing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Save password
    account.password = hashedPassword || account.password

    //save name
    account.user.name = req.body.name || account.user.name

    //save phone number
    account.user.phoneNumber = req.body.phoneNumber || account.user.phoneNumber

    //save address
    account.user.address = account.user.address || {}

    //save street
    account.user.address.street = req.body.street || account.user.address.street

    //save city
    account.user.address.city = req.body.city || account.user.address.city

    //save province
    account.user.address.province = req.body.province || account.user.address.province

    //save country
    account.user.address.country = req.body.country || account.user.address.country

    //save postalcode
    account.user.address.postalCode = req.body.postalCode || account.user.address.postalCode

    //save apartment
    account.user.address.apartment = req.body.apartment || account.user.address.apartment

    await account.save()

    res.status(200).json({message: 'Account Updated'});

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
  updateAccount,
}