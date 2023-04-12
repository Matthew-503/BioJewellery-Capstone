const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cart'
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
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
        enum: ['P', 'S', 'C'], //p - pending, S - shipped, C - Complete
        default:'P' 
    }
},{
    timestamps: true
});


module.exports = mongoose.model('Order', orderSchema);