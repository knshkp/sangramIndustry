const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/vendor')

router.post('/addVendor', VendorControllers.addVendor)
router.post('/loginVendor', VendorControllers.loginVendor)
router.post('/updateVendor',VendorControllers.updateVendorByPhoneController)

router.get(`/getVendor`, VendorControllers.getVendorDetails)
router.get(`/removeVendor`, VendorControllers.removeVendor)

module.exports = router;
