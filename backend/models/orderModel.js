const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    startDate:{
        type:Date,
        require:true
        
    }, 
    shipDate:{
        type:Date,
        require:false
    },
    receiveDate:{
        type:Date,
        require:false
    },
    trackingNumber:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
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