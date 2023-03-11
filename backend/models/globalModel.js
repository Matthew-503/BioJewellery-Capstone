const mongoose = require('mongoose');
const globalSchema = new mongoose.Schema({
    //default value 5% - current gst rate in Alberta
    gst:{
        type: Number,
        default: 0.05,
        required: true
    }
});

module.exports = mongoose.model('Global', globalSchema);