const mongoose = require('mongoose');
const Global = require('./globalModel');

const orderSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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
        enum: ['P', 'S', 'C', 'R', 'V'], //p - pending, S - shipped, C - Complete, R - Returned, V - Void
        default:'P' 
    }
},{
    timestamps: true
});

orderSchema.virtual('total').get(function () {
    const globalObj = Global.findOne()
    const gst = globalObj.gst

    if (!this.cart || !this.cart.subTotal || !gst) {
        throw new Error('Invalid order data: missing cart, subTotal, or gst');
    }
    let total = 0
    total = cart.subTotal * gst
    return total
})

module.exports = mongoose.model('Order', orderSchema);