const mongoose = require('mongoose');
const express = require('express');
const { urlencoded } = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const colours  = require('colors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorHandler')

//Mongodb connections
connectDB();

app.use(express.json());
app.use(urlencoded({extended: false}));


//Connect the routes and controllers

//For all product routes
app.use('/api/product', require('./routes/productRoutes.js'));

//User routes 
app.use('/api/account', require('./routes/accountRoutes.js'));

//Review routes
app.use('/api/product/:productId/reviews', require('./routes/reviewRoutes.js'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));


//To run server type: 'npm start server'