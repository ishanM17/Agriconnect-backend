const mongoose = require('mongoose');
const Sell = require('../models/farmerSellPost');

const postBid = async (req, res)=> {
    try{
        const { seller, crop, quantity, address, price, date_of_harvest, buyer } = req.body
        
        const newPost = new Sell({

        })
    }
}