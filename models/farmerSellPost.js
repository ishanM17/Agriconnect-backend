const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerSellPost = new Schema({
    seller: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "seller id is required"]
    },
    crop: {
        type: String,
        required: [true, 'Crop name is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Crop Quantity is required']
    },
    address: {
        type: String,
        required: [true, 'Farmer address is required']
    },
    price: {
        type: Number,
        required: [true, 'Crop price is required']
    },
    date_of_harvest: {
        type: Date,
        ref: 'User',
        required: [true, 'Date of harvest is required']
    }
});


module.exports = mongoose.model('Sell', sellSchema);