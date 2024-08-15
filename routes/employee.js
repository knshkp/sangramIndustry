const express = require('express');
const router = express.Router();
const ExpenseController=require("../controllers/expense_controller")
const VendorControllers = require('../controllers/employee')
router.post('/addEmployee', VendorControllers.addEmployee)
router.post('/loginEmployee', VendorControllers.loginEmployee)
router.get(`/getEmployee`, VendorControllers.getEmployeeDetails)
router.get(`/removeEmployee`, VendorControllers.removeEmployee)
router.post('/addExpense',ExpenseController.addExpense)
router.get('/getExpense',ExpenseController.getExpense)
module.exports = router;
