const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentSchema = new Schema({
    borrower: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, "Borrower id is required"]
    },
    equipment: {
        type: String,
        required: [true, "Equipment name is required"]
    }, 
    date: {
        type: Date,
        required: [true, "Date is required"]
    }, 
    duration: {
        type: Number,
        required: [true, "Borrow duration is required"]
    }, 
    address: {
        type: String,
        required: [true, "Lender address is required"]
    }, 
    budget: {
        type: Number,
        required: [true, "Budget is required"]
    }, 
    lender: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Rent', rentSchema);