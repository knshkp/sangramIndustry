const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/vendor')

router.post('/addVendor', VendorControllers.addVendor)
router.post('/addVendor', VendorControllers.loginVendor)

router.get(`/getVendor`, VendorControllers.getVendorDetails)
router.get(`/removeVendor`, VendorControllers.removeVendor)

module.exports = router;