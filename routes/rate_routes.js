const express = require('express');
const router = express.Router();
const RateControllers = require('../controllers/rate_controller')

router.post('/addRate', RateControllers.addRate)

router.get(`/getRate`, RateControllers.getRateDetails)

module.exports = router;