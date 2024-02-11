const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/vendor')

router.post('/add_vendor', VendorControllers.addVendor)

router.get('/user_id/:user_id/get_vendor_details', VendorControllers.getVendorDetails)

module.exports = router;