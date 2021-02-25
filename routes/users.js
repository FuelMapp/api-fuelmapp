const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js')

// CRUD
router.get('/', controller.getUsers)
router.post('/', controller.createUser)

module.exports = router;
