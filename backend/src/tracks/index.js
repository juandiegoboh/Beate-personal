const express = require('express');
const router = express.Router();

const { get, create, deleteOne, update, uploadTrack } = require('./controller')

router.get('/tracks/:input', get);
router.post('/tracks', create);
router.post('/tracks/subir', uploadTrack);
router.put('/tracks/:_id', update);
router.delete('/tracks/:_id', deleteOne);

module.exports = router;
