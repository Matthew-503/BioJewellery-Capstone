const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cart'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    amount: {
        type: Number,
        required: true
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
        default:'P'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);