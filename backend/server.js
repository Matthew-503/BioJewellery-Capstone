const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://capstoneAdmin:SvQg1sqyLwWSwBPv@cluster0.3dwonfx.mongodb.net/biojewerlyDB?retryWrites=true&w=majority');

mongoose.connection.on('error', err => {
    logError(err);
  });

app.use(express.json());

//Connect the routes and controllers
app.use('/api/goals', require('./routes/goalRoutes'));
app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));

//To run server type: 'npm start server'