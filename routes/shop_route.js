const express=require("express")
const shop_route=express()
const multer=require("multer")
const path = require("path");
const bodyParser=require("body-parser")
shop_route.use(bodyParser.json())
shop_route.use(bodyParser.urlencoded({ extended: true }));
shop_route.use(express.static('public'));
const shopController=require('../controllers/shop_controller')
const categoryController=require('../controllers/category_controller')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/categoryImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });
shop_route.post('/add_category',upload.single('categoryImage'),categoryController.addCategory)
shop_route.get('/get_category',categoryController.getCategoryResult)
shop_route.post('/add_product', shopController.addProduct);
shop_route.get('/get_product', shopController.getProduct);
module.exports=shop_route;