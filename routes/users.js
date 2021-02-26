const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js')
const auth = require('../controllers/auth.js')

// AUTH 
router.post('/login', auth.login)
router.get('/logout', auth.logout)

// CRUD
router.get('/', controller.getUsers)
router.post('/', controller.createUser)

module.exports = router;
