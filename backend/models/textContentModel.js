const mongoose = require('mongoose');
const textContentSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
});


module.exports = mongoose.model('TextContent', textContentSchema);