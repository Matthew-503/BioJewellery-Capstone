const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    active:{
        type:String,
        require:true,
        default:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);