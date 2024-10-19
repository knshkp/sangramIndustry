const express = require("express");
const shop_route = express();
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const shopController = require('../controllers/shop_controller');
const ExpenseController=require('../controllers/expense_controller')
const categoryController = require('../controllers/category_controller');

shop_route.use(bodyParser.json());
shop_route.use(bodyParser.urlencoded({ extended: true }));
shop_route.use(express.static('public'));

// Set up multer storage for category image
const categoryImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/categoryImages'));
    },
    filename: function (req, file, cb) {
        const name = 'category-' + Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

// Set up multer storage for banner image
const bannerImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/bannerImages'));
    },
    filename: function (req, file, cb) {
        const name = 'banner-' + Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/categoryImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

// Configure multer to handle multiple file uploads
const upload = multer({
    storage: multer.memoryStorage()
});
const uploads = multer({ storage: storage });

shop_route.post('/add_category', upload.fields([
    { name: 'categoryImage', maxCount: 1 },
    { name: 'bannerImage', maxCount: 1 }
]), categoryController.addCategory);

shop_route.get('/get_category', categoryController.getCategory);
shop_route.post('/add_banner', uploads.single('bannerImage'),shopController.addBanner);
shop_route.get('/remove_banner',shopController.removeBanner);
shop_route.get('/get_banner',shopController.getBanner);
shop_route.post('/add_product',uploads.single('productImage'), shopController.addProduct);
shop_route.post('/addExpense',uploads.single('expenseImage'),ExpenseController.addExpense)
shop_route.get('/get_product', shopController.getProduct);
shop_route.get('/remove_product/:id',shopController.removeProduct);

module.exports = shop_route;
