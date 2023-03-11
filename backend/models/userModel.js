const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    type:{
        type:String,
        require:true,
        default:"Client"
    },
    addresses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        }
    ],
    defaultAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);