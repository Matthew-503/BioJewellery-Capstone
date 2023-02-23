const mongoose = require('mongoose');
const productImages = new mongoose.Schema({
    source:{
        type:Image,
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
});

module.exports = mongoose.model('ProductImages', productImages);