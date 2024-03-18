const express=require("express")
const cart_route=express()
const bodyParser=require("body-parser")
cart_route.use(bodyParser.json())
cart_route.use(bodyParser.urlencoded({ extended: true }));
const buy_controller=require('../controllers/buy_controller.js')
cart_route.post('/buy_now',buy_controller.addProduct);
cart_route.get('/get_buy',buy_controller.getProduct);
module.exports=cart_route;