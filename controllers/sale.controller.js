const mongoose = require('mongoose');
const Sale = require('../models/sale');

const createPost = async (req, res) => {
    try{
        const { crop, quantity, farmer_address, price, date_of_harvest } = req.body;
        const newPost = new Sale({
            farmer: req.user._id,
            crop: crop,
            quantity: quantity,
            farmer_address: farmer_address,
            price: price,
            date_of_harvest: date_of_harvest
        });
        await newPost.save();
        res.status(201).json(newPost);
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try{
        const salePosts = await Sale.find();
        if(!salePosts){
            return res.status(200).json({ message: 'No sale postings available' });
        }
        res.status(200).json(salePosts);
    } catch(err) {
        return res.status(500).json({ error: err.message });
    }
}

const addBuyer = async (req, res) => {
    //this function is for Buyer to accept the Sale request
    try{
        const soldPost =  await Sale.findOneAndUpdate({buyer: req.body.FarmerId}, {buyer: req.user._id});
        res.status(200).json(soldPost);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const addTransporter = async (req, res) => {
    //this function is for transport facilitator to accept the transport request
    try{
        const soldPost =  await Sale.findOneAndUpdate({buyer: req.body.FarmerId, farmer: req.body.farmer    }, {transporter: req.user._id});
        res.status(200).json(soldPost);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getFarmerPost = async (req, res) => {
    try{
        const farmerPost = await Sale.find({farmer: req.params['id']}).sort({_id: -1});
        if(!farmerPost){
            return res.status(200).json({ message: 'No sale postings available' });
        }
        res.status(200).json(farmerPost);

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createPost,
    getAll,
    addBuyer,
    addTransporter,
    getFarmerPost
}