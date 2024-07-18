const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/employee_ss_controller')
router.post('/addEmployee', VendorControllers.addEmployee)
router.get(`/getEmployee`, VendorControllers.getEmployeeServiceDetails)
module.exports = router;
