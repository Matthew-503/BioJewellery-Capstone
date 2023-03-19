// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This model is to save gst value
 
const mongoose = require('mongoose');
const globalSchema = new mongoose.Schema({
    //default value 5% - current gst rate in Alberta
    gst:{
        type: Number,
        default: 5,
        required: true
    }
});

module.exports = mongoose.model('Global', globalSchema);