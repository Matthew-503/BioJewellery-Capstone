const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    description:{
        Type:String,
        require:true
    },
    orderRating:{
        Type:Number,
        require:true
    },  
    paymentRating:{
        Type:Number,
        require:true
    },
    deliveryRating:{
        Type:Number,
        require:true
    },
    productRating:{
        Type:Number,
        require:true
    },
    client:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
});


module.exports = mongoose.model('Feedback', feedbackSchema);