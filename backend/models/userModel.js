const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:false
    },
    type:{
        type:String,
        required:true,
        default:"Client"
    }

});

module.exports = mongoose.model('User', userSchema);