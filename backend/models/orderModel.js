const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);