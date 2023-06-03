const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    farmer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "Farmer id is required"]
    },
    buyer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    crop: {
        type: String,
        required: [true, "Crop name is required"]
    }, 
    quantity: {
        type: Number,
        required: [true, "Crop quantity is required"]
    },
    farmer_address : {
        type: String,
        required: [true, "Farmer address is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    date_of_harvest: {
        type: Date,
        required: [true, "Date is required"]
    },
    buyer_address: {
        type: String,
    },
    transport: {
        type: String,
        ref: "User"
    }
});

module.exports = mongoose.model('Sale', saleSchema);