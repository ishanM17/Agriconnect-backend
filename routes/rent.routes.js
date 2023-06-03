const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');

const {
    createPost,
    getAll,
    addLender,
    getBorrowerPost
} = require('../controllers/rent.controller');

router.post('/createPost', auth, createPost);
router.get('/getAll', auth, getAll);
router.put('/addLender', auth, addLender);
router.get('/getBorrowerPost/:id', auth, getBorrowerPost);

module.exports = router;