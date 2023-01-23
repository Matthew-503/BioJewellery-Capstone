const mongoose = require('mongoose');
const imageContentSchema = new mongoose.Schema({
    source:{
        type:Image,
        require:true
    }
});


module.exports = mongoose.model('imageContent', imageContentSchema);