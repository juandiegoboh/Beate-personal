const express = require('express');
const router = express.Router();

const { getOne, create, deleteOne, update, addTrack, deleteTrack, getAll } = require('./controller')

router.get('/album/:name', getOne);
router.get('/album', getAll)
router.post('/album', create);
router.put('/album/:_id', update);
router.put('/album/addtrack/:_id', addTrack);
router.put('/album/deletetrack/:_id', deleteTrack);
router.delete('/album/:_id', deleteOne);

module.exports = router;