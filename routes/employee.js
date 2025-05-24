const express = require('express');
const router = express.Router();
const ExpenseController=require("../controllers/expense_controller")
const VendorControllers = require('../controllers/employee')
const AttendanceControllers=require('../controllers/attendance_controller')
router.post('/addEmployee', VendorControllers.addEmployee)
router.post('/editEmployee', VendorControllers.editEmployee)
router.post('/loginEmployee', VendorControllers.loginEmployee)
router.get(`/getEmployee`, VendorControllers.getEmployeeDetails)
router.get(`/removeEmployee`, VendorControllers.removeEmployee)
router.post('/addExpense',ExpenseController.addExpense)
router.get('/getExpense',ExpenseController.getExpense)
router.post('/addAttendance', AttendanceControllers.markAttendance);
router.get('/attendance/:phone', AttendanceControllers.getEmployeeAttendance);
router.get('/attendance', AttendanceControllers.getAllAttendance);
module.exports = router;
