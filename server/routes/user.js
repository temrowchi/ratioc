const express = require('express');
const db = require('../queries')

const router  = express.Router(); 
const userController = require('../controllers/user'); 

//To do: Call below via userController and via query.
router.get('/user/:id', db.getUserById)
router.get('/user', db.getUsers)
router.post('/user', db.createUser)
router.put('/user/:id', db.updateUser)
router.delete('/user/:id', db.deleteUser)

module.exports = router; 
