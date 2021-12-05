const express = require('express');
const router = express.Router();

const { create, addFollowers, deleteFollowing, deleteFollowers, update, getUsername, getName } = require('./controller');

router.get('/users/:input', getUsername);
router.get('/users/:input', getName);
router.post('/users', create);
router.put('/users', update);
router.put('/users/follow', addFollowers);
router.put('/users/deleteFollowing', deleteFollowing);
router.put('/users/deleteFollowers', deleteFollowers);
module.exports = router;
