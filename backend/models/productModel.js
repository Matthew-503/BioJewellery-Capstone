const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        default: "Needs a name",
        unique: true
    },
    description:{
        type:String,
        required:false,
        default:"Enter a new description"
    },
    price: {
        type:Number,
        required:false,
        default:0
    },
    quantity: {
        type:Number,
        required: false,
        default:0
    },
    type:{
        type:String,
        required:false,
        default:"No Type"
    },
    colour: {
        type:String,
        required:false,
        default:"No Colour"
    },
    onSale: {
        type:Boolean,
        required:false,
        default:false
    },
    isPopular: {
        type:Boolean,
        required:false,
        default:false
    },
    isVisible: {
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
        required:false,
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

module.exports = mongoose.model('Product', productSchema);