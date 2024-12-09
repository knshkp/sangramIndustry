const express = require('express');
const path = require('path')
const http=require('http')
const cors=require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const cloudinary=require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});

const MONGODB_USERNAME = encodeURIComponent(process.env.MONGODB_USERNAME);
const MONGODB_PASSWORD = encodeURIComponent(process.env.MONGODB_PASSWORD);
const MONGODB_DBNAME = process.env.MONGODB_DBNAME;
const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.zl5jwix.mongodb.net/${MONGODB_DBNAME}?retryWrites=true&w=majority`;
const shopRoute=require('./routes/shop_route')
const authRoute = require('./routes/auth')
const vendorRoute = require('./routes/vendor')
const employeeRoute = require('./routes/employee')
const buySellRoute=require('./routes/buy_sell_routes')
const cartRoute=require('./routes/cart_route')
const buyProductRoute=require('./routes/buy_product_routes')
const rateRoute=require('./routes/rate_routes')
const employeeServiceRoute=require('./routes/employee_ss_routes')
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/shop',shopRoute)
app.use('/user',authRoute)
app.use('/vendor',vendorRoute)
app.use('/entry',buySellRoute)
app.use('/cart',cartRoute)
app.use('/buy',buyProductRoute)
app.use('/rate',rateRoute)
app.use('/employee',employeeRoute)
app.use('/employeeServices',employeeServiceRoute)
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})