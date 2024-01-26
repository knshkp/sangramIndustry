const express = require('express');
const router = express.Router();
const AuthControllers = require('../controllers/auth')

router.post('/login', AuthControllers.userLogin())

router.post('/signUp', AuthControllers.userSignUp())

module.exports = router;