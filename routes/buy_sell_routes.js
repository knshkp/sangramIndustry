const express=require("express")
const buy_sell_route=express()
const path = require("path");
const bodyParser=require("body-parser")
buy_sell_route.use(bodyParser.json())
buy_sell_route.use(bodyParser.urlencoded({ extended: true }));
buy_sell_route.use(express.static('public'));
const buySellController=require('../controllers/buy_sell_controller')
buy_sell_route.post('/add_buy_entry', buySellController.addBuyEntry);
buy_sell_route.post(`/add_sell_entry`,buySellController.addSellEntry);
buy_sell_route.get('/get_buy_entry',buySellController.getBuyEntry);
buy_sell_route.get('/get_sell_entry',buySellController.getSellEntry);
buy_sell_route.get('/get_daily_report',buySellController.getDailyReport);
module.exports=buy_sell_route;