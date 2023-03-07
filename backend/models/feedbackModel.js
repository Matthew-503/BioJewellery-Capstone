const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    orderRating:{
        type:Number,
        required:true
    },  
    paymentRating:{
        type:Number,
        required:true
    },
    deliveryRating:{
        type:Number,
        required:true
    },
    productRating:{
        type:Number,
        required:true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});


module.exports = mongoose.model('Feedback', feedbackSchema);