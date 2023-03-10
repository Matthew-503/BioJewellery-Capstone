// Author: Sri Guru
// Version 0.1

const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Address = require('../models/addressModel')

// @desc    Get all the addresses related to an account
// @route   GET /api/addresses
// @access  Public
const getAddresses = asyncHandler(async (req, res) => {
    try {   

        //finidng user object and replacing address ids with address objects in addresses array
        const user = await User.findById(req.user._id).populate('addresses')

        //Finding addresses for the selected user
        const addresses =  user.addresses

        res.status(200).json(addresses);

    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the saved addresses for this account');
    }

})

// @desc    create an address for a user
// @route   POST /api/addresses
// @access  Private
const createAddress = asyncHandler(async (req, res) => {
    
    //user account 
    const user = await User.findById(req.user._id)

    const { street, city, province, country, postalCode } = req.body

    if (!street || !city || !province || !country || !postalCode) {
      res.status(400)
      throw new Error('Please provide all fields!')
    }

    //Check if address already saved for the user
    const addressExists = await Address.findOne({
        client: req.user._id,   
        street,
        city,
        province,
        country,
        postalCode
    })
    
    if(addressExists){
        res.status(400)
        throw new Error('Address already saved!');
    }
                                
    //creating address
    const address = await Address.create({
        client: req.user._id,   
        street,
        city,
        province,
        country,
        postalCode
     });

    //adding address to DB
    await address.save()

    //adding address under the related user
    user.addresses.push(address)

    //saving the updated user object
    await user.save()
    
    res.status(200).json({ message: 'Address Added' });
})

// @desc    update a posted review 
// @route   PUT /api/addresses/:addressId
// @access  Private
const updateAddress = asyncHandler(async (req, res) => {

    //receiving address fields 
    const {street, city, province, country, postalCode} = req.body

    //finding the address that needs to be updated
    const address = await Address.findById(req.params.addressId)

    //throw error if no address exists by that id
    if(!review){
        res.status(400)
        throw new Error('Sorry, address not found')
    }

    //check if the account trying to update address is same as the account saved address
    if(address.client.toString() !== req.user._id.toString()){
        res.status(400)
        throw new Error('Not authorized to update this address')
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

// @desc    delete an address
// @route   DELETE /api/addresses/:addressId
// @access  Private
const deleteAddress = asyncHandler(async (req, res) => {

    //finding the address that needs to be removed
    const address = await Address.findById(req.params.addressId)

    //throw error if no address exists by that id
    if(!address){
        res.status(400)
        throw new Error('Sorry, address not found')
    }

    //check if the account trying to delete address is same as the account saved address
    if(address.client.toString() !== req.user._id.toString()){
        res.status(400)
        throw new Error('Not authorized to delete this address')
    }

    //Updating addresses field of user object
    const user = await User.findById(req.user._id)
    user.addresses.pull(address._id)
    await user.save()

    //Remove address from database
    await address.remove()

    res.status(200).json('Address Removed');
})
module.exports = {
    createAddress,
    updateAddress,
    deleteAddress,
    getAddresses
}