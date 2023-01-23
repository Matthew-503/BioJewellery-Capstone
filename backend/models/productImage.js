const mongoose = require('mongoose');
const productImages = new mongoose.Schema({
    source:{
        type:Image,
        require:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Product'
    }
});