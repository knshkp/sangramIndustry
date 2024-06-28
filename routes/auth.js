const express = require('express');
const router = express.Router();
const AuthControllers = require('../controllers/auth')

router.post('/login', AuthControllers.userLogin)
router.get('/get_user', AuthControllers.getUsers)

module.exports = router;