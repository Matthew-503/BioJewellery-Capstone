const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        default: "Needs a name",
        unique: true
    },
    description:{
        type:String,
        require:false,
        default:"Enter a new description"
    },
    price: {
        type:Number,
        require:false,
        default:0
    },
    quantity: {
        type:Number,
        require: false,
        default:0
    },
    type:{
        type:String,
        require:false,
        default:"No Type"
    },
    colour: {
        type:String,
        require:false,
        default:"No Colour"
    },
    onSale: {
        type:Boolean,
        require:false,
        default:false
    },
    isPopular: {
        type:Boolean,
        require:false,
        default:false
    },
    isVisible: {
        type:Boolean,
        require:true,
        default:true
    },
    isAvailable:{
        type:Boolean,
        required:true,
        default:true
    },
    isAvailable:{
        type:Boolean,
        required:true,
        default:true
    },
    salePercent: {
        type:Number,
        require:false,
        default:0
    },
    images:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductImages'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

productSchema.virtual('finalPrice').get(function(){
    return (this.price - (this.price * (this.salePercent / 100)))
})

module.exports = mongoose.model('Product', productSchema);