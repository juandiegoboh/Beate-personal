const express = require('express');
const router = express.Router();

const {get, create, update, deleteOne, addTrack, deleteTrack} = require('./controller');

router.get('/playlist/:input', get);
router.post('/playlist/', create);
router.put('/playlist/', update);
router.put('/playlist/addtrack/:_id', addTrack);
router.put('/playlist/deletetrack/:_id', deleteTrack)
router.delete('/playlist/', deleteOne);

module.exports = router;
