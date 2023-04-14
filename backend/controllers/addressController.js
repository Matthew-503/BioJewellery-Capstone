// Author: Sri
// Description: Address controller logic
// Version 1.1
// Date: 30/03/2023

const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Address = require('../models/addressModel')

// @desc    Get the address based on user id
// @route   GET /api/address
// @access  Private
const getAddress = asyncHandler(async (req, res) => {
    try {   

        //finiding user object
        const user = await User.findById(req.user._id);

        //finiding address object
        const address = await Address.findById({_id: user.shippingAddress});

        res.status(200).json({address});

    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the shipping address');
    }

})



// @desc    update a posted review 
// @route   PUT /api/address
// @access  Private
const updateAddress = asyncHandler(async (req, res) => {

    //receiving address fields 
    const {street, city, province, country, postalCode} = req.body

    //finding the address that needs to be updated
    //finiding user object
    const user = await User.findById(req.user._id);

    //finiding address object
    const address = await Address.findById({_id: user.shippingAddress});
   
    //throw error if no address exists by that id
    if(!address){
        res.status(400)
        throw new Error('Sorry, address not found')
    }

    //set the address fields to the new values or by default the existing value
    address.street = street ?? address.street
    address.city = city ?? address.city
    address.province = province ?? address.province
    address.country = country ?? address.country
    address.postalCode = postalCode ?? address.postalCode

    //save updated review to database
    await address.save()

    res.status(200).json('Address Updated');
})


module.exports = {
    getAddress,
    updateAddress
}