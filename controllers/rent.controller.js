const mongoose = require('mongoose');
const Rent = require('../models/rent');

const createPost = async (req, res) => {
    try{
        const { equipment, date, duration, address, budget, borrower} = req.body;
//borrower is filling the form
        const newPost = new Rent({
            borrower: req.user._id,
            equipment: equipment,
            date: date,
            duration: duration,
            address: address,
            budget: budget
        });
        await newPost.save();
        res.status(201).json(newPost);
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try{
        const rentPosts = await Rent.find();
        if(!rentPosts){
            return res.status(200).json({ message: 'No rent postings available' });
        }
        res.status(200).json(rentPosts);
    } catch(err) {
        return res.status(500).json({ error: err.message });
    }
}

const addLender = async (req, res) => {
    //this function is for lender to accept the rent request
    try{
        const rentedPost =  await Rent.findOneAndUpdate({borrower: req.body.borrowerId}, {lender: req.user._id});
        res.status(200).json(rentedPost);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const getBorrowerPost = async (req, res) => {
    try{
        const borrowerPosts = await Rent.findOne({borrower: req.params['id']});
        if(!borrowerPosts){
            return res.status(200).json({ message: 'No rent postings available' });
        }
        res.status(200).json(borrowerPosts);

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createPost,
    getAll,
    addLender,
    getBorrowerPost
}