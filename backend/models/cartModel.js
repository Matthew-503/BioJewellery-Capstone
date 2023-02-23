const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
   
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Cart', orderSchema);