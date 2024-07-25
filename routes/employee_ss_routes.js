const express = require('express');
const router = express.Router();
const VendorControllers = require('../controllers/employee_ss_controller')
router.post('/addEmployeeService', VendorControllers.addEmployee)
router.post('/addEmplohyeeComplaint',VendorControllers.addEmployeeComplaint)
router.get('/getEmployeeComplaint',VendorControllers.getEmployeeCompalint)
router.get(`/getEmployee`, VendorControllers.getEmployeeServiceDetails)
module.exports = router;
