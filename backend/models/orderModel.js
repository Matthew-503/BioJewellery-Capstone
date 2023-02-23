const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    startDate:{
        type:Date,
        required:true
        
    }, 
    shipDate:{
        type:Date,
        required:false
    },
    receiveDate:{
        type:Date,
        required:false
    },
    trackingNumber:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'P'
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Order', orderSchema);