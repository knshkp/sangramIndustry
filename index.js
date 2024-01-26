const express = require('express');
const path = require('path')
const http=require('http')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cloudinary=require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.enc.cloudinary_api_secret,
});

// MongoDB Connection
const MONGODB_USERNAME = encodeURIComponent(process.env.MONGODB_USERNAME);
const MONGODB_PASSWORD = encodeURIComponent(process.env.MONGODB_PASSWORD);
const MONGODB_DBNAME = process.env.MONGODB_DBNAME;
const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.q83ut8c.mongodb.net/${MONGODB_DBNAME}?retryWrites=true&w=majority`;
const shopRoute=require('./routes/shop_route')
const authRoute = require('./routes/auth')
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
app.use('/login',authRoute)
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})