const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500
mongoose.connect('mongodb+srv://capstoneAdmin:SvQg1sqyLwWSwBPv@cluster0.3dwonfx.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error', err => {
    logError(err);
  });

  app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));
  