const mongoose = require('mongoose');
const Global = require('./globalModel');

const orderSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
    },
    orderItems:[
        {
            productName: {
                type: String
            },
            quantity: {
                type: Number
            }
        }
    ],
    orderTotal:{
        type: Number
    },
    receiptNumber:{
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);