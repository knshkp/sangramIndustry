const express=require("express")
const cart_route=express()
const bodyParser=require("body-parser")
cart_route.use(bodyParser.json())
cart_route.use(bodyParser.urlencoded({ extended: true }));
const buy_controller=require('../controllers/buy_controller.js')
cart_route.post('/buy_now',buy_controller.addProduct);
cart_route.get('/get_buy',buy_controller.getProduct);
cart_route.get('/get_current_orders',buy_controller.getCurrentOrders)
cart_route.get('/get_past_orders',buy_controller.getPastOrders);
cart_route.post('/update_order_status',buy_controller.updateOrderStatus)
module.exports=cart_route;