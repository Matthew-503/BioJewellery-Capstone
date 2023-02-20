const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:false
    },
    type:{
        type:String,
        require:true,
        default:"Client"
    }

});

module.exports = mongoose.model('User', userSchema);