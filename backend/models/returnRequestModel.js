const mongoose = require('mongoose');
const returnRequestSchema = new mongoose.Schema({
    reason:{
        type:String,
        require:true
    },
    startDate:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        require:true,
        default:'P'
    }
});

module.exports = mongoose.model('ReturnRequest', returnRequestSchema);