const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },       
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, {
    timestamps: true
});

cartSchema.virtual('subTotal').get(function(){
    let sum = 0
    this.products.forEach((product) => {
        sum += (product.productId.finalPrice * product.quantity)
    })
    return sum
})

module.exports = mongoose.model('Cart', cartSchema);