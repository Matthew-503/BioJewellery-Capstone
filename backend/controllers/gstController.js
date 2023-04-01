// Author: Sri
// Description: GST controller logic
// Version 0.1
// Date: 15/03/2023

const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Gst = require('../models/globalModel')

// @desc    Get the GST value
// @route   GET /api/gst
// @access  Private
const getGst = asyncHandler(async (req, res) => {
    try {   
        //finiding gst
        const gstObj = await Gst.findOne();

        res.status(200).json(gstObj.gst);

    } catch (error) {
        res.status(400)
        throw new Error('Unable to get the GST value');
    }

})

// @desc    update GST value
// @route   PUT /api/gst
// @access  Private
const updateGst = asyncHandler(async (req, res) => {
    //receiving gst from request
    const {gst} = req.body
    
    //finiding gst document
    const gstObj= await Gst.find()

    //throw error if no gstObj is returned
    if(!gstObj){
        res.status(400)
        throw new Error('Sorry, GST value not found')
    }

    //set the gst to the new values or by default the existing value
    gstObj.gst = gst ?? gstObj.gst
    
    //save updated gst to database
    await gstObj.save()

    res.status(200).json('GST Updated');
})

module.exports = {
    getGst,
    updateGst
}