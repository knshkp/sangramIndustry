const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // or your temp folder
const router = express.Router();
const VendorControllers = require('../controllers/employee_ss_controller')
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/addEmployeeService', upload.single('file'), VendorControllers.addEmployee);
router.post('/addEmplohyeeComplaint',VendorControllers.addEmployeeComplaint)
router.post('/addEmplohyeeComplaint',VendorControllers.addEmployeeComplaint)
router.post('/updateEmployeeComplaint',VendorControllers.updateEmployeeComplaint)
router.get('/getEmployeeComplaint',VendorControllers.getEmployeeCompalint)
router.get(`/getEmployee`, VendorControllers.getEmployeeServiceDetails)
router.get(`/getAllService`, VendorControllers.getEmployeeServiceDetails)
router.post('/addMarketingEntry',VendorControllers.addMarketingEntry)
module.exports = router;
