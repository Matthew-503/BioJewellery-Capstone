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
    }

});

module.exports = mongoose.model('User', userSchema);