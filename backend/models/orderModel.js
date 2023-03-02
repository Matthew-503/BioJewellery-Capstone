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
    gst:{
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

orderSchema.virtual('total').get(function () {
    if (!this.cart || !this.cart.subTotal || !this.gst) {
        throw new Error('Invalid order data: missing cart, subTotal, or gst');
    }
    let total = 0
    total = cart.subTotal * this.gst
    return total
})

module.exports = mongoose.model('Order', orderSchema);