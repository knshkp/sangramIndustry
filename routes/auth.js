const express = require('express');
const router = express.Router();
const AuthControllers = require('../controllers/auth')
const SmsControllers=require('../controllers/sms')
router.post('/login', AuthControllers.userLogin)
router.get('/get_user', AuthControllers.getUsers)
router.post('/otp',SmsControllers.sendOtp)
module.exports = router;