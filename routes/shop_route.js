const express=require("express")
const shop_route=express()
const multer=require("multer")
const path = require("path");
const bodyParser=require("body-parser")
shop_route.use(bodyParser.json())
shop_route.use(bodyParser.urlencoded({ extended: true }));
shop_route.use(express.static('public'));
const shopController=require('../controllers/shop_controller')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/shopImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });
product_route.post('/add_product', upload.single('productImage'), shopController.addProduct);
module.exports=product_route;