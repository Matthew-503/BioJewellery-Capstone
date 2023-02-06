const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
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
    client:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('order', orderSchema);