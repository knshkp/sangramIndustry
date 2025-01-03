const express=require("express")
const cart_route=express()
const bodyParser=require("body-parser")
cart_route.use(bodyParser.json())
cart_route.use(bodyParser.urlencoded({ extended: true }));
const cart_controller=require('../controllers/cart_controller.js')
cart_route.post('/add_cart', cart_controller.addCart);
cart_route.post('/remove_cart', cart_controller.removeCart);
cart_route.get('/get_cart', cart_controller.getCart);

module.exports=cart_route;