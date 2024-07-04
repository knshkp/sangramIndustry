const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/employee')
router.post('/addEmployee', VendorControllers.addEmployee)
router.post('/loginEmployee', VendorControllers.loginEmployee)
router.get(`/getEmployee`, VendorControllers.getEmployeeDetails)
router.get(`/removeEmployee`, VendorControllers.removeEmployee)
module.exports = router;
