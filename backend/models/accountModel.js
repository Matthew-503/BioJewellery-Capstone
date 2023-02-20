const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({

    email:{
        type:String,
        unique: true,
        require:true
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
        require: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Account', accountSchema);