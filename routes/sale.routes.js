const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');

const {
    createPost,
    getAll,
    addBuyer,
    addTransporter,
    getFarmerPost
} = require('../controllers/sale.controller');

router.post('/createPost', auth, createPost);
router.get('/getAll', auth, getAll);
router.put('/addBuyer', auth, addBuyer);
router.put('/addTransporter', auth, addTransporter);
router.get('/getFarmerPost/:id', auth, getFarmerPost);

module.exports = router;